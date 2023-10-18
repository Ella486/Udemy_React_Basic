import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); 
    const totalMaxium = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.id}
                    value={dataPoint.value} 
                    maxValue={totalMaxium} 
                    label={dataPoint.label} 
                />
            ))}
        </div>
    );
}

export default Chart;