"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  ThumbsUp,
  ThumbsDown,
  Play,
  Share2,
  Copy,
  Check,
  Crown,
} from "lucide-react"
import { YouTubeEmbed } from "@next/third-parties/google"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
// import { toast } from "@/components/ui/toast" // Update the path to the correct location of the toast module
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type VideoItem = {
  id: string
  title: string
  votes: number
  thumbnail: string
  url: string
}

export default function Dashboard() {
  const [creatorMode, setCreatorMode] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<VideoItem | null>({
    id: "dQw4w9WgXcQ",
    title: "Rick Astley - Never Gonna Give You Up",
    votes: 0,
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  })

  const [videoQueue, setVideoQueue] = useState<VideoItem[]>([
    {
      id: "9bZkp7q19f0",
      title: "PSY - GANGNAM STYLE",
      votes: 15,
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Luis Fonsi - Despacito ft. Daddy Yankee",
      votes: 8,
      thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
    },
    {
      id: "JGwWNGJdvx8",
      title: "Ed Sheeran - Shape of You",
      votes: 12,
      thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/hqdefault.jpg",
      url: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
    },
  ])

  const [videoUrl, setVideoUrl] = useState("")
  const [previewId, setPreviewId] = useState("")
  const [isCopied, setIsCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState("")

  useEffect(() => {
    const baseUrl = window.location.origin + window.location.pathname
    const queueParam = encodeURIComponent(
      JSON.stringify(videoQueue.map((v) => v.id))
    )
    const currentParam = currentVideo ? encodeURIComponent(currentVideo.id) : ""

    setShareUrl(
      `${baseUrl}?queue=${queueParam}&current=${currentParam}${
        creatorMode ? "&creator=true" : ""
      }`
    )
  }, [videoQueue, currentVideo, creatorMode])

  const extractVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value)
    const videoId = extractVideoId(e.target.value)
    setPreviewId(videoId ?? "")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const videoId = extractVideoId(videoUrl)
    if (videoId) {
      const newVideo: VideoItem = {
        id: videoId,
        title: `YouTube Video (${videoId})`,
        votes: 0,
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        url: videoUrl,
      }
      setVideoQueue([...videoQueue, newVideo])
      setVideoUrl("")
      setPreviewId("")

    //   toast({
    //     title: "Video added to queue",
    //     description: "Your video has been added to the voting queue.",
    //   })
    }
  }

  const handleVote = (id: string, increment: number) => {
    setVideoQueue(
      videoQueue
        .map((video) =>
          video.id === id ? { ...video, votes: video.votes + increment } : video
        )
        .sort((a, b) => b.votes - a.votes)
    )
  }

  const playVideo = (video: VideoItem) => {
    setCurrentVideo(video)
    setVideoQueue(videoQueue.filter((v) => v.id !== video.id))

    if (creatorMode) {
    //   toast({
    //     title: "Now playing",
    //     description: `Now playing: ${video.title}`,
    //   })
    }
  }

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setIsCopied(true)

    //   toast({
    //     title: "Link copied!",
    //     description: "Share link has been copied to clipboard.",
    //   })

      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
    //   toast({
    //     title: "Failed to copy",
    //     description: "Please copy the URL manually.",
    //     variant: "destructive",
    //   })
    }
  }

  const handleCreatorModeToggle = (checked: boolean) => {
    setCreatorMode(checked)

    if (checked) {
    //   toast({
    //     title: "Creator mode enabled",
    //     description: "You now have access to creator features.",
    //   })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-center">Stream Song Voting</h1>

        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <div className="flex items-center space-x-2">
            <Switch
              id="creator-mode"
              checked={creatorMode}
              onCheckedChange={handleCreatorModeToggle}
            />
            <Label htmlFor="creator-mode" className="flex items-center gap-1">
              Creator Mode <Crown className="h-4 w-4 text-yellow-500" />
            </Label>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleShare}
                  className="relative"
                >
                  {isCopied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share this queue</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Now Playing</h2>
          {creatorMode && currentVideo && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" /> Share with viewers
            </Button>
          )}
        </div>
        <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
          {currentVideo && (
            <YouTubeEmbed
              videoid={currentVideo.id}
              height={400}
              width={100}
            />
          )}
        </div>
        {currentVideo && (
          <p className="text-center mt-2 font-medium">{currentVideo.title}</p>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Submit a Song</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-3xl mx-auto"
        >
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Paste YouTube video URL here"
              value={videoUrl}
              onChange={handleInputChange}
              className="flex-1"
            />
            <Button type="submit" disabled={!previewId}>
              Submit
            </Button>
          </div>

          {previewId && (
            <div className="mt-4">
              <h3 className="text-lg font-medium mb-2">Preview:</h3>
              <div className="aspect-video max-w-md mx-auto rounded-lg overflow-hidden">
                <YouTubeEmbed videoid={previewId} height={225} width={100} />
              </div>
            </div>
          )}
        </form>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            Up Next (Vote for your favorites)
          </h2>
          {creatorMode && videoQueue.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" /> Share queue
            </Button>
          )}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {videoQueue.map((video) => (
            <Card key={video.id} className="overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-2 right-2 bg-black/70 hover:bg-black/90"
                  onClick={() => playVideo(video)}
                >
                  <Play className="h-5 w-5" />
                </Button>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium line-clamp-1">{video.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 -mr-2 -mt-1"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `https://www.youtube.com/watch?v=${video.id}`
                      )
                    //   toast({
                    //     title: "Video link copied",
                    //     description: "YouTube link copied to clipboard",
                    //   })
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleVote(video.id, 1)}
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleVote(video.id, -1)}
                    >
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="font-bold text-lg">{video.votes}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {videoQueue.length === 0 && (
          <p className="text-center text-muted-foreground">
            No videos in the queue. Submit one!
          </p>
        )}
      </div>

      {creatorMode && (
        <div className="mt-8 p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Creator Share Link</h2>
          <div className="flex gap-2">
            <Input
              value={shareUrl}
              readOnly
              className="font-mono text-sm"
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
            <Button variant="outline" size="icon" onClick={handleShare}>
              {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Share this link with your viewers to let them see and vote on the
            current queue.
          </p>
        </div>
      )}
    </div>
  )
}
