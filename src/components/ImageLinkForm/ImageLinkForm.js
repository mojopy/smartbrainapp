import React from "react";
import "./ImageLinkForm.css"

const ImageLinkForm = ({ onLinkInput, onButtonClick }) => {

    return (
        <>
            <p className="f3 tc white">
                {'This Magic Brain will detect faces in your pictures. Give it a shot!'}
            </p>
            <div className="pa3 br3 w-40 center form">
                <input
                    className="f6 f5-l input-reset bn black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"
                    placeholder="Link to your picture here."
                    type="text" onChange={onLinkInput} id="linkInputBox"/>
                <button className="f6 f5-l pv3 tc bn bg-light-purple grow white w-100 w-25-m w-20-l br2-ns br--right-ns" onClick={onButtonClick}>Detect</button>
            </div>
        </>
    );
}

export default ImageLinkForm;