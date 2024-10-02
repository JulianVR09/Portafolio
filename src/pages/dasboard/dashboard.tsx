import React from "react";
import "./styles.css"

export const DashboardPage = () => {
    return (
        <div className="banner">
            <div className="slider" style={{ '--quantity': 4 } as React.CSSProperties}>
                <div className="item" style={{'--position': 1} as React.CSSProperties}>
                    <img src="/Second.jpeg" alt="Planet First" />
                </div>
                <div className="item" style={{'--position': 2} as React.CSSProperties}>
                    <img src="/First.jpeg" alt="Planet First" />
                </div>
                <div className="item" style={{'--position': 3} as React.CSSProperties}>
                    <img src="/Third.jpeg" alt="Planet First" />
                </div>
                <div className="item" style={{'--position': 4} as React.CSSProperties}>
                    <img src="/Fourt.jpeg" alt="Planet First" />
                </div>
            </div>
            <div className="content">
                <div className="author">
                    <h2>YulianVR</h2>
                    <p><b>Welcome</b> to me portfolio</p>
                    <p></p>
                </div>
                <div className="model"></div>
            </div>
        </div>
    );
};
