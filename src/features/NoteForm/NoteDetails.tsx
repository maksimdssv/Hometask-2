import {FC, useMemo} from "react";
import {useAppSelector} from "../../app/hooks";
import {makeSelectNoteById} from "../Note/NoteSlice";
import {checkDates} from "../../lib/helpers";
import classes from './NoteDetails.module.css';

const NoteDetails: FC<{ id: string }> = ({id}) => {
    const selectNoteById = useMemo(makeSelectNoteById, []);
    const notes = useAppSelector((state) => selectNoteById(state, id));
    const note = notes[0];

    if (notes.length === 0) {
        return <></>
    }

    const dates = checkDates(note.content);


    return <section className={classes.details} id={"details"}>
        <h2>Name</h2>
        <p>{note.name}</p>
        <h2>Date of Creation</h2>
        <p>{note.creationDate}</p>
        <h2>Category</h2>
        <p>{note.category}</p>
        <h2>Content</h2>
        <p>{note.content}</p>
        {dates && <>
            <h2>Dates</h2>
            <p>{dates}</p>
        </>}
    </section>
}

export default NoteDetails;