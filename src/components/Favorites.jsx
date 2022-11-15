import config from "../../config.json"
import { StyledFavorites } from "../assets/styles/Favorites"

export default function Favorites() {
  const allFavorites = config["favorites"]

  return (
    <StyledFavorites>
      <section>
        <h2>AluraTube Favoritos</h2>
        <div className="infos">
          {allFavorites.map((favorite, index) => {
            return (
              <div key={index} className="info-user">
                <img
                  src={`https://github.com/${favorite.user}.png`} alt={favorite.user}
                />
                <span>{"@" + favorite.user}</span>
              </div>
            )
          })}
        </div>
      </section>
    </StyledFavorites>
  )
}