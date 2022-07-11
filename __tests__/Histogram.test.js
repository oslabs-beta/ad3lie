import Histogram from '../src/components/Charts/Histogram/JSX/Histogram.jsx';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { build, fake } from 'test-data-bot';
import '@testing-library/jest-dom/extend-expect';

describe('Unit Testing Histogram Rendering', () => {
  beforeEach(() => {
    const props = {
      data: [
        {
          species: 'Adelie',
          island: 'Torgersen',
          culmen_length_mm: 39.2,
          culmen_depth_mm: 19.6,
          flipper_length_mm: 195,
          body_mass_g: 4675,
          sex: 'MALE'
        },
        {
          species: 'Gentoo',
          island: 'Torgersen',
          culmen_length_mm: 34.1,
          culmen_depth_mm: 18.1,
          flipper_length_mm: 193,
          body_mass_g: 3475,
          sex: null
        },
        {
          species: 'Emperor',
          island: 'Torgersen',
          culmen_length_mm: 42,
          culmen_depth_mm: 20.2,
          flipper_length_mm: 190,
          body_mass_g: 4250,
          sex: null
        },
        {
          species: 'Fairy',
          island: 'Torgersen',
          culmen_length_mm: 37.8,
          culmen_depth_mm: 17.1,
          flipper_length_mm: 186,
          body_mass_g: 3400,
          sex: null
        },
        {
          species: 'Rock',
          island: 'Torgersen',
          culmen_length_mm: 37.8,
          culmen_depth_mm: 17.3,
          flipper_length_mm: 180,
          body_mass_g: 3700,
          sex: null
        }
      ],
      xKey: 'body_mass_g',
      xAxisLabel: 'X - axis: Species',
      yAxisLabel: 'Y - axis: Body Mass',
      height: 500,
      width: 500,
      thresholds: 9,
      barPadding: 2
    };
    // const svg = document.createElement('svg');
    // const setup = () => {
    //   return render(
    //     <svg>
    //       <Histogram {...props} />
    //     </svg>
    //   );
    // };
    const { findText } = render(<Histogram {...props} />);
  });

  it('Renders Correct Number of Initial Dataset Bars', () => {
    component = getComponent();
    expect(component.find('.rect').length).toHaveLength(5);
  });

  it('Renders Histogram Bars from Bins Input', () => {
    expect(findText()).toHaveTextContent('Adelie');
    expect(findText()).toHaveTextContent('Gentoo');
    expect(findText()).toHaveTextContent('Emperor');
    expect(findText()).toHaveTextContent('Fairy');
    expect(findText()).toHaveTextContent('Rock');
  });
  it('Renders Chart X and Y-Axis Labels', () => {
    expect(findText()).toHaveTextContent('X - axis: Species');
    expect(findText()).toHaveTextContent('Y - axis: Body Mass');
  });
  it('Renders Range Values on X-Axis', () => {
    expect(findText()).toHaveTextContent(3500);
    expect(findText()).toHaveTextContent(4000);
    expect(findText()).toHaveTextContent(4500);
  });
  it('Renders Range Values on Y-Axis', () => {
    expect(findText()).toHaveTextContent(0);
    expect(findText()).toHaveTextContent(0.2);
    expect(findText()).toHaveTextContent(0.4);
    expect(findText()).toHaveTextContent(0.6);
    expect(findText()).toHaveTextContent(0.8);
    expect(findText()).toHaveTextContent(1);
  });
});
