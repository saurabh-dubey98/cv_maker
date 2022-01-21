import { Link } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { CvContext } from '../context/CvContext';
import Classes from './DisplayFinalCV.module.css';

export default function DisplayFinalCV() {
    const componentRef = useRef(null);
    const { generalInfo, eduInfo, workInfo } = useContext(CvContext);
    const { fName, lName, email, phone } = generalInfo[0];
    const downloadFile = useReactToPrint({
        content: () => componentRef.current
    })

    return <main className={Classes.mainConatiner}>
        <section className={Classes.btnContainer}>
            <button className={Classes.return}><Link to="/">Go Back</Link></button>
            <button className={Classes.download} onClick={downloadFile}>Download</button>
        </section>
        <section ref={componentRef} className={Classes.cvSection}>
            <h1 className={Classes.h1}>C<span>V</span></h1>
            <div className={Classes.genInfo}>
                <h2>{fName + '  ' + lName}</h2>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
            <div className={Classes.eduInfo}>
                <h3>Academic Information:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>School</th>
                            <th>Course</th>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eduInfo.map((el, index) => (
                            <tr key={index + 10}>
                                <td>{el.school}</td>
                                <td>{el.course}</td>
                                <td>{el.start}</td>
                                <td>{el.end}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className={Classes.workInfo}>
                <h3>Work Experience: </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Position</th>
                            <th>From</th>
                            <th>To</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workInfo.map((el, index) => (
                            <tr key={index}>
                                <td>{el.company}</td>
                                <td>{el.position}</td>
                                <td>{el.start}</td>
                                <td>{el.end}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

    </main>
}