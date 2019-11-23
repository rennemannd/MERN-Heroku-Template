import React from 'react';
import ReactDOM from 'react-dom';
import AuthenticatedComponent from './AuthenticatedComponent';
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthenticatedComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});