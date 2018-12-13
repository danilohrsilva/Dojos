import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { getIngredients } from './services/ingredientsServices';

import App from './App';

jest.mock('./services/ingredientsServices');


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('Teste snapshot', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('fetch on componentDidMount', () => {
  shallow(<App />);
  expect(getIngredients).toHaveBeenCalled();
});

it('error in render', async () => {
  const wrapper = await mount(<App/>);
  expect(wrapper.state().ingredients.length).toBe(0);
})

