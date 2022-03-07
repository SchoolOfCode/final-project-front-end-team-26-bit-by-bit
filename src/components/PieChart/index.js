import React from "react"
import"chart.js/auto"
import { Doughnut } from "react-chartjs-2"
import "./PieChart.css"

const PieChart = ({item}) =>{
    const labels = ["goals completed","current goals"]
    const data = {
        labels,
        datasets:[{
            label: "goals",
            data:[item.amount-item.currentamount, item.currentamount],
            backgroundColor:[
                "rgb(0, 174, 255)",
                "rgb(4, 0, 255)"
            ],
            hoverOffset:4
        }]
        
    }
    console.log("data", data)


    return(
        <div className="ChartContainer">
        <div>{item.text}</div>
        <Doughnut className="Chart"data={data}/>

        </div>
    )
}

export default PieChart