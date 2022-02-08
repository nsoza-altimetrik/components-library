import React from "react";
import styles from "./Button.module.css"

const Button = ({text, primary}) => {
    return ( <>
        <button type="button" className={ `${ primary ? styles.primary : styles.secondary }`}>
            {text}
        </button>
    </> );
}
 
export default Button;