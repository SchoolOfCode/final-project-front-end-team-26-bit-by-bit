import React from "react"
import"chart.js/auto"
import { Doughnut } from "react-chartjs-2"
import "./PieChart.css"

const PieChart = () =>{
    const labels = ["reminders completed","current reminders","deleted reminders"]
    const data = {
        labels,
        datasets:[{
            label: "goals",
            data:[250, 40, 30],
            backgroundColor:[
                "rgb(0, 174, 255)",
                "rgb(0, 81, 255)",
                "rgb(4, 0, 255)"
            ],
            hoverOffset:4
        }]
        
    }


    return(
        <div className="ChartContainer">
        <Doughnut data={data}/>
        </div>
    )
}

export default PieChart