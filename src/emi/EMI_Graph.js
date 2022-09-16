import React from 'react'
import {Chart as ChartJs, ArcElement, Tooltip, Legend} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip, Legend);

const EMI_Graph = (props) => {

    const data = {
        labels: ['Principal','Interest'],
        datasets: [
            {
                label: '---',
                data: [props.principal,props.amount-props.principal],
                backgroundColor: [
                    // rgba(255,99,132,0.2),
                    // rgba(54,162,235,0.2),
                ],
                borderColor: [
                    // rgba(255,99,132,0.2),
                    // rgba(54,162,235,0.2),
                ],
                borderWidth: 1,
            },
        ],
    };

  return (
    <>
        <div className='row'>
            <div className='col-12'>
                <h4>Graph</h4>
                <Pie data={data}/>
            </div>
        </div>
    </>
  )
}

export default EMI_Graph