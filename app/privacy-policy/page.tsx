import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Privacy Policy - MuscleCode.io",
  description: "Privacy policy for MuscleCode.io",
};

export default function PrivacyPolicyPage() {
  // Updated dates
  const effectiveDate = "March 26, 2025";
  const lastUpdated = "March 27, 2025";

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

          {/* === UPDATED SECTION 4 START === */}
          <h2 className="mb-2 mt-6">4. How We Use Your Information</h2>

          <p className="mb-4">
            We use the information we collect for various purposes, based on
            legitimate interests, contractual necessity, and your consent:
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
              To Communicate With You (Legitimate Interest, Contractual
              Necessity, & Consent):
            </strong>
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              To send you essential emails regarding your beta participation,
              critical service updates, security alerts, requests for direct
              feedback on the beta service, and important notices about the
              Service or changes to our terms or policies (based on Contractual
              Necessity or Legitimate Interest).
            </li>
            <li>
              To send you emails about product news, feature releases, tips for
              using the platform, and relevant educational content (based on
              Legitimate Interest, where applicable and offering an opt-out, or
              Consent).
            </li>
            <li>
              To invite you to participate in surveys regarding your experience,
              future features, or market research (based on Legitimate Interest,
              offering an opt-out, or Consent).
            </li>
            <li>
              To send you marketing communications, such as special offers,
              promotions, information about paid plans (when available), or
              other commercial messages related to MuscleCode.io. **We will only
              send these types of communications with your explicit prior
              consent.** You may opt-out at any time.
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
          {/* === UPDATED SECTION 4 END === */}

          {/* === UPDATED SECTION 5 START === */}
          <h2 className="mb-2 mt-6">5. Legal Basis for Processing (GDPR)</h2>

          <p className="mb-4">
            Our legal basis for collecting and using the personal information
            described above depends on the specific context:
          </p>

          <ul className="mb-4 pl-4 list-disc">
            <li>
              <strong>Performance of a Contract:</strong> Processing is
              necessary to provide you with access to the beta Service you
              requested (the agreement to participate forms a contract). This
              includes essential service communications.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Processing Usage Data and
              Feedback Data is necessary for our legitimate interest in
              improving and developing our product. We may also rely on
              legitimate interests to send you non-promotional communications
              about product updates, feature news, relevant surveys, or requests
              for feedback, provided these interests are not overridden by your
              data protection rights and we offer an easy way to opt-out. We
              carefully balance our interests against your rights in these
              cases.
            </li>
            <li>
              <strong>Consent:</strong> We will obtain your explicit consent
              before sending you direct marketing communications, such as emails
              containing special offers, promotions, or other commercial
              messages. Where we rely on consent for any processing (including
              potentially some surveys or informational emails if not covered by
              legitimate interest), you have the right to withdraw this consent
              at any time.
            </li>
            <li>
              <strong>Legal Obligation:</strong> Processing may be necessary to
              comply with applicable laws (e.g., maintaining suppression lists
              for opt-outs, responding to legal requests).
            </li>
          </ul>
          {/* === UPDATED SECTION 5 END === */}

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

          {/* === UPDATED SECTION 8 START === */}
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
              legitimate interests (including for direct marketing purposes
              where legitimate interest is claimed), under certain conditions.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You have the right to
              request that we transfer the data that we have collected to
              another organization, or directly to you, under certain
              conditions.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> Where our processing
              is based on your consent (e.g., for sending marketing emails with
              offers), you have the right to withdraw that consent at any time.
              This withdrawal will not affect the lawfulness of processing based
              on consent before its withdrawal. You can typically withdraw
              consent via an 'unsubscribe' link in the relevant email
              communication or by contacting us.
            </li>
          </ul>

          <p className="mb-4">
            To exercise any of these rights, or to opt-out of specific
            communications, please contact us at{" "}
            <a href="mailto:legal@devostack.com">legal@devostack.com</a>. We
            will respond to your request within one month.
          </p>

          <p className="mb-4">
            You also have the right to lodge a complaint with a supervisory
            authority. You can complain to the data protection authority in your
            country of residence (for instance, the Romanian National
            Supervisory Authority for Personal Data Processing (ANSPDCP) -
            Website:{" "}
            <a
              href="http://www.dataprotection.ro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.dataprotection.ro/
            </a>
            ) or to our lead supervisory authority, the Estonian Data Protection
            Inspectorate (Andmekaitse Inspektsioon - AKI) - Website:{" "}
            <a
              href="https://www.aki.ee/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.aki.ee/en
            </a>
            .
          </p>
          {/* === UPDATED SECTION 8 END === */}

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
            Clauses approved by the European Commission, or transfer to
            countries deemed adequate by the European Commission.
          </p>

          <h2 className="mb-2 mt-6">11. Children's Privacy</h2>

          <p className="mb-4">
            Our Service is not intended for use by children under the age of 16.
            We do not knowingly collect personally identifiable information from
            children under this age. If you become aware that a child has
            provided us with Personal Data, please contact us. If we become
            aware that we have collected Personal Data from children without
            verification of parental consent, we take steps to remove that
            information from our servers.
          </p>

          <h2 className="mb-2 mt-6">12. Changes to This Privacy Policy</h2>

          <p className="mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date. We may also inform you via
            email or through a notice on the Service prior to the change
            becoming effective. You are advised to review this Privacy Policy
            periodically for any changes. Changes to this Privacy Policy are
            effective when they are posted on this page.
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
            Or via the contact details listed in Section 2.
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