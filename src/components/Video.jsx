import * as React from "react"

export const Video = ({ src, title, ...props }) => {
  return (
    <div className="video-container">
      <div className="video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>
    </div>
  )
}

Video.defaultProps = {
  src: "https://www.youtube.com/embed/lUzSsX4T4WQ",
  title: "Test video",
}
