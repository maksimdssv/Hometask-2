import {FC, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {checkDates, getImgPath, scrollToElement} from "../../lib/helpers";
import ImgButton from "../../components/ImgButton";
import editImg from "../../images/pencil.png";
import infoImg from '../../images/info.png';
import archiveImg from '../../images/archive.png';
import deleteImg from '../../images/delete.png';
import {showDetails, showForm} from "../NoteForm/NoteFormSlice";
import {archiveNote, makeSelectNoteById, removeNote} from "./NoteSlice";

const Note: FC<{ id: string }> = (props) => {
    const selectNoteById = useMemo(makeSelectNoteById, []);
    const dispatch = useAppDispatch();
    const [{name, creationDate, category, content}] = useAppSelector((state) => selectNoteById(state, props.id));

    const dates = checkDates(content);
    const img = getImgPath(category);


    async function showNoteDetailsOnClick() {
        await dispatch(showDetails({id: props.id}));
        scrollToElement("#details");
    }

    function removeNoteOnClick() {
        if (window.confirm("Are you sure ?")) {
            dispatch(removeNote({id: props.id}));
        }
    }

    function archiveNoteOnClick() {
        dispatch(archiveNote({id: props.id}));
    }

    async function showNoteFormOnClick() {
        await dispatch(showForm({id: props.id}));
        scrollToElement("#noteInput");
    }


    return <tr className="bg-[powderblue] text-[gray] text-[20px]">
        <td>
            <div className="flex items-center text-black">
                <img className="w-[30px] p-[8px] box-content mr-[20px] rounded-[10px] bg-[dimgray]" src={img}
                     alt={category}/>
                {name}
            </div>
        </td>
        <td>{creationDate}</td>
        <td className="whitespace-normal">{category}</td>
        <td>{content}</td>
        <td className="whitespace-normal">{dates}</td>
        <td className="text-right overflow-visible">
            <ImgButton imgPath={infoImg} alt={"info"} onClick={showNoteDetailsOnClick}/>
            <ImgButton imgPath={editImg} alt={"pencil"} onClick={showNoteFormOnClick}/>
            <ImgButton imgPath={archiveImg} alt={"archive"} onClick={archiveNoteOnClick}/>
            <ImgButton imgPath={deleteImg} alt={"delete"} onClick={removeNoteOnClick}/>
        </td>
    </tr>
}

export default Note;