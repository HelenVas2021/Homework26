import React from "react";
import styles from "./Button.module.css"

function Button(props){

	function handleClick(event){
        switch (event.target.textContent) {
			case "Show all list":
				props.showAllUser();
				break;
			case "Add new user":
				props.collectInfo();
				break;
			case "Cancel":
				props.canceled();
				break;
			default:
				break;
		}
	}

	return (
		<div className="button">
	<button className={styles.button} onClick = {handleClick}>{props.value}</button>
		</div>
	  );
}

export default Button;