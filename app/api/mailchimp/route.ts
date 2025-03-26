import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";
import { z } from "zod";
import crypto from "crypto";

// Configure Mailchimp using secure environment variables
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_SERVER_PREFIX!,
});

// Validate the input using zod
const subscribeSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  role: z.string().optional(),
  reasonToJoin: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const { email, name, role, reasonToJoin } = subscribeSchema.parse(body);
    const [firstName, lastName] = name.split(" ");

    const listId = process.env.MAILCHIMP_AUDIENCE_ID;
    if (!listId) {
      return NextResponse.json(
        { error: "Audience list ID not configured" },
        { status: 500 }
      );
    }

    // Normalize email (lowercase) and compute the subscriber hash
    const subscriberHash = crypto
      .createHash("md5")
      .update(email.toLowerCase())
      .digest("hex");

    try {
      // Check if the email is already subscribed
      const member = await mailchimp.lists.getListMember(
        listId,
        subscriberHash
      );

      // If the member exists, update their merge fields
      if (member.status === "subscribed" || member.status === "pending") {
        await mailchimp.lists.updateListMember(listId, subscriberHash, {
          merge_fields: {
            NAME: name || "",
            ROLE: role || "",
            REASON_TO_JOIN: reasonToJoin || "",
          },
        });
        return NextResponse.json(
          { message: "Subscription updated with your latest details" },
          { status: 200 }
        );
      }
    } catch (error: any) {
      // If error status is 404, member doesn't exist – proceed to subscribe.
      if (error.status !== 404) {
        console.error("Error checking subscription:", error);
        return NextResponse.json(
          { error: "Error checking subscription status" },
          { status: error.status || 500 }
        );
      }
    }

    // Attempt to subscribe the email
    try {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName || "",
          LNAME: lastName || "",
          NAME: name || "",
          ROLE: role || "",
          JOIN_MSG: reasonToJoin || "",
        },
        tags: ["musclecode-landing-page", "early-access"],
      });
      return NextResponse.json(
        { success: true, id: response.id },
        { status: 200 }
      );
    } catch (error: any) {
      console.error("Error subscribing:", error);
      // If Mailchimp indicates the member already exists, report success.
      if (
        error.response?.body?.detail &&
        error.response.body.detail.includes("is already a list member")
      ) {
        return NextResponse.json(
          { message: "You are already subscribed" },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Invalid request payload" },
      { status: 400 }
    );
  }
}
