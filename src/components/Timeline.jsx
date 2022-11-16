import { StyledTimeline } from "../assets/styles/Timeline";
// import "@coreui/coreui/dist/css/coreui.min.css"
// import { CCarousel, CCarouselItem, CImage } from "@coreui/react"
// import 'bootstrap/dist/css/bootstrap.css'
// import Carousel from 'react-bootstrap/Carousel'
import Glider from "react-glider";
import "glider-js/glider.min.css";

export default function Timeline({ searchValue, ...props }) {
  const playlistNames = Object.keys(props.playlists)

  return (
    <>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName]
        return (
          <Glider
            className="glider-container"
            draggable
          >
            <StyledTimeline >
            <div className="infos" key={playlistName}>
                <h2>{playlistName}</h2>
              <div className="container">
                {videos
                  .filter((video) => {
                    const titleNormalized = video.title.toLowerCase()
                    const searchValueNormalized = searchValue.toLowerCase()
                    return titleNormalized.includes(searchValueNormalized)
                  })
                  .map((video) => {
                    return (
                        <a key={video.url} href={video.url} target="_blank">
                          <img src={video.thumb} />
                          <span>{video.title}</span>
                        </a>
                    )
                  })}
              </div>
            </div>
            </StyledTimeline>
          </Glider>
        )
      })}
      </>
  )
}