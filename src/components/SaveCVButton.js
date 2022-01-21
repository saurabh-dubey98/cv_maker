import React from 'react'
import { Link } from 'react-router-dom';

export default function SaveCVButton() {
    return (
        <button className="btn save-btn"><Link to="/display-cv">Save & Print</Link></button>
    )
}
