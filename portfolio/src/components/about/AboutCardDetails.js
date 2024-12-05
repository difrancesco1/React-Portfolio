import React, { useEffect, useState } from "react";


const AboutCardDetails = (props) => {
    const [cardType, setCardType] = useState("");
    const [imageStyle, setImageStyle] = useState("");
    const [imagePath, setImagePath] = useState("");
    const [cardTextContainer, setCardTextContainer] = useState("");
    const [cardHeaderText, setCardHeaderText] = useState("");
    const [cardParagraphText, setParagraphText] = useState("");

    

    const bindDetails = () => {
        setCardType(props.cardType);
        setImageStyle(props.imageStyle);
        setImagePath(props.imagePath);
        setCardTextContainer(props.cardTextContainer);
        setCardHeaderText(props.cardHeaderText);
        setParagraphText(props.cardParagraphText);
    }

    useEffect( () => {
        bindDetails();
    },[])

    return (
        <div className= {cardType} >
            <img src={imagePath} className= {imageStyle} ></img>
            <div className={cardTextContainer}>
                <p className={cardHeaderText}>
                    Hi, My name is Joshua DiFrancesco
                </p>
                <p className={cardParagraphText}>
                    A developer with a passion for web, programs and mobile applications.
                    I like building clean, user-friendly and responsive websites.
                </p>
            </div>
        </div>

    );
};

export default AboutCardDetails