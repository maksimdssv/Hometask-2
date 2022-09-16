import {FC} from "react";
import classes from "../Note/Note.module.css";

const SummaryItem: FC<{ imgPath: string, category: string, active: number, archived: number }> = props => {
    return <tr className={classes.note}>
        <td><img src={props.imgPath} className={classes.image} alt={props.category}/>{props.category}</td>
        <td>{props.active}</td>
        <td>{props.archived}</td>
        <td></td>
    </tr>
}

export default SummaryItem;