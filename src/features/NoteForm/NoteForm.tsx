import {ChangeEvent, FC, FormEvent, useEffect, useMemo, useRef, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {addNote, editNote, makeSelectNoteById} from "../Note/NoteSlice";
import classes from './NoteForm.module.css';
import {hideForm} from "./NoteFormSlice";

const NoteForm: FC<{ id: string }> = ({id}) => {
    const initialState = useMemo(() => {
        return {name: "", content: "", category: "Task"}
    }, []);
    const dispatch = useAppDispatch();

    const [note, setNote] = useState(initialState);
    const formRef = useRef<HTMLFormElement>(null);

    const selectNoteById = useMemo(makeSelectNoteById, []);
    const notes = useAppSelector((state) => selectNoteById(state, id));

    useEffect(() => setNote(notes[0] ?? initialState), [notes, initialState])

    function handleCategoryChange(evt: ChangeEvent<HTMLSelectElement>) {
        setNote(prevState => {
            return {...prevState, category: evt.target.value}
        })
    }

    function onSave(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        const newName = formRef.current!.nameInput.value;
        const newCategory = formRef.current!.categoryInput.value;
        const newContent = formRef.current!.contentInput.value;
        if (id !== "") dispatch(editNote({name: newName, category: newCategory, content: newContent, id: id}));
        else dispatch(addNote({name: newName, category: newCategory, content: newContent}))
        window.alert("Saved !");
        dispatch(hideForm());
    }

    return <form className={classes.form} id={"noteInput"} onSubmit={onSave} ref={formRef}>
        <label htmlFor="nameInput">Name</label>
        <input id="nameInput" defaultValue={note.name}/>
        <label htmlFor="categoryInput">Category</label>
        <select id="categoryInput" value={note.category} onChange={handleCategoryChange}>
            <option value="Task">Task</option>
            <option value="Quote">Quote</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
        </select>
        <label htmlFor="contentInput">Content</label>
        <textarea id="contentInput" defaultValue={note.content}/>
        <button>Save</button>
    </form>
}

export default NoteForm