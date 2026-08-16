import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'

const sections = [
  {
    title: 'Information We Collect',
    body: [
      {
        label: 'Information you provide:',
        p: `When you submit our contact form, request a free home valuation, or download our buyers guide, we collect the information you enter — typically your name, email address, phone number, and any property details or message you include.`,
      },
      {
        label: 'Information collected automatically:',
        p: `Like most websites, we and our hosting and security providers may automatically collect limited technical data such as your IP address, browser type, device information, and the pages you view, in order to keep the site secure and running well.`,
      },
      {
        label: 'Cookies:',
        p: `This site uses essential cookies needed for it to function and may use analytics cookies to understand general site usage. You can control or delete cookies through your browser settings.`,
      },
    ],
  },
  {
    title: 'How We Use Your Information',
    body: [
      { p: 'We use the information you provide to:' },
      {
        ul: [
          'Respond to your questions and follow up about buying, selling, or valuing a home;',
          'Deliver what you request, such as a home valuation or the buyers guide;',
          'Communicate with you about our real estate services;',
          'Operate, secure, and improve this website; and',
          'Comply with our legal, regulatory, and professional obligations as a Texas real estate license holder.',
        ],
      },
    ],
  },
  {
    title: 'Text Messages and Calls',
    body: [
      {
        p: `If you provide your phone number, you consent to receive calls and text messages from Rick Kenny about your inquiry and our real estate services. Consent to receive texts is not a condition of any purchase. Message and data rates may apply, and message frequency varies. You can opt out of text messages at any time by replying STOP, or reply HELP for help. Opting out of texts will not affect the other ways we communicate with you.`,
      },
    ],
  },
  {
    title: 'How We Share Your Information',
    body: [
      { p: 'We do not sell your personal information. We share it only as needed to serve you and operate our business, including with:' },
      {
        ul: [
          'Service providers that help us run this site and process form submissions (for example, our form-delivery provider and our website host);',
          'Our sponsoring broker, Aggieland Realtors, and the agents or staff assisting with your request;',
          'Professionals involved in a real estate transaction you choose to pursue, such as lenders, title companies, or inspectors, when relevant to your request; and',
          'Authorities or others when required by law or regulation, or to protect our legal rights.',
        ],
      },
    ],
  },
  {
    title: 'Third-Party Services and Links',
    body: [
      {
        p: `This site relies on third-party services and may link to third-party websites, each governed by its own privacy policy. These include our form-delivery provider (Web3Forms), our website host and security provider (Cloudflare), the embedded MLS home-search tool provided through our multiple listing service, and links to sites such as Zillow and our social media profiles. We are not responsible for the privacy practices of these third parties.`,
      },
    ],
  },
  {
    title: 'Data Retention and Security',
    body: [
      {
        p: `We keep your information only as long as needed for the purposes described in this policy, or as required by law and real estate recordkeeping rules, and then dispose of it appropriately. We use reasonable safeguards to protect your information, but no method of transmission or storage is completely secure, and we cannot guarantee absolute security.`,
      },
    ],
  },
  {
    title: 'Your Choices and Rights',
    body: [
      {
        p: `You may opt out of our marketing communications at any time — reply STOP to texts, use the unsubscribe option in emails, or contact us directly. You may also ask us to access, correct, or delete the personal information you have provided. To make a request, contact us using the details below, and we will respond as required by applicable law, including Texas privacy law where it applies.`,
      },
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      {
        p: `This website is intended for adults and is not directed to children. We do not knowingly collect personal information from anyone under 18. If you believe a child has provided us information, please contact us and we will delete it.`,
      },
    ],
  },
  {
    title: 'Equal Housing Opportunity',
    body: [
      {
        p: `Rick Kenny and Aggieland Realtors are committed to equal housing opportunity. We do not discriminate on the basis of race, color, religion, sex, disability, familial status, national origin, or any other class protected by federal, state, or local law.`,
      },
    ],
  },
  {
    title: 'Changes to This Policy',
    body: [
      {
        p: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Your continued use of the site after changes take effect means you accept the updated policy.`,
      },
    ],
  },
]

function PrivacyPolicy() {
  return (
    <div>
      <Seo
        title="Privacy Policy | Rick Kenny"
        description="How Rick Kenny with Aggieland Realtors collects, uses, and protects your information on rickkenny.com, including form data, text-message consent, and your privacy choices."
      />

      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How Rick Kenny and Aggieland Realtors collect, use, and protect your information on rickkenny.com."
      />

      <section className="bg-background py-16">
        <div className="container max-w-3xl">
          <p className="text-sm text-muted-foreground">Last updated: August 16, 2026</p>

          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            This Privacy Policy explains how Rick Kenny, a licensed Texas REALTOR&reg; with Aggieland
            Realtors (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), collects, uses, and
            protects your information when you visit rickkenny.com or contact us through this website.
            By using this site or submitting a form, you agree to the practices described below.
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold tracking-tight text-foreground">{section.title}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((block, i) => {
                    if (block.ul) {
                      return (
                        <ul key={i} className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground">
                          {block.ul.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )
                    }
                    return (
                      <p key={i} className="text-base leading-relaxed text-muted-foreground">
                        {block.label && <span className="font-semibold text-foreground">{block.label} </span>}
                        {block.p}
                      </p>
                    )
                  })}
                </div>
              </div>
            ))}

            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">Contact Us</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                If you have questions about this Privacy Policy or your information, contact:
              </p>
              <div className="mt-5 rounded-xl border border-border bg-card p-6">
                <p className="text-lg font-bold text-foreground">Rick Kenny</p>
                <p className="text-sm uppercase tracking-widest text-muted-foreground">Aggieland Realtors</p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li>
                    <a href="tel:2816081151" className="flex items-center gap-3 transition-colors duration-200 hover:text-primary">
                      <FaPhoneAlt className="h-4 w-4 shrink-0 text-primary" />
                      281-608-1151
                    </a>
                  </li>
                  <li>
                    <a href="mailto:rickkennyrealestate@gmail.com" className="flex items-center gap-3 transition-colors duration-200 hover:text-primary">
                      <FaEnvelope className="h-4 w-4 shrink-0 text-primary" />
                      rickkennyrealestate@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaMapMarkerAlt className="h-4 w-4 shrink-0 text-primary" />
                    Bryan-College Station, TX
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              This Privacy Policy is provided for general informational purposes and describes our
              current practices. For the Texas Real Estate Commission&rsquo;s required brokerage
              disclosure, see our{' '}
              <a href="/brokerage-services" className="text-primary hover:underline">
                Information About Brokerage Services
              </a>{' '}
              page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
