import React from 'react';
import ReactDOM from 'react-dom';
import Press from './Press';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Press />, div);
    ReactDOM.unmountComponentAtNode(div);
});