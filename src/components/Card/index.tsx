import {CardContainer} from "./styles"
interface ICarDataType{
    title: string,
    icon: string,
    amount: number
}
export default function Card(props: ICarDataType) {
    return (
        <CardContainer>
            <div>
                <span>{props.title}</span>
                <strong>{props.amount}</strong>
            </div>
          <span><img src={props.icon}/></span>
        </CardContainer>
    )
}