import React from "react";
import '../../App.css';
import grid from '../../images/grid2.png';

function CardRegStack() {
    return (
        <div className="card-cont-rg">
            <div className="card-rg">
                <img src={grid} className="card-prof-img"></img>
                <div className="card-rg-text-cont">
                    <p className="card-rg-header-text">
                    Tech Stack
                    </p>
                    <p className="card-rg-subtext">
                    I specialize in a variety of languages, frameworks, and tools that 
                    allow me to build robust and scalable applications
                    </p>
                </div>
            </div>

        </div>
    );
};

export default CardRegStack;