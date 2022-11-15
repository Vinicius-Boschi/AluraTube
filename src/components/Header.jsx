import config from "../../config.json"
import { StyledHeader } from "../assets/styles/Header"

export default function Header() {
  return (
    <StyledHeader>
      <img className="banner" src={config.header} />
      <section className="user-info">
        <img className="user-image" src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p className="user-job">{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  )
}