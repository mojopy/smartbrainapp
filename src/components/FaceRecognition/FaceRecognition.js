import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageLink }) => {
    return (
        <div className="flex justify-center mt4">
            <div className="absolute">
                <img src={imageLink} alt="" style={{maxWidth: "65vw", maxHeight: "auto"}} className="ba bw3 b--light-purple br3 shadow-3" id="inputImg"></img>
            </div>
        </div>
    );
}

export default FaceRecognition;