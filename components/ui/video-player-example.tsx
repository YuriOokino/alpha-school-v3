import VideoPlayer from "./video-player"

/**
 * Example usage of the VideoPlayer component
 * This demonstrates different configurations for YouTube and Vimeo videos
 */
export function VideoPlayerExample() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Vimeo Video Example</h3>
        <VideoPlayer
          videoUrl="https://player.vimeo.com/video/941700697"
          posterImage="/assets/feature-video-overlays/austin-video-preview.webp"
          posterAlt="Austin Campus Video Preview"
          width="800px"
          height={480}
          className="max-w-3xl"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">YouTube Video Example</h3>
        <VideoPlayer
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          posterImage="/assets/feature-video-overlays/how-alpha-works.webp"
          posterAlt="How Alpha Works Video Preview"
          width={600}
          height={360}
          className="max-w-2xl"
        />
      </div>


    </div>
  )
}

export default VideoPlayerExample 