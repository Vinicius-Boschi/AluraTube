import React from "react"
import { createClient } from "@supabase/supabase-js"
import { StyledRegisterVideo } from "./style"

function useForm(props) {
    const [values, setValues] = React.useState(props.initialValues)

    return {
        values,
        handleChange: (e) => {
            const value = e.target.value
            const name = e.target.name
            setValues({
                ...values,
                [name]: value
            })
        },
        clearForm: () => {
            setValues({})
        }
    }
}
const PROJECT_URL = 'https://jadymlphqukujsvsbekg.supabase.co'
const PROJECT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZHltbHBocXVrdWpzdnNiZWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MzY5NDIsImV4cCI6MTk4NDExMjk0Mn0.l2mORIKFauACl48rsJwEP3Y5lGjWWJsY6-mQOKpMH1s'
const supabase = createClient(PROJECT_URL, PROJECT_KEY)


function getThumbnail(url) {
    return "https://img.youtube.com/vi/" + url.split("v=")[1] + "/hqdefault.jpg"
}

export default function RegisterVideo() {
    const registerForm = useForm({ 
        initialValues: {
            title: "", 
            url: "",
            playlist: ""
        }
     })
    const [isFormVisible, setIsFormVisible] = React.useState(false)

    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setIsFormVisible(true)}>+</button>
            { isFormVisible 
                ? (
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        supabase.from("video").insert({
                            title: registerForm.values.title,
                            url: registerForm.values.url,
                            thumb: getThumbnail(registerForm.values.url),
                            playlist: registerForm.values.playlist
                        })
                        .then((response) => {
                            console.log(response)
                        })
                        .catch((error) => {
                            console.error(error) 
                        })
                        setIsFormVisible(false)
                        registerForm.clearForm()
                    }}>  
                        <div>
                            <button type="button" className="close-modal" onClick={() => setIsFormVisible(false)}>X</button>
                            <input 
                                placeholder="Título do vídeo" 
                                name="title"
                                value={registerForm.values.title} 
                                onChange={registerForm.handleChange}
                            />
                            <input 
                                placeholder="URL"
                                name="url" 
                                value={registerForm.values.url} 
                                onChange={registerForm.handleChange}
                            />
                            <input 
                                placeholder="Playlist"
                                name="playlist" 
                                value={registerForm.values.playlist} 
                                onChange={registerForm.handleChange}
                            />
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                ) : false }
        </StyledRegisterVideo>
    )
}