import config from "../../config.json"
import styled from "styled-components"

const StyledFavorites = styled.div`
  section {
    width: 100%;
    padding: 16px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  .infos {
    width: calc(100vw - 16px * 4);
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  .info-user {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  span {
    margin-top: 10px;
  }
`

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