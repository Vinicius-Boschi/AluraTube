import React from "react"
import { StyledSwitch } from "../../../assets/styles/DarkModeSwitch"
import { ColorModeContext } from "./ColorMode"

export default function DarkModeSwitch() {
    const context = React.useContext(ColorModeContext)

    return (
        <StyledSwitch>
            <input id="darkmode" type="checkbox" onChange={() => {
                context.setMode(context.mode === "light" ? "dark" : "light")
            }} />
            <label
                htmlFor="darkmode"
                className="darkmode-switch"
            >
                <span>🌙</span>
                <span>☀️</span>
            </label>
        </StyledSwitch>
    )
}