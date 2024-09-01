import React from "react";
import './platforms.css'

function Platforms({ data }) {
    return (
        <div className='class-bottom'>
            {data.map((row) => (
                <div key={row.id} style={{ backgroundColor: row.color }} className='block-data'>
                    <h2>{row.id}</h2>
                    <h3>{row.title}</h3>
                    <p>{row.paragraph}</p>
                </div>
            ))}
        </div>
    );
}

export default Platforms;