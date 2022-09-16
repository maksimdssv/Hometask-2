import Note from "./Note/Note";
import Table from "../components/Table";
import React, {FC} from "react";
import {useAppSelector} from "../app/hooks";
import {selectArchivedNotesIds, selectNotesIds} from "./Note/NoteSlice";


const NotesTable: FC<{ showArchivedNotes?: boolean, id?: string }> = ({showArchivedNotes, id}) => {
    let selectorFunc;

    if (showArchivedNotes) {
        selectorFunc = selectArchivedNotesIds;
    } else {
        selectorFunc = selectNotesIds;
    }
    const notesIds = useAppSelector(selectorFunc);

    return <Table id={id} headers={["Name", "Created", "Category", "Content", "Dates", ""]}>
        {notesIds.map((id) => <Note key={id} id={id}/>)}
    </Table>
}

export default NotesTable;