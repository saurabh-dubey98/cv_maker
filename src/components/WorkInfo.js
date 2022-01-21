import { useContext, useReducer } from "react"
import { CvContext } from "../context/CvContext"

function reducer(state, action) {
    switch (action.type) {
        case 'COMPANY':
            return { ...state, company: action.payload };
        case 'POSITION':
            return { ...state, position: action.payload };
        case 'START':
            return { ...state, start: action.payload };
        case 'END':
            return { ...state, end: action.payload };
        default:
            return state;
    }
}

export default function EduInfo({ remove, id, isEditing, setIsEditing, setShowEditForm, initialState }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { workInfo, setWorkInfo } = useContext(CvContext);
    return <section className="work-info">
        <form onSubmit={(e) => {
            e.preventDefault();
            if (isEditing) {
                setWorkInfo(workInfo.map(item => {
                    if (item.id.toString() === id) {
                        return { ...item, company: state.company, position: state.position, start: state.start, end: state.end }
                    }
                    return item;
                }))
                setIsEditing(false);
                setShowEditForm(false)
            } else {
                setWorkInfo([...workInfo, { id: id, ...state }])
                remove(id);
            }
        }}>
            <label htmlFor="company">Company Name</label>
            <input id="company" required onChange={e => dispatch({ type: 'COMPANY', payload: e.target.value })} value={state.company} />
            <label htmlFor="position">Your Position Title</label>
            <input id="position" required onChange={e => dispatch({ type: 'POSITION', payload: e.target.value })} value={state.position} />
            <label htmlFor="join-date">From</label>
            <input id="join-date" type="date" required onChange={e => dispatch({ type: 'START', payload: e.target.value })} value={state.start} />
            <label htmlFor="leave-date">To</label>
            <input id="leave-date" type="date" required onChange={e => dispatch({ type: 'END', payload: e.target.value })} value={state.end} />
            <div className="btn-container">
                <button className="btn" type="submit">Add</button>
                <button className="btn delete" onClick={(e) => { e.preventDefault(); remove(id) }}>Cancel</button>
            </div>
        </form>
    </section>
}