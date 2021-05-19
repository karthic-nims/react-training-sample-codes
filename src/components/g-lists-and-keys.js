import React from 'react'
import axios from 'axios'

function StudentsList(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        Student Name
                    </th>
                    <th>
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    )
}

export default class ReactTrainingApp extends React.Component {

    render() {
        return (
            <div>
               <StudentsList/>
            </div>
        )
    }
}