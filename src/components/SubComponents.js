import { useState, useContext } from 'react';
import { CvContext } from "../context/CvContext"
import EduInfo from './EduInfo';
import WorkInfo from './WorkInfo';

export function GeneralInfoDisplay({ data, editForm }) {
    const { fName, lName, email, phone } = data[0];
    return <article>
        <div><h4>Name: </h4><p>{fName} {lName}</p></div>
        <div><h4>Email: </h4><p>{email}</p></div>
        <div><h4>Phone: </h4><p>{phone}</p></div>
        <div className="edit-del-button">
            <button className="edit-btn" onClick={() => editForm('', 'general')}><i className="fas fa-edit"></i></button>
            <button className="del-btn"><i className="far fa-trash-alt"></i></button>
        </div>

    </article>
}

export function EduInfoDisplay({ data, removeEduForm, deleteData }) {
    const [showEditForm, setShowEditForm] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editingData, setEditingData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const { eduInfo } = useContext(CvContext);
    const { school, course, start, end } = data;

    function editEducation(id) {
        const item = eduInfo.find((i) => i.id === id);
        setEditingData({ ...item });
        setEditId(id);
        setIsEditing(true);
        setShowEditForm(true);
    }

    if (showEditForm) {
        return <EduInfo EduInitialState={editingData} id={editId} setShowEditForm={setShowEditForm} isEditing={isEditing} setIsEditing={setIsEditing} remove={removeEduForm} />
    }

    return <article>
        <div><h4>School: </h4><p>{school}</p></div>
        <div><h4>Course: </h4><p>{course}</p></div>
        <div><h4>From: </h4><p>{start}</p></div>
        <div><h4>To: </h4><p>{end}</p></div>
        <div className="edit-del-button">
            <button className="edit-btn" onClick={() => editEducation(data.id)}><i className="fas fa-edit"></i></button>
            <button className="del-btn" onClick={() => deleteData(data.id)}><i className="far fa-trash-alt"></i></button>
        </div>

    </article >
}


export function WorkInfoDisplay({ data, removeWorkForms, deleteData }) {
    const [showEditForm, setShowEditForm] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editingData, setEditingData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const { workInfo } = useContext(CvContext);
    const { company, position, start, end } = data;

    function editWorkForm(id) {
        const item = workInfo.find((i) => i.id === id);
        setEditingData({ ...item });
        setEditId(id);
        setIsEditing(true);
        setShowEditForm(true);
    }

    if (showEditForm) {
        return <WorkInfo initialState={editingData} id={editId} setShowEditForm={setShowEditForm} isEditing={isEditing} setIsEditing={setIsEditing} remove={removeWorkForms} />
    }

    return <article>
        <div><h4>Company: </h4><p>{company}</p></div>
        <div><h4>Position: </h4><p>{position}</p></div>
        <div><h4>From: </h4><p>{start}</p></div>
        <div><h4>To: </h4><p>{end}</p></div>
        <div className="edit-del-button">
            <button className="edit-btn" onClick={() => editWorkForm(data.id)}><i className="fas fa-edit"></i></button>
            <button className="del-btn" onClick={() => deleteData(data.id)}><i className="far fa-trash-alt"></i></button>
        </div>

    </article>
}