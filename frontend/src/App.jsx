import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { FaReact, FaCheck, FaRocket } from 'react-icons/fa'
import { SiVite, SiTailwindcss, SiShadcnui } from 'react-icons/si'
import { HiOutlineCommandLine, HiSparkles } from 'react-icons/hi2'

function App() {
  const frontendStack = [
    { name: 'React', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Vite', icon: SiVite, color: 'text-amber-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
    { name: 'shadcn/ui', icon: SiShadcnui, color: 'text-zinc-100' },
    { name: 'React Icons', icon: HiSparkles, color: 'text-amber-300' },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="/assets/images/codedeck.png"
              alt="CodeDeck Logo"
              className="h-16 sm:h-20 w-auto drop-shadow-[0_0_30px_rgba(86,50,157,0.35)]"
            />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-zinc-50 mb-2 tracking-tight">
            CodeDeck Frontend Template
          </h1>
          <p className="text-base sm:text-lg text-zinc-400">Your foundation for building amazing applications</p>
        </div>

        <Card className="bg-zinc-900/80 border-zinc-800/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-zinc-50">
              <div className="p-2 rounded-xl bg-violet-500/10 ring-1 ring-violet-500/20">
                <HiOutlineCommandLine className="w-5 h-5 text-violet-400" />
              </div>
              Frontend Stack
            </CardTitle>
            <CardDescription className="text-zinc-500">
              Modern React development setup
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {frontendStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/40 border border-zinc-700/30 transition-colors hover:bg-zinc-800/60"
                >
                  <div className="flex items-center gap-3">
                    <tech.icon className={`w-5 h-5 ${tech.color}`} />
                    <span className="text-zinc-200 font-medium">{tech.name}</span>
                  </div>
                  <FaCheck className="w-4 h-4 text-violet-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4 sm:mt-6 bg-zinc-900/80 border-zinc-800/50 backdrop-blur-xl">
          <CardContent className="pt-6">
            <div className="text-center py-4 sm:py-6">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-zinc-800/60 ring-1 ring-zinc-700/50 mb-4">
                <img
                  src="/assets/images/vercel.svg"
                  alt="Vercel"
                  className="w-10 h-10 sm:w-12 sm:h-12 invert"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-50 mb-3">1-Click Deploy to Vercel</h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mb-4">
                This template is pre-configured for Vercel deployment. When you're ready, deploy your application with a single click.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4 sm:mt-6 bg-zinc-900/80 border-zinc-800/50 backdrop-blur-xl">
          <CardContent className="pt-6">
            <div className="text-center py-4 sm:py-6">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-violet-500/10 ring-1 ring-violet-500/20 mb-4">
                <FaRocket className="w-6 h-6 sm:w-8 sm:h-8 text-violet-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-zinc-50 mb-3">Next Step</h3>
              <p className="text-zinc-300 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                Ask Claude to remove this page and start building something amazing.
                Your frontend foundation is ready — now it's time to bring your ideas to life.
              </p>
              <p className="text-zinc-500 mt-4 sm:mt-6 text-xs sm:text-sm">
                Happy vibe coding and Happy Shipping!
              </p>
              <p className="text-zinc-600 mt-3 sm:mt-4 text-xs sm:text-sm">
                Bruno Bertapeli,
                <br />
                <span className="text-violet-400 font-medium">CodeDeck</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
