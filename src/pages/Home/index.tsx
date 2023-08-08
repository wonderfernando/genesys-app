import Card from "../../components/Card";
import { CardGroup, HappyCard, HomeContainer, Polygon } from "./styles";

import costumers from "../../assets/users-svgrepo-com.svg";
import costumersall from "../../assets/users-svgrepo-com1.svg";
import signature from "../../assets/signature-doc-svgrepo-com.svg";
import man from "../../assets/man.png"
import polygon from "../../assets/tech.png"
import { Link } from "react-router-dom";
import PyeChart from "../../components/PyeChart";

import { Chart } from "chart.js";
import { CategoryScale } from "chart.js/auto";
    Chart.register(CategoryScale)
export default function Home() {

    const data = {
        labels: ['Red', 'Orange', 'Blue'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Popularity of colours',
              data: [55, 23, 96],
              
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(244, 5, 185, 0.6)',
                'rgba(244, 1, 1, 0.6)',
                'rgba(2, 106, 253, 0.6)'
              ],
              borderWidth: 1,
            }
        ]
    }
    return (
        <HomeContainer>
            <CardGroup>
                <Card title="Total de Clientes" amount={50} icon={costumers}/>
                <Card title="Clientes activos"  amount={20} icon={costumersall}/>
                <Card title="Total de Planos"  amount={50} icon={signature}/>
            </CardGroup>
            <HappyCard>
                <div>
                    <h1>Parabens Manuel <Link to="/entrar">👋</Link></h1><br />
                    <p>Voce já movimentou 1000KZ hoje !</p>
                </div>
                    <div>
                    <img src={man} alt="" />
                    </div>
                   <Polygon src={polygon}/>
            </HappyCard>
            <PyeChart data={data}/>
        </HomeContainer>
    )
}