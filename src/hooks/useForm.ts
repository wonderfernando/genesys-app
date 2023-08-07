import {useState} from "react"
export const useForm = () => {
    const[error, setError] = useState("")
    const[value, setValue] = useState("")

    function onChange(event : React.ChangeEvent<HTMLInputElement>) {
        setError("")
        setValue(event.target.value)
    }
    function validaty() {
        if (value==="") {
            setError("Campo obrigatório")
        }else{
            setError("")
        }
    }
    function onBlur() {
        validaty()
    }

    return {error,onChange,value, onBlur, validaty}
}