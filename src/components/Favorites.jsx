import config from '../../config.json'
import styled from 'styled-components'

export default function Favorites(props) {
    const allFavorites = Object.keys(props.favorites)

    return (
        <div>
            {allFavorites.map((favorite) => {
                return (
                    <section>
                        <h2>{favorite}</h2>
                        <div>
                            {props.favorites[favorite].map((item) => {  
                                return (
                                    <div>
                                        <img src={`https://github.com/${config.github}.png`} alt={item.user} />
                                        <span>{ item.user}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}