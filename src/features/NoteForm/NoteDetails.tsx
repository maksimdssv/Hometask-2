import {FC, useMemo} from "react";
import {useAppSelector} from "../../app/hooks";
import {makeSelectNoteById} from "../Note/NoteSlice";
import {checkDates} from "../../lib/helpers";

const NoteDetails: FC<{ id: string }> = ({id}) => {
    const selectNoteById = useMemo(makeSelectNoteById, []);
    const notes = useAppSelector((state) => selectNoteById(state, id));
    const note = notes[0];

    if (notes.length === 0) {
        return <></>
    }

    const dates = checkDates(note.content);


    return <section className="flex flex-col gap-[10px] w-[30%] bg-[lightsteelblue] p-[20px] box-content"
                    id={"details"}>
        <h2 className='font-bold text-2xl'>Name</h2>
        <p>{note.name}</p>
        <h2 className='font-bold text-2xl'>Date of Creation</h2>
        <p>{note.creationDate}</p>
        <h2 className='font-bold text-2xl'>Category</h2>
        <p>{note.category}</p>
        <h2 className='font-bold text-2xl'>Content</h2>
        <p>{note.content}</p>
        {dates && <>
            <h2 className='font-bold text-2xl'>Dates</h2>
            <p>{dates}</p>
        </>}
    </section>
}

export default NoteDetails;