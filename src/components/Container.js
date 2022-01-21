import { useState, useContext } from 'react';
import GeneralInfo from './GeneralInfo';
import EduInfo from './EduInfo';
import WorkInfo from './WorkInfo';
import SaveCVButton from './SaveCVButton';
import AddNewForm from './AddNewForm';
import { GeneralInfoDisplay, EduInfoDisplay, WorkInfoDisplay } from './SubComponents';
import { CvContext } from "../context/CvContext"
import { v4 as uuid } from 'uuid';

let GenInitialState = {
    fName: '',
    lName: '',
    email: '',
    phone: ''
}
let EduInitialState = {
    school: '',
    course: '',
    start: '',
    end: ''
}

const WorkInitialState = {
    company: '',
    position: '',
    start: '',
    end: ''
}

export default function Container() {
    const [added, setAdded] = useState(false);
    const [eduForms, setEduforms] = useState([]);
    const [workForms, setWorkforms] = useState([]);
    const { generalInfo, eduInfo, workInfo, setEduInfo, setWorkInfo } = useContext(CvContext);

    function removeEduForm(id) {
        setEduforms(eduForms.filter((el) => id !== el.id))
    }

    function removeWorkForms(id) {
        setWorkforms(workForms.filter(el => id !== el.id))
    }

    function deleteEduData(id) {
        setEduInfo(eduInfo.filter(el => el.id !== id))
    }

    function deleteWorkData(id) {
        setWorkInfo(workInfo.filter(el => el.id !== id))
    }

    function editForm(id, type) {
        if (type === 'general') {
            const item = generalInfo[0];
            GenInitialState = { ...item }
            setAdded(false);
        }
    }
    return <main>
        <header>
            <h1>CV <span>Maker</span></h1>
            <div className="main-content-container">
                <h3 className="heading">General <span>Info</span>:</h3>
                {added ? <GeneralInfoDisplay data={generalInfo} editForm={editForm} /> : <GeneralInfo added={setAdded} GenInitialState={GenInitialState} />}

                <h3 className="heading">Education <span>Info</span>:</h3>
                {eduInfo.map(data => <EduInfoDisplay data={data} key={uuid()} removeEduForm={removeEduForm} deleteData={deleteEduData} />)}
                {eduForms.map((el) => <EduInfo key={el.id} id={el.id} remove={removeEduForm} EduInitialState={EduInitialState} />)}
                <AddNewForm onClick={() => setEduforms([...eduForms, { id: uuid() }])} />

                <h3 className="heading">Work <span>Experience</span>:</h3>
                {workInfo.map(data => <WorkInfoDisplay data={data} key={uuid()} removeWorkForms={removeWorkForms} deleteData={deleteWorkData} />)}
                {workForms.map((el) => <WorkInfo key={el.id} id={el.id} remove={removeWorkForms} initialState={WorkInitialState} />)}
                <AddNewForm onClick={() => setWorkforms([...workForms, { id: uuid() }])} />

                <SaveCVButton />
            </div>
        </header>
    </main>
}