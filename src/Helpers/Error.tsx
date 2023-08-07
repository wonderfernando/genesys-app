
import styled from "styled-components"
const ErrorContainer = styled.span`
    color: ${props=>props.theme["red-500"]};
`

interface IDescription{
    description: string
}
export default function Error({description} : IDescription) {
    return <ErrorContainer>{description}</ErrorContainer>
}