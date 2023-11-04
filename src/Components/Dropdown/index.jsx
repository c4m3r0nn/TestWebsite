// DropdownMenu.jsx
import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown() {

    return (
        <div className="dropdown">
                <div className="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                </div>
        </div>
    );
}

export default Dropdown;
