import React from 'react';
import { ChangeEvent, useState, Fragment } from 'react';
import { BarChartContext } from '../ChartContext'

export default function ChartCustomizer () {
  // type ChartCustomizerProps = {
  //   onChange: (n: number) => void;
  // };

  //import bar chart context from ChartContext or create context here?
  //use this form to update values (in context)
  //barchart.tsx will pull updated context 

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  
  const changeWidth = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWidth(+event.target.value);
  }
  return (
    <Fragment>
    <div>Chart Customizer Box</div>
    <section className="form">
        <form onSubmit={() => {}}>
          <input
            id="set-width"
            type="number"
            value={width}
            onChange={changeWidth}
          />
        </form>
      </section>
    </Fragment>
  )
}