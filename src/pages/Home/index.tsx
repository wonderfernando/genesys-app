import Card from "../../components/Card";
import { CardGroup, ChartGroupContainer, HappyCard, HomeContainer, Polygon,CardChart, UserSoonUnsubcribe } from "./styles";
import costumers from "../../assets/users-svgrepo-com.svg";
import costumersall from "../../assets/users-svgrepo-com1.svg";
import signature from "../../assets/signature-doc-svgrepo-com.svg";
import man from "../../assets/man.png"
import polygon from "../../assets/tech.png"
import { Link } from "react-router-dom";
import PyeChart from "../../components/PyeChart";
import { Chart } from "chart.js";
import { CategoryScale } from "chart.js/auto";
import { PaintBrush } from "phosphor-react";
    Chart.register(CategoryScale)
export default function Home() {

    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Marco'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Total de vendas',
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
    const data2 = {
        labels: ['Plano 200MB Mensal', 'Plano 100MB trimestral', 'Plano 1GB mensal',"Plano 150MB + Netflix mensal"],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Total de vendas',
              data: [25, 23, 6,12],
              
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(244, 5, 185, 0.6)',
                'rgba(244, 1, 1, 0.6)',
                'rgba(2, 106, 253, 0.6)',
                'rgba(230, 149, 0, 0.783)'
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

            <UserSoonUnsubcribe>
                <h1>Terminando em breve</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Emal</th>
                            <th>Telefone</th>
                            <th>Morada</th>
                            <th>Plano</th>
                            <th>Validade</th>
                            <th>Dias restantes</th>
                            <th>Estato</th>
                            <th>Acão</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>Fernando Silva</td>
                            <td>fernando@gmail</td>
                            <td>921212</td>
                            <td>Maianga</td>
                            <td>Mais intenso</td>
                            <td>10/02/2022</td>
                            <td>5 dias</td>
                            <td>Activo</td>
                            <td><button>Renovar <PaintBrush size={20}/></button></td>
                    </tr>
                    <tr>
                            <td>João Manuel</td>
                            <td>manuel@gmail</td>
                            <td>921212</td>
                            <td>Maianga</td>
                            <td>Mais intenso</td>
                            <td>10/02/2022</td>
                            <td>5 dias</td>
                            <td>Activo</td>
                            <td><button>Renovar <PaintBrush size={20}/></button></td>
                    </tr>
                    <tr>
                            <td>Carlos Almeida</td>
                            <td>almeida@gmail</td>
                            <td>921212</td>
                            <td>Maianga</td>
                            <td>Mais intenso</td>
                            <td>10/02/2022</td>
                            <td>5 dias</td>
                            <td>Activo</td>
                            <td><button>Renovar <PaintBrush size={20}/></button></td>
                    </tr>
                    <tr>
                            <td>Gabriel Soares</td>
                            <td>gab@gmail</td>
                            <td>921212</td>
                            <td>Maianga</td>
                            <td>Mais intenso</td>
                            <td>10/02/2022</td>
                            <td>5 dias</td>
                            <td>Activo</td>
                            <td><button>Renovar <PaintBrush size={20}/></button></td>
                    </tr>
                    </tbody>
                </table>
            </UserSoonUnsubcribe>

          <ChartGroupContainer>
            <CardChart>
                <PyeChart title="Vendas por mes" data={data}/>
            </CardChart>
            <CardChart>
                <PyeChart title="Vendas por plano" data={data2}/>
            </CardChart>
          </ChartGroupContainer>
        </HomeContainer>
    )
}