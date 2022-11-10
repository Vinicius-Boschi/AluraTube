import styled from "styled-components"

const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 7px;
  overflow: hidden;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }

  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 16px;

    div {
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;

      a {
        scroll-snap-align: start;
        
        span {
          padding: 8px 24px 0 0;
          margin-bottom: 20px;
          display: block;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`

export default function Timeline(propriedades) {
  const playlistNames = Object.keys(propriedades.playlists)

  return (
      <StyledTimeline>
          {playlistNames.map((playlistName) => {
              const videos = propriedades.playlists[playlistName]
              return (
                  <section>
                      <h2>{playlistName}</h2>
                      <div>
                          {videos.map((video) => {
                              return (
                                  <a href={video.url} target="_blank">
                                      <img src={video.thumb} />
                                      <span>
                                          {video.title}
                                      </span>
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