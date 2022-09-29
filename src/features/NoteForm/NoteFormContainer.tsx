import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {showForm} from "./NoteFormSlice";
import NoteDetails from "./NoteDetails";
import NoteForm from "./NoteForm";

const NoteFormContainer = () => {
    const {formIsShown, detailsAreShown, id, savedIsShown} = useAppSelector((state) => state.form);
    const dispatch = useAppDispatch()

    function showFormOnCLick() {
        dispatch(showForm({}));
    }

    return <>
        <button className="mb-[15px]" onClick={showFormOnCLick}>Create Note</button>
        {formIsShown && !savedIsShown && <NoteForm id={id}/>}
        {savedIsShown && !formIsShown && <h1 className='font-bold text-2xl'>Saved !</h1>}
        {detailsAreShown && !savedIsShown && <NoteDetails id={id}/>}
    </>
}

export default NoteFormContainer;