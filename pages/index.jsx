import config from "../config.json"
import Menu from "../src/components/Menu"
import Header from "../src/components/Header"
import Timeline from "../src/components/Timeline"
import Favorites from "../src/components/Favorites"
import { CSSReset } from "../src/components/CSSReset"

function HomePage() {

    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
                <Favorites favorites={config.favorites}/>
            </div>
        </>
    )
}

export default HomePage