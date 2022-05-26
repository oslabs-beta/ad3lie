import BarChartCustomizer from "./BarChartForm";

//This is the generic classful parent component that hosts the chart-specific form and graph 
//We update state from the form, which the graph reads and re-renders from
<ChartWrapper> //-> state lives here
    <BarChartForm />
    <BarChartCustomizer />
    <BarChartCodePreview />
</ChartWrapper>