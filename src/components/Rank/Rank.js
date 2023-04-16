import React from "react";

let user_Name = "Hey, you"

const Rank = () => {
    return (
        <div className="tc">
            <div className="white f3">
                {user_Name + ', your current rank is...'}
            </div>
            <div className="white f1">
                {'#8'}
            </div>
        </div>
    );
}

export default Rank;