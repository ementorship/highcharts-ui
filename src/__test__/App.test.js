import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from '../App';

describe('Addition', () => {
  it('should return 5 + 4 equals 9 ', () => {
    expect(5 + 4).toBe(9);
  });
});


describe("A suite", function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
