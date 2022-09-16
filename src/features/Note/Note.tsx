import {FC, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import classes from './Note.module.css'
import {checkDates, scrollToElement} from "../../lib/helpers";
import ImgButton from "../../components/ImgButton";
import editImg from "../../images/pencil.png";
import infoImg from '../../images/info.png';
import archiveImg from '../../images/archive.png';
import deleteImg from '../../images/delete.png';
import taskImg from '../../images/cart.png';
import quoteImg from '../../images/quote.png';
import thoughtImg from '../../images/settings.png';
import ideaImg from '../../images/bulb.png';
import {showDetails, showForm} from "../NoteForm/NoteFormSlice";
import {archiveNote, makeSelectNoteById, removeNote} from "./NoteSlice";

const Note: FC<{ id: string }> = (props) => {
    const selectNoteById = useMemo(makeSelectNoteById, []);
    const dispatch = useAppDispatch();
    const [{name, creationDate, category, content}] = useAppSelector((state) => selectNoteById(state, props.id));

    const dates = checkDates(content);
    let img = "";

    switch (category) {
        case "Task":
            img = taskImg;
            break;
        case "Idea":
            img = ideaImg;
            break;
        case "Quote":
            img = quoteImg;
            break;
        case "Random Thought":
            img = thoughtImg;
            break;
    }

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


    return <tr className={classes.note}>
        <td><img className={classes.image} src={img} alt={category}/>{name}</td>
        <td>{creationDate}</td>
        <td>{category}</td>
        <td>{content}</td>
        <td>{dates}</td>
        <td>
            <ImgButton imgPath={infoImg} alt={"info"} onClick={showNoteDetailsOnClick}/>
            <ImgButton imgPath={editImg} alt={"pencil"} onClick={showNoteFormOnClick}/>
            <ImgButton imgPath={archiveImg} alt={"archive"} onClick={archiveNoteOnClick}/>
            <ImgButton imgPath={deleteImg} alt={"delete"} onClick={removeNoteOnClick}/>
        </td>
    </tr>
}

export default Note;