import React from "react"
import Menu from "../src/components/Menu"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"
import config from "../config.json"
import { VideoService } from "../src/services/VideoServices"

function HomePage() {
  const service = VideoService()
  const [filterValue, setFilterValue] = React.useState("")
  const [playlists, setPlaylists] = React.useState({})

  React.useEffect(() => {
    service.getAllVideos().then((dados) => {
      const newPlaylist = {}
      dados.data.forEach((video) => {
        if (!newPlaylist[video.playlist]) newPlaylist[video.playlist] = []
        newPlaylist[video.playlist] = [video, ...newPlaylist[video.playlist]]
      })
      setPlaylists(newPlaylist)
    })
  }, [])

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
        <Header />
        <Timeline searchValue={filterValue} playlists={playlists} />
        <Favorites favorites={config.favorites} />
      </div>
    </>
  )
}

export default HomePage