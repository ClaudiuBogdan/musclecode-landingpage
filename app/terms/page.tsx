import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Terms and Conditions - MuscleCode.io",
  description: "Terms and conditions for using MuscleCode.io",
};

export default function TermsPage() {
  const effectiveDate = "March 26, 2025";
  const lastUpdated = "March 26, 2025";

  const privacyPolicyUrl = "/privacy-policy"; // Replace with your actual Privacy Policy URL

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert p-4 m-4">
          <h1 className="mb-4">Terms and Conditions</h1>
          <p className="mb-4">
            Effective Date: {effectiveDate}
            <br />
            Last Updated: {lastUpdated}
          </p>

          <p className="mb-4">
            <strong>
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE
              MUSCLECODE.IO BETA SERVICE.
            </strong>
          </p>

          <h2 className="mb-2 mt-6">1. Acceptance of Terms</h2>

          <p className="mb-4">
            These Terms and Conditions ("Terms") govern your access to and use
            of the MuscleCode.io website (musclecode.io, the "Site") and the
            private beta version of the MuscleCode.io learning platform (the
            "Service"), operated by Devostack OÜ ("MuscleCode.io," "we," "us,"
            or "our").
          </p>

          <p className="mb-4">
            By registering for, accessing, or using the Service, you agree to be
            bound by these Terms and our{" "}
            <Link href={privacyPolicyUrl}>Privacy Policy</Link>, which is
            incorporated herein by reference. If you do not agree to these
            Terms, do not register for, access, or use the Service.
          </p>

          <p className="mb-4">
            If you are using the Service on behalf of a company or other legal
            entity, you represent that you have the authority to bind such
            entity to these Terms, in which case the terms "you" or "your" shall
            refer to such entity.
          </p>

          <h2 className="mb-2 mt-6">2. The Beta Service</h2>

          <p className="mb-4">
            <strong>Purpose:</strong> You are being granted access to the
            Service as an early adopter for the purpose of testing, evaluation,
            and providing feedback to help us improve the platform.
          </p>
          <p className="mb-4">
            <strong>"As Is" Basis:</strong> You acknowledge and agree that the
            Service is provided on an "AS IS" and "AS AVAILABLE" basis. It is a
            beta version, currently under development, and may contain bugs,
            errors, and other problems. We do not guarantee that the Service
            will be uninterrupted, error-free, or meet your specific
            requirements.
          </p>
          <p className="mb-4">
            <strong>Changes and Discontinuation:</strong> We reserve the right
            to modify, suspend, or discontinue the Service (or any part or
            content thereof) at any time, with or without notice, including
            changing features, functionalities, or access levels. We are under
            no obligation to provide support, maintenance, updates, or
            enhancements to the Beta Service.
          </p>
          <p className="mb-4">
            <strong>No Guarantees:</strong> We make no promises or guarantees
            regarding the uptime, reliability, data integrity, or performance of
            the Service during this beta phase.
          </p>

          <h2 className="mb-2 mt-6">3. Beta Program Participation</h2>

          <p className="mb-4">
            <strong>Eligibility:</strong> You must be at least 16 years old to
            use the Service. By agreeing to these Terms, you represent and
            warrant that you meet this age requirement.
          </p>
          <p className="mb-4">
            <strong>Free Access During Beta:</strong> Access to the Service
            during this private beta period is provided free of charge.
          </p>
          <p className="mb-4">
            <strong>Feedback:</strong> As a condition of your participation, you
            agree to provide feedback regarding your use of the Service when
            reasonably requested by us (e.g., through surveys, interviews,
            in-app prompts) or voluntarily. You grant MuscleCode.io a perpetual,
            irrevocable, worldwide, royalty-free, fully paid-up license to use,
            modify, incorporate, and commercially exploit any feedback,
            suggestions, ideas, or reports you provide related to the Service,
            without any obligation or compensation to you.
          </p>
          <p className="mb-4">
            <strong>Confidentiality:</strong> You acknowledge that the features,
            performance, and content of the Beta Service are confidential
            information of MuscleCode.io. You agree not to disclose this
            information to third parties without our prior written consent,
            except as required by law.
          </p>
          <p className="mb-4">
            <strong>Future Access and Fees:</strong> You understand and agree
            that this free access is limited to the duration of the private beta
            program, as determined solely by MuscleCode.io. We reserve the right
            to introduce fees for the Service, change features available in free
            or paid tiers, or otherwise modify the terms of access upon the
            official launch or at any time thereafter, at our sole discretion
            and without obligation to provide continued free access.
          </p>

          <h2 className="mb-2 mt-6">4. Account Registration and Security</h2>

          <p className="mb-4">
            To access the Service, you must register for an account by providing
            accurate and complete information (e.g., name, email address).
          </p>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your
            account login information and are fully responsible for all
            activities that occur under your account.
          </p>
          <p className="mb-4">
            You agree to notify us immediately of any unauthorized use of your
            account or any other breach of security.
          </p>

          <h2 className="mb-2 mt-6">5. User Conduct</h2>

          <p className="mb-4">You agree not to use the Service:</p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              For any unlawful purpose or in violation of any applicable laws.
            </li>
            <li>
              To impersonate any person or entity, or falsely state or otherwise
              misrepresent your affiliation with a person or entity.
            </li>
            <li>
              To interfere with or disrupt the Service or servers or networks
              connected to the Service.
            </li>
            <li>
              To attempt to gain unauthorized access to the Service, other
              accounts, computer systems, or networks connected to the Service.
            </li>
            <li>
              To reverse engineer, decompile, disassemble, or otherwise attempt
              to discover the source code of the Service.
            </li>
            <li>
              To transmit any viruses, worms, defects, Trojan horses, or any
              items of a destructive nature.
            </li>
            <li>To harass, abuse, or harm another person or group.</li>
          </ul>

          <h2 className="mb-2 mt-6">6. Intellectual Property Rights</h2>

          <p className="mb-4">
            <strong>Our IP:</strong> The Service, the Site, and all their
            original content (excluding User Content), features, and
            functionality are and will remain the exclusive property of
            MuscleCode.io and its licensors. The Service is protected by
            copyright, trademark, and other applicable Estonian, EU, and
            international laws. Our trademarks and trade dress may not be used
            in connection with any product or service without our prior written
            consent.
          </p>
          <p className="mb-4">
            <strong>User Content:</strong> You may be able to create, upload, or
            store content within the Service, such as notes, code snippets (as
            part of challenges or practice), flashcards, and contributions to
            chat interactions ("User Content"). You retain ownership of your
            original User Content. However, by submitting User Content to the
            Service, you grant MuscleCode.io a worldwide, non-exclusive,
            royalty-free, sublicensable, and transferable license to use,
            reproduce, distribute, prepare derivative works of, display, and
            perform the User Content solely in connection with operating,
            providing, and improving the Service (including using anonymized or
            aggregated data derived from User Content for analytics and product
            development). This license does not grant us the right to sell or
            individually identify your specific User Content externally, except
            as necessary to provide the Service to you or as described in our
            Privacy Policy.
          </p>
          <p className="mb-4">
            <strong>Feedback:</strong> As stated in Section 3, all feedback
            provided becomes licensed to MuscleCode.io.
          </p>

          <h2 className="mb-2 mt-6">7. Privacy and Data Collection</h2>

          <p className="mb-4">
            Your use of the Service is subject to our{" "}
            <Link href={privacyPolicyUrl}>Privacy Policy</Link>. By using the
            Service, you consent to the collection, use, and sharing of your
            information as described in the Privacy Policy, including the
            collection of usage data essential for improving the platform during
            this beta phase.
          </p>

          <h2 className="mb-2 mt-6">8. Disclaimers</h2>

          <p className="mb-4">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY
            OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT
            PERMITTED BY APPLICABLE LAW, MUSCLECODE.IO DISCLAIMS ALL WARRANTIES,
            EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED
            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
            TITLE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL
            BE UNINTERRUPTED, SECURE, ERROR-FREE, OR FREE OF VIRUSES OR OTHER
            HARMFUL COMPONENTS.
          </p>

          <h2 className="mb-2 mt-6">9. Limitation of Liability</h2>

          <p className="mb-4">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL
            MUSCLECODE.IO, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR LICENSORS BE
            LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
            PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS,
            DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I)
            YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE;
            (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE; (III)
            ANY CONTENT OBTAINED FROM THE SERVICE; AND (IV) UNAUTHORIZED ACCESS,
            USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED
            ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER
            LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE
            POSSIBILITY OF SUCH DAMAGE, AND EVEN IF A REMEDY SET FORTH HEREIN IS
            FOUND TO HAVE FAILED OF ITS ESSENTIAL PURPOSE.
          </p>

          <p className="mb-4">
            OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATED TO
            THE BETA SERVICE IS LIMITED TO TEN EUROS (€10.00) OR THE MINIMUM
            AMOUNT PERMITTED BY LAW.
          </p>

          <h2 className="mb-2 mt-6">10. Indemnification</h2>

          <p className="mb-4">
            You agree to defend, indemnify, and hold harmless MuscleCode.io and
            its licensee and licensors, and their employees, contractors,
            agents, officers, and directors, from and against any and all
            claims, damages, obligations, losses, liabilities, costs or debt,
            and expenses (including but not limited to attorney's fees),
            resulting from or arising out of a) your use and access of the
            Service, or b) a breach of these Terms.
          </p>

          <h2 className="mb-2 mt-6">
            11. Governing Law and Dispute Resolution
          </h2>

          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the
            laws of Estonia, without regard to its conflict of law provisions.
          </p>

          <p className="mb-4">
            Any dispute arising from or relating to the subject matter of these
            Terms shall be finally settled by the competent courts located in
            Harju County, Estonia.
          </p>

          <h2 className="mb-2 mt-6">12. Changes to Terms</h2>

          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material, we will provide
            notice (e.g., via email or a notice within the Service) prior to the
            new terms taking effect. What constitutes a material change will be
            determined at our sole discretion. By continuing to access or use
            our Service after any revisions become effective, you agree to be
            bound by the revised terms.
          </p>

          <h2 className="mb-2 mt-6">13. Miscellaneous</h2>

          <p className="mb-4">
            <strong>Entire Agreement:</strong> These Terms and the Privacy
            Policy constitute the entire agreement between you and MuscleCode.io
            regarding the Beta Service.
          </p>
          <p className="mb-4">
            <strong>Severability:</strong> If any provision of these Terms is
            held to be invalid or unenforceable, the remaining provisions will
            remain in full force and effect.
          </p>
          <p className="mb-4">
            <strong>No Waiver:</strong> Our failure to enforce any right or
            provision of these Terms will not be considered a waiver of those
            rights.
          </p>

          <h2 className="mb-2 mt-6">14. Contact Us</h2>

          <p className="mb-4">
            If you have any questions about these Terms, please contact us:
          </p>

          <p className="mb-4">
            By email:{" "}
            <a href="mailto:legal@devostack.com">legal@devostack.com</a>
          </p>
          <p className="mb-4">
            By mail: Sepapaja tn 6, 15551 Tallinn, Harju Maakond, Estonia
          </p>
        </div>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MuscleCode.io. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
