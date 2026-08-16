import { FaFilePdf } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'

const sections = [
  {
    title: 'Types of Real Estate License Holders',
    body: [
      {
        ul: [
          'A BROKER is responsible for all brokerage activities, including acts performed by sales agents sponsored by the broker.',
          'A SALES AGENT must be sponsored by a broker and works with clients on behalf of the broker.',
        ],
      },
    ],
  },
  {
    title: "A Broker's Minimum Duties Required by Law",
    body: [
      { p: 'A client is the person or party that the broker represents:' },
      {
        ul: [
          `Put the interests of the client above all others, including the broker's own interests;`,
          'Inform the client of any material information about the property or transaction received by the broker;',
          `Answer the client's questions and present any offer to or counter-offer from the client; and`,
          'Treat all parties to a real estate transaction honestly and fairly.',
        ],
      },
    ],
  },
  {
    title: 'Written Agreements Are Required in Certain Situations',
    body: [
      {
        p: `A license holder who performs brokerage activity for a prospective buyer of residential property must enter into a written agreement with the buyer before showing any residential property to the buyer or, if no residential property will be shown, before presenting an offer on behalf of the buyer. This written agreement must contain specific information required by Texas law. For more information on these requirements, see section 1101.563 of the Texas Occupations Code.`,
      },
      {
        p: `Even if a written agreement is not required, to avoid disputes, all agreements between you and a broker should be in writing and clearly establish: (i) the broker's duties and responsibilities to you and your obligations under the agreement; and (ii) the amount or rate of compensation the broker will receive and how this amount is determined.`,
      },
    ],
  },
  {
    title: 'A License Holder Can Represent a Party in a Real Estate Transaction',
    body: [
      {
        label: 'As Agent for Owner (Seller/Landlord):',
        p: `The broker becomes the property owner's agent through an agreement with the owner, usually in a written listing to sell or property management agreement. An owner's agent must perform the broker's minimum duties above and must inform the owner of any material information about the property or transaction known by the agent, including information disclosed to the agent by the buyer or buyer's agent. An owner's agent fees are not set by law and are fully negotiable.`,
      },
      {
        label: 'As Agent for Buyer/Tenant:',
        p: `The broker becomes the buyer/tenant's agent by agreeing to represent the buyer, usually through a written representation agreement. A buyer's agent must perform the broker's minimum duties above and must inform the buyer of any material information about the property or transaction known by the agent, including information disclosed to the agent by the seller or seller's agent. A buyer/tenant's agent fees are not set by law and are fully negotiable.`,
      },
      {
        label: 'As Agent for Both — Intermediary:',
        p: `To act as an intermediary between the parties the broker must first obtain the written agreement of each party to the transaction. The written agreement must state who will pay the broker and, in conspicuous bold or underlined print, set forth the broker's obligations as an intermediary. A broker who acts as an intermediary:`,
      },
      {
        ul: [
          'Must treat all parties to the transaction impartially and fairly;',
          `May, with the parties' written consent, appoint a different license holder associated with the broker to each party (owner and buyer) to communicate with, provide opinions and advice to, and carry out the instructions of each party to the transaction;`,
          'Must not, unless specifically authorized in writing to do so by the party, disclose that the owner will accept a price less than the written asking price; that the buyer/tenant will pay a price greater than the price submitted in a written offer; or any confidential information or any other information that a party specifically instructs the broker in writing not to disclose, unless required to do so by law.',
        ],
      },
    ],
  },
  {
    title: 'A License Holder Can Show Property to a Buyer/Tenant Without Representing the Buyer/Tenant If',
    body: [
      {
        ul: [
          'The broker has not agreed with the buyer/tenant, either orally or in writing, to represent the buyer/tenant;',
          'The broker is not otherwise acting as the buyer/tenant’s agent at the time of showing the property;',
          'The broker does not provide the buyer/tenant opinions or advice regarding the property or real estate transactions generally; and',
          'The broker does not perform any other act of real estate brokerage for the buyer/tenant.',
        ],
      },
      {
        p: `Before showing a residential property to an unrepresented prospective buyer, a license holder must enter into a written agreement that contains the information required by section 1101.563 of the Texas Occupations Code. The agreement may not be exclusive and must be limited to no more than 14 days.`,
      },
    ],
  },
]

const licenseHolders = [
  { role: 'Sponsoring Broker (Licensed Business Entity)', name: 'Aggieland Realtors', license: '9006606-BB', email: 'carla@aggielandrealtors.com', phone: '(979) 846-8326' },
  { role: 'Designated Broker of Licensed Business Entity', name: 'Kari King', license: '573857-B', email: 'info@eliteagents.us', phone: '(512) 686-6646' },
  { role: 'Licensed Supervisor of Sales Agent/Associate', name: 'Carla Henderson', license: '456698-SA', email: 'carla@aggielandrealtors.com', phone: '(979) 255-0298' },
  { role: 'Sales Agent/Associate', name: 'Patrick Kenny', license: '841696-SA', email: 'rickkennyrealestate@gmail.com', phone: '(281) 608-1151' },
]

function BrokerageServices() {
  return (
    <div>
      <Seo
        title="Information About Brokerage Services | Rick Kenny"
        description="Texas Real Estate Commission Information About Brokerage Services (IABS) disclosure for Rick Kenny with Aggieland Realtors, serving College Station and Bryan, TX."
      />

      <PageHeader
        eyebrow="Texas Real Estate Commission"
        title="Information About Brokerage Services"
        subtitle="Texas law requires all real estate license holders to give the following information about brokerage services to prospective buyers, tenants, sellers, and landlords."
      />

      <section className="bg-background py-16">
        <div className="container max-w-3xl">
          <div className="space-y-10">
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
              <h2 className="text-xl font-bold tracking-tight text-foreground">License Holder Contact Information</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                This notice is being provided for information purposes. It does not create an obligation for you to
                use the broker&rsquo;s services. Please acknowledge receipt of this notice and retain a copy for your records.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {licenseHolders.map((holder) => (
                  <div key={holder.license} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{holder.role}</p>
                    <p className="mt-2 text-lg font-bold text-foreground">{holder.name}</p>
                    <dl className="mt-3 space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between gap-4">
                        <dt>License No.</dt>
                        <dd className="font-medium text-foreground">{holder.license}</dd>
                      </div>
                      <div className="flex flex-wrap justify-between gap-x-4">
                        <dt>Email</dt>
                        <dd>
                          <a href={`mailto:${holder.email}`} className="text-primary hover:underline">
                            {holder.email}
                          </a>
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt>Phone</dt>
                        <dd>
                          <a href={`tel:${holder.phone.replace(/[^0-9]/g, '')}`} className="text-primary hover:underline">
                            {holder.phone}
                          </a>
                        </dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-secondary p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Prefer the official signable form? Download the TREC Information About Brokerage Services (IABS 1-2).
                </p>
                <a
                  href="/iabs.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-primary/90"
                >
                  <FaFilePdf className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              Regulated by the Texas Real Estate Commission. Information available at{' '}
              <a href="https://www.trec.texas.gov" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.trec.texas.gov
              </a>
              . Aggieland Realtors is an Equal Housing Opportunity brokerage. TREC form IABS 1-2 (revised 11-03-2025).
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BrokerageServices
