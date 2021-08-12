import React from 'react'
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { GrContract } from 'react-icons/gr';

function ToolBar({title}) {
    return (
        <div className="flex justify-between">
            <h3>{title}</h3>

            <div>
            <FaExpandArrowsAlt />
            <GrContract />
            </div>
        </div>
    )
}

export default ToolBar
