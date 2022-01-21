import { useContext, useReducer } from "react"
import { CvContext } from "../context/CvContext"

function reducer(state, action) {
    switch (action.type) {
        case 'FNAME':
            return { ...state, fName: action.payload };
        case 'LNAME':
            return { ...state, lName: action.payload };
        case 'EMAIL':
            return { ...state, email: action.payload };
        case 'PHONE':
            return { ...state, phone: action.payload };
        default:
            return state;
    }
}

export default function GeneralInfo({ added, GenInitialState }) {

    const [state, dispatch] = useReducer(reducer, GenInitialState);
    const { setGeneralInfo } = useContext(CvContext);

    return <section className="general-info">
        <form onSubmit={(e) => {
            e.preventDefault();
            setGeneralInfo([state]);
            added(true);
        }}>
            <label htmlFor="fname">First name</label>
            <input id="fname" onChange={e => dispatch({ type: 'FNAME', payload: e.target.value })} required value={state.fName} />
            <label htmlFor="lname">Last name</label>
            <input id="lname" onChange={e => dispatch({ type: 'LNAME', payload: e.target.value })} required value={state.lName} />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={e => dispatch({ type: 'EMAIL', payload: e.target.value })} required value={state.email} />
            <label htmlFor="phone">Phone no.</label>
            <input id="phone" onChange={e => dispatch({ type: 'PHONE', payload: e.target.value })} required value={state.phone} />
            <div className="btn-container">
                <button className="btn" type="submit">Add</button>
            </div>
        </form>
    </section>
}