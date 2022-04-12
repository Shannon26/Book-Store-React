import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);



const Charts = (props) => {

    // console.log(props.title)
    // console.log(props.sales)

    // const pieData = {
    //     // maintainAspectRatio: false,
    //     // responsive: false,
    //     labels: props.title,
    //     datasets: [
    //       {
    //         data: props.sales,
    //         // backgroundColor: chartColors,
    //         // hoverBackgroundColor: chartColors
    //       }
    //     ]
    //   };
    return (
        <div className='container'>
            <Pie
                data={{
                    maintainAspectRatio: false,
                    // responsive: false,
                    labels: props.title,
                    datasets: [
                        {
                            label: 'Sales Dataset',
                            data: props.sales,
                            backgroundColor: [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(25, 205, 86)',
                                'rgb(125, 205, 86)',
                                'rgb(55, 05, 86)',
                                'rgb(255, 105, 86)',
                                'rgb(255, 29, 86)',
                                'rgb(222, 25, 186)',
                                'rgb(255, 205, 26)',
                                'rgb(145, 205, 216)',
                            ],
                            hoverOffset: 10,

                        }
                    ]
                }}

            />
        </div>
    )
}

export default Charts;