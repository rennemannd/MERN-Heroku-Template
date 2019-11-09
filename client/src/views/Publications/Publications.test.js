import React from 'react';
import ReactDOM from 'react-dom';
import Publications from './Publications';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Publications />, div);
    ReactDOM.unmountComponentAtNode(div);
});