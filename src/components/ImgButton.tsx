import {FC} from "react";
import classes from './ImgButton.module.css';

const ImgButton: FC<{ imgPath: string, alt: string, onClick: () => void }> = (props) => {
    return <button className={classes.btn} onClick={props.onClick}>
        <img src={props.imgPath} alt={props.alt}/>
    </button>
}

export default ImgButton;