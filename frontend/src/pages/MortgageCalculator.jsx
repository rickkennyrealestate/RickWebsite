import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-primary-foreground/80">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}

function MortgageCalculator() {
  const [price, setPrice] = useState(350000)
  const [downPct, setDownPct] = useState(20)
  const [rate, setRate] = useState(6.5)
  const [term, setTerm] = useState(30)
  const [taxRate, setTaxRate] = useState(1.8)
  const [insurance, setInsurance] = useState(2200)

  const result = useMemo(() => {
    const p = Number(price) || 0
    const down = (p * (Number(downPct) || 0)) / 100
    const loan = Math.max(p - down, 0)
    const monthlyRate = (Number(rate) || 0) / 100 / 12
    const n = (Number(term) || 0) * 12
    let pi = 0
    if (n > 0) {
      pi =
        monthlyRate > 0
          ? (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n))
          : loan / n
    }
    const tax = (p * (Number(taxRate) || 0)) / 100 / 12
    const ins = (Number(insurance) || 0) / 12
    return { down, loan, pi, tax, ins, total: pi + tax + ins }
  }, [price, downPct, rate, term, taxRate, insurance])

  const fields = [
    { label: 'Home price ($)', value: price, setter: setPrice, step: 5000 },
    { label: 'Down payment (%)', value: downPct, setter: setDownPct, step: 1 },
    { label: 'Interest rate (%)', value: rate, setter: setRate, step: 0.1 },
    { label: 'Loan term (years)', value: term, setter: setTerm, step: 1 },
    { label: 'Property tax rate (% / yr)', value: taxRate, setter: setTaxRate, step: 0.1 },
    { label: 'Home insurance ($ / yr)', value: insurance, setter: setInsurance, step: 100 },
  ]

  return (
    <div>
      <Seo
        title="Mortgage Calculator | Bryan-College Station Homes"
        description="Estimate your monthly mortgage payment for a Bryan-College Station home, including principal, interest, Texas property taxes, and insurance."
      />
      <PageHeader
        eyebrow="Buyer Tools"
        title="Mortgage Calculator"
        subtitle="Estimate your monthly payment for a Brazos Valley home, including Texas property taxes and insurance."
      />

      <section className="bg-background py-16">
        <div className="container grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-lg font-bold text-foreground">Your numbers</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.label} className="space-y-2">
                  <Label>{f.label}</Label>
                  <Input
                    type="number"
                    min="0"
                    step={f.step}
                    value={f.value}
                    onChange={(e) => f.setter(e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="flex flex-col rounded-2xl bg-primary p-8 text-primary-foreground shadow-lg">
            <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">
              Estimated monthly payment
            </p>
            <p className="mt-2 text-5xl font-bold">{usd.format(result.total)}</p>

            <div className="mt-8 space-y-3 border-t border-primary-foreground/20 pt-6 text-sm">
              <Row label="Principal & interest" value={usd.format(result.pi)} />
              <Row label="Property tax" value={usd.format(result.tax)} />
              <Row label="Home insurance" value={usd.format(result.ins)} />
            </div>
            <div className="mt-6 space-y-3 border-t border-primary-foreground/20 pt-6 text-sm">
              <Row label="Down payment" value={usd.format(result.down)} />
              <Row label="Loan amount" value={usd.format(result.loan)} />
            </div>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="w-full bg-background text-foreground hover:bg-background/90"
              >
                <Link to="/contact">
                  Get Pre-Approval Help
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="container">
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
            This calculator provides estimates for planning purposes only and is not a loan offer or a
            guarantee of terms. Actual rates, taxes, insurance, HOA dues, and payments will vary.
            Consult a licensed lender for an accurate quote. Rick Kenny, REALTOR&reg; (License
            #841696-SA), Aggieland Realtors. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </div>
  )
}

export default MortgageCalculator
