import {FC} from "react";

const SummaryItem: FC<{ imgPath: string, category: string, active: number, archived: number }> = props => {
    return <tr className="bg-[powderblue] text-[gray] text-[20px]">
        <td>
            <div className="flex justify-start items-center text-black">
                <img src={props.imgPath} className="w-[30px] p-[8px] box-content mr-[20px] rounded-[10px] bg-[dimgray]"
                     alt={props.category}/>
                {props.category}
            </div>
        </td>
        <td>{props.active}</td>
        <td>{props.archived}</td>
        <td></td>
    </tr>
}

export default SummaryItem;