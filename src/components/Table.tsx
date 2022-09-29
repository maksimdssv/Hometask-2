import {FC, ReactNode} from "react";


const Table: FC<{ headers: string[], children?: ReactNode, id?: string }> = (props) => {
    return <table id={props.id}>
        <thead>
        <tr className="bg-[dimgray] text-[azure] font-bold text-[24px]">
            {props.headers.map((header) => <th key={header}>{header}</th>)}
        </tr>
        </thead>
        <tbody className="row">
        {props.children}
        </tbody>
    </table>
}

export default Table;