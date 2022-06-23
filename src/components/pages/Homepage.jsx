import React from 'react';
import { render } from 'react-dom';
import ChartCards from './ChartCards'
import TheCarousel from './TheCarousel';

function Homepage() {
	return (
		<div>
			<TheCarousel />
			<ChartCards />
		</div>
	)
}

export default Homepage;