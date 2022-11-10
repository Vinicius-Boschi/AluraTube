import styled from "styled-components"
import config from "../../config.json"

const StyledHeader = styled.div`
    .banner {
        width: 100%;
        height: 250px;
    }

    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }

    .user-image {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`

export default function Header() {
  return (
    <StyledHeader>
      <img className="banner" src={config.header} />
      <section className="user-info">
        <img className="user-image" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}
