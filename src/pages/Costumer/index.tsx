import { PaintBrush } from "phosphor-react"
import {ButtonAddNewCostumer, CostumerContainer, UserSoonUnsubcribe} from "./styles"
export default function Costumers() {
    return (
        <CostumerContainer>
        <div style={{display:"flex", justifyContent:"flex-end"}}>
             <ButtonAddNewCostumer>Adicionar Novo</ButtonAddNewCostumer>
        </div>
               
           <UserSoonUnsubcribe>
           
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

        </CostumerContainer>
    )
}