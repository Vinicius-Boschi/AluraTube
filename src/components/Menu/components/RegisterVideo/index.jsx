import React from "react"
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

export default function RegisterVideo() {
    const registerForm = useForm({ 
        initialValues: {
            title: "", 
            url: ""
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
                            <button type="submit">Cadastrar</button>
                        </div>
                    </form>
                ) : false }
        </StyledRegisterVideo>
    )
}