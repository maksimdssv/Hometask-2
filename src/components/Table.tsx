import {FC, ReactNode} from "react";
import classes from './Table.module.css';


const Table: FC<{ headers: string[], children?: ReactNode, id?: string }> = (props) => {
    return <table id={props.id}>
        <thead>
        <tr className={classes.header}>
            {props.headers.map((header) => <th key={header}>{header}</th>)}
        </tr>
        </thead>
        <tbody>
        {props.children}
        </tbody>
    </table>
}

export default Table;