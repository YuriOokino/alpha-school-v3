"use client";

import MainHeading from "@/components/layout/headings/main-heading";

export default function PrivacyPolicyPage() {
  return (
    <>
      <MainHeading 
        tagline="Legal"
        taglineVariant="green"
        description="Your privacy is important to us. This policy describes how we collect, use, and protect your information."
      >
        Privacy Policy
      </MainHeading>

      <section className="alpha-section">
        <div className="prose prose-lg max-w-none">
          <div className="space-y-8">
            {/* Last Updated */}
            <div className="text-sm text-gray-600 border-b border-gray-200 pb-4">
              <p><strong>Last Updated:</strong> January 2025</p>
            </div>

            {/* Introduction */}
            <div>
              <h2 className="heading-style-h3 mb-4">Introduction</h2>
              <p>
                Alpha School ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="heading-style-h3 mb-4">Information We Collect</h2>
              
              <h3 className="heading-style-h4 mb-3">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Student information (name, date of birth, grade level)</li>
                <li>Parent/guardian information</li>
                <li>Educational background and preferences</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="heading-style-h4 mb-3 mt-6">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="heading-style-h3 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processing applications and enrollment requests</li>
                <li>Communicating with you about our services</li>
                <li>Providing educational information and resources</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
                <li>Sending newsletters and updates (with your consent)</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="heading-style-h3 mb-4">Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist us in operating our website and services</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="heading-style-h3 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="heading-style-h3 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="heading-style-h3 mb-4">Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="heading-style-h3 mb-4">Children's Privacy</h2>
              <p>
                We are committed to protecting the privacy of children. We collect personal information from children only with parental consent and in compliance with applicable laws, including the Children's Online Privacy Protection Act (COPPA).
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="heading-style-h3 mb-4">Your Rights and Choices</h2>
              <p>You have certain rights regarding your personal information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access and review your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
              </ul>
            </div>

            {/* Updates to Policy */}
            <div>
              <h2 className="heading-style-h3 mb-4">Updates to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="heading-style-h3 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> <a href="mailto:admissions@alpha.school" className="text-blue-600 hover:underline">admissions@alpha.school</a></p>
                <p><strong>Address:</strong> [Your Business Address]</p>
                <p><strong>Phone:</strong> [Your Phone Number]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 