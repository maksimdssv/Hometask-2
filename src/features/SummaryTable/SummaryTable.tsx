import Table from "../../components/Table";
import {useAppSelector} from "../../app/hooks";
import {getTotalAmount} from "../Note/NoteSlice";
import taskImg from '../../images/cart.png';
import quoteImg from '../../images/quote.png';
import thoughtImg from '../../images/settings.png';
import ideaImg from '../../images/bulb.png';
import SummaryItem from "./SummaryItem";


const SummaryTable = () => {
    const amount = useAppSelector(getTotalAmount);
    const taskActive = amount.taskActive ?? 0;
    const taskArchived = amount.taskArchived ?? 0;
    const thoughtActive = amount.randomThoughtActive ?? 0;
    const thoughtArchived = amount.randomThoughtArchived ?? 0
    const ideaActive = amount.ideaActive ?? 0
    const ideaArchived = amount.ideaArchived ?? 0
    const quoteActive = amount.quoteActive ?? 0
    const quoteArchived = amount.quoteArchived ?? 0
    const wholeSum = taskActive + taskArchived + thoughtActive + thoughtArchived + ideaActive + ideaArchived + quoteActive + quoteArchived;
    if (wholeSum === 0) {
        return <></>
    }

    return <Table headers={["Note Category", "Active", "Archived", ""]}>
        {taskActive + taskArchived > 0 && <SummaryItem imgPath={taskImg} category={"Task"} active={taskActive}
                                                       archived={taskArchived}/>}
        {thoughtActive + thoughtArchived > 0 &&
            <SummaryItem imgPath={thoughtImg} category={"Random Thought"} active={thoughtActive}
                         archived={thoughtArchived}/>}
        {ideaActive + ideaArchived > 0 && <SummaryItem imgPath={ideaImg} category={"Idea"} active={ideaActive}
                                                       archived={ideaArchived}/>}
        {quoteActive + quoteArchived > 0 && <SummaryItem imgPath={quoteImg} category={"Quote"} active={quoteActive}
                                                         archived={quoteArchived}/>}
    </Table>
}

export default SummaryTable;