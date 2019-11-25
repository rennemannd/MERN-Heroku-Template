import React from 'react';
import ReactDOM from 'react-dom';
import Logout from './Logout';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logout />, div);
    ReactDOM.unmountComponentAtNode(div);
});