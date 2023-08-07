import Card from "../../components/Card";
import { CardGroup, HappyCard, HomeContainer, Polygon } from "./styles";

import costumers from "../../assets/users-svgrepo-com.svg";
import costumersall from "../../assets/users-svgrepo-com1.svg";
import signature from "../../assets/signature-doc-svgrepo-com.svg";
import man from "../../assets/man.png"
import polygon from "../../assets/tech.png"

export default function Home() {
    return (
        <HomeContainer>
            <CardGroup>
                <Card title="Total de Clientes" amount={50} icon={costumers}/>
                <Card title="Clientes activos"  amount={20} icon={costumersall}/>
                <Card title="Total de Planos"  amount={50} icon={signature}/>
            </CardGroup>
            <HappyCard>
                <div>
                    <h1>Parabens Manuel 👋</h1><br />
                    <p>Voce já movimentou 1000KZ hoje !</p>
                </div>
                    <div>
                    <img src={man} alt="" />
                    </div>
                   <Polygon src={polygon}/>
            </HappyCard>
        </HomeContainer>
    )
}