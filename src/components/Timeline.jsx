import { StyledTimeline } from "../assets/styles/Timeline"

export default function Timeline({searchValue, ...props}) {
  const playlistNames = Object.keys(props.playlists)

  return (
    <StyledTimeline>
        {playlistNames.map((playlistName) => {
            const videos = props.playlists[playlistName]
            return (
                <section key={playlistName}>
                    <h2>{playlistName}</h2>
                    <div>
                        {videos.filter((video) => {
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
                </section>
            )
        })}
    </StyledTimeline>
  )
}