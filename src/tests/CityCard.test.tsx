import React from 'react';
import { render, RenderOptions, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

// Import your store
import { store } from '../store/store';
import CityCard from '../components/CityCard/CityCard';

const Wrapper: React.FC = ({ children }: any) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
// export { customRender as render };

describe('Home Pages', () => {
  test('Should be render', () => {
    customRender(<CityCard city='ww' key={'wd'} id='efef' />);
    const getAText = screen.getByTestId('welcome');
    expect(getAText).toBeInTheDocument();
  });
});
