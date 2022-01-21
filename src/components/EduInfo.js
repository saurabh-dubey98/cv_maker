import { useContext, useReducer } from "react"
import { CvContext } from "../context/CvContext"

function reducer(state, action) {
    switch (action.type) {
        case 'SCHOOL':
            return { ...state, school: action.payload };
        case 'COURSE':
            return { ...state, course: action.payload };
        case 'START':
            return { ...state, start: action.payload };
        case 'END':
            return { ...state, end: action.payload };
        default:
            return state;
    }
}

export default function EduInfo({ remove, id, EduInitialState, setShowEditForm, isEditing, setIsEditing }) {
    const [state, dispatch] = useReducer(reducer, EduInitialState);
    const { eduInfo, setEduInfo } = useContext(CvContext);
    return <section className="edu-info">
        <form onSubmit={e => {
            e.preventDefault();
            if (isEditing) {
                setEduInfo(eduInfo.map(item => {
                    if (item.id.toString() === id) {
                        return { ...item, school: state.school, course: state.course, start: state.start, end: state.end }
                    }
                    return item;
                }))
                setShowEditForm(false);
                setIsEditing(false);
            } else {
                setEduInfo([...eduInfo, { id: id, ...state }]);
                remove(id);
            }

        }}>
            <label htmlFor="school">School name</label>
            <input id="school" required onChange={e => dispatch({ type: 'SCHOOL', payload: e.target.value })} value={state.school} />
            <label htmlFor="course">Course name</label>
            <input id="course" required onChange={e => dispatch({ type: 'COURSE', payload: e.target.value })} value={state.course} />
            <label htmlFor="course-start">From</label>
            <input id="course-start" type="date" required onChange={e => dispatch({ type: 'START', payload: e.target.value })} value={state.start} />
            <label htmlFor="course-end">To</label>
            <input id="course-end" type="date" required onChange={e => dispatch({ type: 'END', payload: e.target.value })} value={state.end} />
            <div className="btn-container">
                <button className="btn" type="submit">Add</button>
                <button className="btn delete" onClick={(e) => { e.preventDefault(); remove(id) }}>Cancel</button>
            </div>
        </form>
    </section >
}