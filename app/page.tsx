import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Music,
  Play,
  Users,
  Heart,
  ChevronRight,
  Headphones,
  Radio,
  Mic2,
  AudioWaveformIcon as Waveform,
} from "lucide-react"
import Appbar from "./Components/Appbar"

export default function LandingPage() {
  return (
    <div className="flex min-h-[100dvh] w-[100vw] justify-center items-center flex-col">
      <Appbar/>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 xl:py-52 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 z-10"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/30 via-purple-500/20 to-transparent rounded-full blur-3xl transform -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-primary/30 via-pink-500/20 to-transparent rounded-full blur-3xl transform translate-y-1/3"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-20">
            <div className="grid gap-12 lg:grid-cols-[1fr_450px] lg:gap-16 xl:grid-cols-[1fr_550px] items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                    <Waveform className="h-4 w-4" />
                    <span>Revolutionizing Music for Streamers</span>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl/none">
                    Let Your Fans Choose the Music for Your Stream
                  </h1>
                  <p className="max-w-[600px] text-xl text-muted-foreground md:text-2xl">
                    FanTunes connects creators with their audience through music. Give your fans the power to influence
                    your stream's soundtrack in real-time.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2 px-8 h-12 text-base">
                    Get Started <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 px-8 h-12 text-base">
                    <Play className="h-4 w-4" /> Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden"
                      >
                        <Image
                          src={`/placeholder.svg?height=40&width=40&text=${i}`}
                          width={40}
                          height={40}
                          alt="User"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold">2,500+</span> creators already using FanTunes
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[400px] sm:h-[450px] sm:w-[450px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-3xl"></div>
                  <div className="relative h-full w-full rounded-2xl border bg-background/80 backdrop-blur-sm p-6 shadow-xl">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Headphones className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-lg">Live Stream</span>
                        </div>
                        <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
                          <Radio className="h-4 w-4 animate-pulse" />
                          <span className="text-xs font-medium">LIVE</span>
                        </div>
                      </div>
                      <div className="flex-1 rounded-xl bg-muted/50 p-5 mb-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="h-12 w-12 rounded-full bg-secondary"></div>
                          <div>
                            <p className="font-medium text-lg">DJ StreamMaster</p>
                            <p className="text-sm text-muted-foreground">Electronic Music Session</p>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <p className="text-sm font-medium">Now Playing:</p>
                          <div className="flex items-center gap-4 bg-background/80 p-3 rounded-lg">
                            <Image
                              src="/placeholder.svg?height=70&width=70"
                              width={70}
                              height={70}
                              alt="Album cover"
                              className="rounded-md"
                            />
                            <div>
                              <p className="font-medium text-lg">Midnight Groove</p>
                              <p className="text-sm text-muted-foreground">Electronic Vibes</p>
                              <div className="mt-2 h-1.5 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-primary rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Fan Requests:</p>
                          <p className="text-xs text-muted-foreground">Vote for next song</p>
                        </div>
                        <div className="space-y-3">
                          {[1, 2, 3].map((i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <Image
                                  src={`/placeholder.svg?height=50&width=50&text=${i}`}
                                  width={50}
                                  height={50}
                                  alt="Album cover"
                                  className="rounded-md"
                                />
                                <div>
                                  <p className="text-sm font-medium">Song Title {i}</p>
                                  <p className="text-xs text-muted-foreground">Artist {i}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5 text-xs bg-background px-2 py-1 rounded-full">
                                <Heart className="h-3.5 w-3.5 text-rose-500" />
                                <span>{42 + i * 11}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-24 md:py-32 lg:py-40 bg-background relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-4 max-w-[800px]">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need for Interactive Streaming
                </h2>
                <p className="text-xl text-muted-foreground mx-auto max-w-[700px]">
                  FanTunes provides all the tools creators need to engage with their audience through music.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-8 py-8 lg:grid-cols-3 lg:gap-16">
              {[
                {
                  icon: <Users className="h-12 w-12 text-primary" />,
                  title: "Fan Voting",
                  description:
                    "Let your audience vote on songs to play next, creating an interactive experience that keeps them engaged.",
                },
                {
                  icon: <Music className="h-12 w-12 text-primary" />,
                  title: "Vast Music Library",
                  description:
                    "Access millions of tracks from all genres, ensuring you'll always have the perfect soundtrack for your stream.",
                },
                {
                  icon: <Mic2 className="h-12 w-12 text-primary" />,
                  title: "Seamless Integration",
                  description:
                    "Works with all major streaming platforms. Just one click to connect and start engaging your audience.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-6 rounded-2xl border p-8 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="rounded-full border-2 border-primary/20 bg-primary/10 p-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-center text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-24 md:py-32 lg:py-40 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-4 max-w-[800px]">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Simple Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How FanTunes Works</h2>
                <p className="text-xl text-muted-foreground mx-auto max-w-[700px]">
                  Get started in minutes and transform your streaming experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-12 py-8 lg:grid-cols-3 lg:gap-24">
              {[
                {
                  step: "01",
                  title: "Connect Your Account",
                  description: "Link FanTunes to your streaming platform with our simple integration.",
                },
                {
                  step: "02",
                  title: "Share With Your Fans",
                  description: "Give your audience access to your unique FanTunes voting page.",
                },
                {
                  step: "03",
                  title: "Stream With Fan-Selected Music",
                  description: "Watch as your audience engages by choosing the perfect soundtrack for your content.",
                },
              ].map((step, i) => (
                <div key={i} className="relative flex flex-col items-center space-y-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground text-center text-lg">{step.description}</p>
                  {i < 2 && (
                    <div className="hidden lg:block absolute top-10 left-[calc(100%_-_16px)] w-[calc(100%_-_32px)] h-[2px] bg-border">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-primary"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator Showcase */}
        <section id="creators" className="w-full py-24 md:py-32 lg:py-40 bg-background relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-4 max-w-[800px]">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Success Stories
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Creators Love FanTunes</h2>
                <p className="text-xl text-muted-foreground mx-auto max-w-[700px]">
                  See how creators are transforming their streams with fan-selected music.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 py-8 lg:grid-cols-3 lg:gap-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-start space-y-6 rounded-2xl border p-8 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/placeholder.svg?height=80&width=80&text=C${i}`}
                      width={80}
                      height={80}
                      alt="Creator profile"
                      className="rounded-full border-2 border-background shadow-md"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Creator Name {i}</h3>
                      <p className="text-sm text-muted-foreground">{10 + i * 5}K Followers</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg italic">
                    "FanTunes has completely changed how I interact with my audience. My engagement is up by{" "}
                    {30 + i * 10}% since I started letting fans choose the music!"
                  </p>
                  <div className="flex items-center gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, j) => (
                        <svg
                          key={j}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                          className="text-yellow-500"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background/90"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent rounded-full blur-3xl transform -translate-y-1/2 opacity-50"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-3xl mx-auto">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Ready to Transform Your Streams?
                </h2>
                <p className="text-xl text-muted-foreground mx-auto max-w-[700px]">
                  Join thousands of creators who are engaging their audience through the power of music.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="gap-2 px-8 h-12 text-base">
                  Sign Up Free <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 h-12 text-base">
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                No credit card required. Free plan available for streams with up to 100 concurrent viewers.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-6">
          <div className="space-y-4">
            <div className="flex gap-3 items-center text-xl font-bold">
              <div className="bg-primary/10 p-2 rounded-full">
                <Music className="h-6 w-6 text-primary" />
              </div>
              <span>FanTunes</span>
            </div>
            <p className="text-sm text-muted-foreground">Connecting creators and fans through the power of music.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-medium text-base">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 border-t mt-12 pt-8 px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} FanTunes. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


