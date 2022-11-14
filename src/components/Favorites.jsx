import config from '../../config.json'
import styled from 'styled-components'

const StyledFavorites = styled.div`
    section {
        width: 100%;
        padding: 0;
        padding: 16px;
    }

    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }

    .info-user {
        display: flex;
        flex-direction: column;
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

export default function Favorites(props) {
    const allFavorites = Object.keys(props.favorites)

    return (
        <div>
            {allFavorites.map((favorite) => {
                return (
                    <StyledFavorites key={favorite}>
                        <section>
                            <h2>{favorite}</h2>
                            <div>
                                {props.favorites[favorite].map((item) => {  
                                    return (
                                        <div key={item} className="info-user">
                                            <img src={`https://github.com/${config.github}.png`} alt={item.user} />
                                            <span>{ item.user}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </StyledFavorites>
                )
            })}
        </div>
    )
}