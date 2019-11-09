import React from 'react';
import ReactDOM from 'react-dom';
import Technology from './Technology';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Technology />, div);
    ReactDOM.unmountComponentAtNode(div);
});