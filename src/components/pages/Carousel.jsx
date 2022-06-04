import React from 'react';

function Carousel( props ) {
	return (
		<div
      id="carouselExampleCaptions"
      class="glass carousel slide relative block w-full"
      data-bs-ride="carousel">
      <div
        class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 rounded-lg ">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1" />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2" />
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3" />
      </div>
			
			<div class="carousel-center relative w-full overflow-hidden rounded-lg">
        <div class="carousel-item active carousel-center float-left w-full rounded-lg object-contain">
					
          {/* <svg class="Chart mx-auto" width="100%" height="500"><g transform="translate(75, 40)"><g class="Axis AxisHorizontal fromLinkFiber1093" transform="translate(0, 383)"><line class="Axis__line" x2="994"></line><text class="Axis__tick" transform="translate(0, 25)">0.2</text><text class="Axis__tick" transform="translate(180.7272727272727, 25)">0.3</text><text class="Axis__tick" transform="translate(361.45454545454544, 25)">0.4</text><text class="Axis__tick" transform="translate(542.1818181818181, 25)">0.5</text><text class="Axis__tick" transform="translate(722.9090909090908, 25)">0.6</text><text class="Axis__tick" transform="translate(903.6363636363635, 25)">0.7</text><text class="Axis__label" transform="translate(497, 60)">X-axis: Humidity</text></g><g class="Axis AxisVertical fromLinkFiber1095"><line class="Axis__line" y2="383"></line><text class="Axis__tick" transform="translate(-16, 383)">0</text><text class="Axis__tick" transform="translate(-16, 287.25)">5</text><text class="Axis__tick" transform="translate(-16, 191.5)">10</text><text class="Axis__tick" transform="translate(-16, 95.75)">15</text><text class="Axis__tick" transform="translate(-16, 0)">20</text><text class="Axis__label" style={{"transform": "translate(-56px, 191.5px) rotate(-90deg);"}}>Y-axis: Temperature</text></g><rect class="Bars__rect fromLinkFiber1096" x="2" width="88.36363636363635" height="19.150000000000034" y="363.84999999999997"></rect><rect class="Bars__rect" x="92.36363636363635" width="88.36363636363635" height="19.150000000000034" y="363.84999999999997"></rect><rect class="Bars__rect" x="182.7272727272727" width="88.36363636363632" height="76.59999999999997" y="306.40000000000003"></rect><rect class="Bars__rect" x="273.090909090909" width="88.36363636363643" height="191.5" y="191.5"></rect><rect class="Bars__rect" x="363.45454545454544" width="88.36363636363637" height="363.84999999999997" y="19.150000000000016"></rect><rect class="Bars__rect" x="453.8181818181818" width="88.36363636363632" height="268.09999999999997" y="114.90000000000002"></rect><rect class="Bars__rect" x="544.1818181818181" width="88.36363636363637" height="344.7" y="38.29999999999999"></rect><rect class="Bars__rect" x="634.5454545454545" width="88.36363636363626" height="363.84999999999997" y="19.150000000000016"></rect><rect class="Bars__rect" x="724.9090909090908" width="88.36363636363649" height="191.5" y="191.5"></rect><rect class="Bars__rect" x="815.2727272727273" width="88.36363636363626" height="57.44999999999999" y="325.55"></rect><rect class="Bars__rect" x="905.6363636363635" width="88.36363636363649" height="19.150000000000034" y="363.84999999999997"></rect><rect class="Bars__rect" x="996" width="0" height="0" y="383"></rect></g></svg> */}
          <div class="carousel-caption hidden md:block pb-8 text-center">
            <h5 class="text-xl">Bar Chart</h5>
          </div>
        </div>
				<div class="carousel-item carousel-center float-left w-full rounded-lg  text-center">
					{/* 2nd svg goes here */}
				  <div class="carousel-caption hidden md:block pb-8 text-center">
            <h5 class="text-xl">LineChart</h5>
          </div>
        </div>
				<div class="glass carousel-item active relative float-left w-full"> 
          <div class="carousel-caption hidden md:block absolute text-center "></div>
					{/* 3rd svg goes here */}
					<h5 class="text-xl">BarChart</h5>
        </div>
				<button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        >
        <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
      >
      <span
      class="carousel-control-next-icon inline-block bg-no-repeat"
      aria-hidden="true"
      ></span>
      <span class="visually-hidden">Next</span>
    </button>
		</div>
		<div class="p-4 m-4">
        <h1 class="text-2xl font-bold text-dark-grey">D3ACT</h1> 
      <div class="pt-5">
      </div>
      <div class="pt-5">
        <div class="text-center py-4 lg:px-4 rounded-lg">
          <div
          class="p-2 glass items-center text-blue-100 leading-none lg:rounded-full flex lg:inline-flex"
          role="alert">
						<span class="font-semibold mr-3 text-center flex-auto"
            >CHART INFO</span
            >
						</div>
          </div>
        </div>
      </div>
			<div class="pt-5 ">
        <div class="px-6 py-4 grid gap-4 grid-cols-4 ">
          <div class="glass text-white max-w-sm rounded-md  shadow-lg p-2">
            <div class="flex font-bold text-xl mb-2 items-center">

{/*4th svg goes here  */}
							</div>
						</div>
					</div>
				</div>
      {/* {End of Carousel}   */}
				
        
    {/* /* {End of Wrapper} */  }
		
  </div>
			
		
  
	)
}
export default Carousel;