import {useState} from "react";


function buttonVisibility() {

    const [buttonStatus, setButtonStatus] = useState(false);

    setButtonStatus(!buttonStatus);

    console.log(buttonStatus);
}

export default buttonVisibility