import {Pie} from "react-chartjs-2"
import { PieChartContainer } from "./styles"
 
export default function PyeChart({data}: any) {
    return (
       <PieChartContainer style={{display:"flex"}}>
        <h1>Usando Chart.js</h1>
            <Pie
                data={data}
                
                options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "Users Gained between 2016-2020"
                      }
                    }
                  }}
            />
       </PieChartContainer>
    )
}