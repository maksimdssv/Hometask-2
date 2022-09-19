import Table from "../../components/Table";
import {useAppSelector} from "../../app/hooks";
import {getTotalAmount} from "../Note/NoteSlice";
import SummaryItem from "./SummaryItem";
import {getImgPath} from "../../lib/helpers";


const SummaryTable = () => {
    const amount = useAppSelector(getTotalAmount);


    function getSummaryItems(summaryAmount: { [key: string]: { active: number, archived: number } }) {
        let summaryItems = [];
        for (const category in summaryAmount) {
            const newItem = <SummaryItem imgPath={getImgPath(category)} category={category}
                                         active={summaryAmount[category]["active"]}
                                         archived={summaryAmount[category]["archived"]}/>
            summaryItems.push(newItem);
        }
        return summaryItems;
    }

    return <Table headers={["Note Category", "Active", "Archived", ""]}>
        {getSummaryItems(amount)}
    </Table>
}

export default SummaryTable;