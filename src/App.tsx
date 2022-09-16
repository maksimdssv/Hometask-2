import React, {useState} from 'react';
import './App.css';
import NotesTable from "./features/NotesTable";
import SummaryTable from "./features/SummaryTable/SummaryTable";
import {scrollToElement} from "./lib/helpers";
import NoteFormContainer from "./features/NoteForm/NoteFormContainer";

function App() {
    const [showArchivedNotes, setShowArchivedNotes] = useState(false);

    async function toggleNotes() {
        await setShowArchivedNotes((e) => !e);
        scrollToElement("#scrollTable");
    }

    return (
        <main className={"body"}>
            <NotesTable/>
            <NoteFormContainer/>
            <SummaryTable/>
            <button onClick={toggleNotes}>Show Archived Notes</button>
            {showArchivedNotes && <NotesTable id={"scrollTable"} showArchivedNotes={true}/>}
        </main>
    );
}

export default App;
