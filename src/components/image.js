import React from "react";

// Functional components
const Image = (props) => {

    const onClickChange = () => {
        // If image is clicked what should I do ??
        window.open("http://localhost:3000/ImageView/" + props.imageId)
    }

    return (
        <div>        
            <img src={props.src} alt="" onClick={onClickChange}/>
        </div>
    )
}
export default Image;