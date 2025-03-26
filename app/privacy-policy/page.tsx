import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy - MuscleCode.io",
  description: "Privacy policy for MuscleCode.io",
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "March 26, 2025"; // @TODO: Replace with actual date
  const lastUpdated = "March 26, 2025"; // @TODO: Replace with actual date

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
          <h1 className="mb-4">Privacy Policy</h1>

          <p className="mb-4">
            Effective Date: {effectiveDate}
            <br />
            Last Updated: {lastUpdated}
          </p>

          <h2 className="mb-2 mt-6">1. Introduction</h2>

          <p className="mb-4">
            Welcome to MuscleCode.io (the "Platform"), operated by Devostack OÜ
            ("we," "us," or "our"). We are developing a learning platform for
            software developers. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our
            website <a href="https://musclecode.io">musclecode.io</a> (the
            "Site") and participate in our private beta program (the "Service").
          </p>

          <p className="mb-4">
            We are committed to protecting your privacy. This policy complies
            with the General Data Protection Regulation (GDPR - Regulation (EU)
            2016/679) and relevant Romanian data protection laws.
          </p>

          <p className="mb-4">
            Please read this Privacy Policy carefully. By accessing or using the
            Site or Service, you agree to the collection and use of information
            in accordance with this policy. If you do not agree with the terms
            of this privacy policy, please do not access the Site or participate
            in the Service.
          </p>

          <h2 className="mb-2 mt-6">2. Data Controller</h2>

          <p className="mb-4">
            The data controller responsible for your personal data is:
            <br />
            Devostack OÜ
            <br />
            Registry country: Estonia
            <br />
            Registry code: 16260039
            <br />
            EU VAT number: EE102387294
            <br />
            Address: Sepapaja tn 6, 15551 Tallinn, Harju Maakond, Estonia
            <br />
            Contact:{" "}
            <a href="mailto:claudiu.bogdan@devostack.com">
              claudiu.bogdan@devostack.com
            </a>
          </p>

          <h2 className="mb-2 mt-6">3. Information We Collect</h2>

          <p className="mb-4">
            We may collect information about you in a variety of ways. The
            information we may collect includes:
          </p>

          <h3 className="mb-2 mt-4">Personal Data:</h3>

          <p className="mb-4">
            <strong>Contact Information:</strong> When you sign up for the beta
            program, we collect personally identifiable information, such as
            your name and email address, necessary to grant you access and
            communicate with you. We may also collect information about your
            role (e.g., junior developer, team lead) or company if you provide
            it.
          </p>

          <h3 className="mb-2 mt-4">Usage Data:</h3>

          <p className="mb-4">
            <strong>Interaction Data:</strong> We automatically collect
            information about how you interact with the Service. This includes
            features you use, time spent on different parts of the platform,
            courses generated or undertaken, progress in coding challenges, chat
            history with AI models and the AI trainer, content you create (like
            notes, flashcards, algorithm entries), avatar progress, and feedback
            you provide.
          </p>

          <p className="mb-4">
            <strong>Technical Data:</strong> We may collect information your
            browser sends whenever you visit our Site or use the Service, such
            as your computer's Internet Protocol (IP) address, browser type,
            browser version, the pages of our Site you visit, the time and date
            of your visit, the time spent on those pages, unique device
            identifiers, and other diagnostic data.
          </p>

          <p className="mb-4">
            <strong>Feedback Data:</strong> Any feedback, suggestions, or
            comments you provide voluntarily regarding the Service, whether
            through forms, surveys, emails, or interviews.
          </p>

          <p className="mb-4">
            <strong>Cookies and Tracking Technologies:</strong> We may use
            cookies and similar tracking technologies (like web beacons and
            pixels) to track activity on our Site and Service and hold certain
            information. You can instruct your browser to refuse all cookies or
            to indicate when a cookie is being sent. However, if you do not
            accept cookies, you may not be able to use some portions of our
            Service.
          </p>

          <h2 className="mb-2 mt-6">4. How We Use Your Information</h2>

          <p className="mb-4">
            We use the information we collect for various purposes, based on
            legitimate interests, contractual necessity, and potentially your
            consent:
          </p>

          <p className="mb-4">
            <strong>
              To Provide and Maintain the Service (Contractual Necessity &
              Legitimate Interest):
            </strong>
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>To grant you access to the private beta.</li>
            <li>To manage your account and provide customer support.</li>
            <li>
              To personalize your learning experience (e.g., tailoring courses,
              providing relevant hints via the AI trainer).
            </li>
          </ul>

          <p className="mb-4">
            <strong>To Improve the Service (Legitimate Interest):</strong>
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              Crucially: To understand how users interact with the platform,
              identify bugs, analyze feature usage, and gather insights to
              develop, improve, and optimize the Platform. This is the core
              purpose of collecting detailed Usage Data during the beta phase.
            </li>
            <li>
              To analyze feedback and incorporate it into future development.
            </li>
          </ul>

          <p className="mb-4">
            <strong>
              To Communicate With You (Legitimate Interest & Contractual
              Necessity):
            </strong>
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              To send you emails regarding your beta participation, service
              updates, requests for feedback, and important notices about the
              Service or changes to our terms or policies.
            </li>
          </ul>

          <p className="mb-4">
            <strong>
              For Security and Compliance (Legitimate Interest & Legal
              Obligation):
            </strong>
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              To monitor usage for security purposes and prevent fraudulent
              activity.
            </li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h2 className="mb-2 mt-6">5. Legal Basis for Processing (GDPR)</h2>

          <p className="mb-4">
            Our legal basis for collecting and using the personal information
            described above depends on the specific context:
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              <strong>Performance of a Contract:</strong> Processing is
              necessary to provide you with access to the beta Service you
              requested (even though it's free, the agreement to participate
              forms a contract).
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Processing Usage Data and
              Feedback Data is necessary for our legitimate interest in
              improving and developing our product, provided these interests are
              not overridden by your data protection rights. We believe the
              benefit of improving the platform through analyzing early adopter
              usage is a valid legitimate interest, especially given the free
              nature of the beta and its explicit goal.
            </li>
            <li>
              <strong>Consent:</strong> Where required by law, or for specific
              activities not covered above (e.g., optional marketing
              communications in the future), we will obtain your consent.
            </li>
            <li>
              <strong>Legal Obligation:</strong> Processing may be necessary to
              comply with applicable laws.
            </li>
          </ul>

          <h2 className="mb-2 mt-6">6. Data Sharing and Disclosure</h2>

          <p className="mb-4">
            We do not sell your personal data. We may share your information in
            the following situations:
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              <strong>With Service Providers:</strong> We may share your
              information with third-party vendors, consultants, and other
              service providers who perform services on our behalf (e.g.,
              hosting providers, analytics providers, AI model providers, email
              services). These providers are obligated to protect your data and
              use it only for the purposes for which it was disclosed.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your
              information if required by law, regulation, legal process, or
              governmental request, or to protect the rights, property, or
              safety of MuscleCode.io, our users, or others.
            </li>
            <li>
              <strong>Business Transfers:</strong> In connection with, or during
              negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business by another
              company. We will notify you before your Personal Data is
              transferred and becomes subject to a different Privacy Policy.
            </li>
            <li>
              <strong>Aggregated or Anonymized Data:</strong> We may share
              aggregated or anonymized information that does not directly
              identify you for research, analysis, or product improvement
              purposes.
            </li>
          </ul>

          <h2 className="mb-2 mt-6">7. Data Retention</h2>

          <p className="mb-4">
            We will retain your Personal Data only for as long as is necessary
            for the purposes set out in this Privacy Policy. This includes
            retaining data collected during the beta program to analyze and
            improve the product even after the beta concludes, unless you
            request its deletion. We will retain and use your Personal Data to
            the extent necessary to comply with our legal obligations (for
            example, if we are required to retain your data to comply with
            applicable laws), resolve disputes, and enforce our legal agreements
            and policies. Usage Data is generally retained for a shorter period,
            except when this data is used to strengthen the security or to
            improve the functionality of our Service, or we are legally
            obligated to retain this data for longer periods.
          </p>

          <h2 className="mb-2 mt-6">8. Your Data Protection Rights (GDPR)</h2>

          <p className="mb-4">
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights:
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              <strong>Right to Access:</strong> You have the right to request
              copies of your personal data.
            </li>
            <li>
              <strong>Right to Rectification:</strong> You have the right to
              request that we correct any information you believe is inaccurate
              or complete information you believe is incomplete.
            </li>
            <li>
              <strong>Right to Erasure ('Right to be Forgotten'):</strong> You
              have the right to request that we erase your personal data, under
              certain conditions.
            </li>
            <li>
              <strong>Right to Restrict Processing:</strong> You have the right
              to request that we restrict the processing of your personal data,
              under certain conditions.
            </li>
            <li>
              <strong>Right to Object to Processing:</strong> You have the right
              to object to our processing of your personal data based on
              legitimate interests, under certain conditions.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You have the right to
              request that we transfer the data that we have collected to
              another organization, or directly to you, under certain
              conditions.
            </li>
          </ul>

          <p className="mb-4">
            To exercise any of these rights, please contact us at{" "}
            <a href="mailto:claudiu.bogdan@devostack.com">
              claudiu.bogdan@devostack.com
            </a>
            . We will respond to your request within one month.
          </p>

          <p className="mb-4">
            You also have the right to lodge a complaint with a supervisory
            authority. You can complain to the data protection authority in your
            country of residence (for instance, the Romanian National
            Supervisory Authority for Personal Data Processing (ANSPDCP) -
            Website:{" "}
            <a href="http://www.dataprotection.ro/">
              http://www.dataprotection.ro/
            </a>
            ) or to our lead supervisory authority, the Estonian Data Protection
            Inspectorate (Andmekaitse Inspektsioon - AKI) - Website:{" "}
            <a href="https://www.aki.ee/en">https://www.aki.ee/en</a>.
          </p>

          <h2 className="mb-2 mt-6">9. Data Security</h2>

          <p className="mb-4">
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that no security measures are perfect or
            impenetrable, and no method of data transmission can be guaranteed
            against any interception or other type of misuse.
          </p>

          <h2 className="mb-2 mt-6">10. International Data Transfers</h2>

          <p className="mb-4">
            Your information, including Personal Data, may be transferred to —
            and maintained on — computers located outside of your state,
            province, country, or other governmental jurisdiction where the data
            protection laws may differ from those in Romania and the EEA. If we
            transfer your Personal Data outside the EEA, we will ensure
            appropriate safeguards are in place, such as Standard Contractual
            Clauses approved by the European Commission.
          </p>

          <h2 className="mb-2 mt-6">11. Children's Privacy</h2>

          <p className="mb-4">
            Our Service is not intended for use by children under the age of 16.
            We do not knowingly collect personally identifiable information from
            children under this age. If you become aware that a child has
            provided us with Personal Data, please contact us.
          </p>

          <h2 className="mb-2 mt-6">12. Changes to This Privacy Policy</h2>

          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date. We may also inform you via
            email or through a notice on the Service. You are advised to review
            this Privacy Policy periodically for any changes.
          </p>

          <h2 className="mb-2 mt-6">13. Contact Us</h2>

          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>

          <p className="mb-4">
            By email:{" "}
            <a href="mailto:legal@devostack.com">legal@devostack.com</a>
            <br />
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
