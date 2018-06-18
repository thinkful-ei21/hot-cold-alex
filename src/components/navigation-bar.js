import React from 'react';

import './navigation-bar.css';

export default function NavigationBar(props) {
    return (
        <div className="navigation-bar">
            {props.text}
        </div>
    );
};