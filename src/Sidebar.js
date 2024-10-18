import React from 'react';
import './App.css';

function Sidebar() {
    return (
        <aside className="App-sidebar">
            <ul>
                <li><a href="#section1">Section 1</a></li>
                <li><a href="#section2">Section 2</a></li>
                <li><a href="#taxonomy-section">Section 3</a></li>
                <li><a href="#section4">Section 4</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;