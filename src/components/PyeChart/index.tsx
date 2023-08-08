import {Pie} from "react-chartjs-2"
import { PieChartContainer } from "./styles"
 
export default function PyeChart({data,title }: {data: any, title: string}) {
   
  return (
       <PieChartContainer style={{display:"flex"}}>
            <Pie
                data={data}
                
                options={{
                    plugins: {
                      title: {
                        display: true,
                        text: title
                      }
                    }
                  }}
            />
       </PieChartContainer>
    )
}