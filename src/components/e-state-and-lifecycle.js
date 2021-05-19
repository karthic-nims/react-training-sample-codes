import React from 'react'

function SectionHeaderComonent(props) {
    return (
        <b>{props.course}</b>
    )
}

export default class ReactTrainingApp extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            username: 'Inapp',
            course: 'ReactJs',
            students: [
                1,2,3,4,5
            ],
            visibility: true
        }
        this.updateStateValue = this.updateStateValue.bind(this)
        this.toggleLabel = this.toggleLabel.bind(this)
    }

    componentDidMount() {  //Do actions when mounting the component
        console.log('This is the start method'); //call the API
    }

    componentWillUnmount() {
        //
    }

    updateStateValue() {
        this.setState({
            username: 'Inapp2.0',
            course: 'Angular'
        })
    }

    toggleLabel() {
        this.setState({
            visibility: false
        })
    }

    render() {
        return (
            <div>
                The state value is {this.state.username}
                <br/>
                The course is {this.state.course}
                <br/>
                <button type="button" onClick={this.updateStateValue}>Update State value</button>
                <SectionHeaderComonent course={this.state.course}/>
                <hr/>
                {this.state.students.map(student => {
                    return (
                        <li key={student}>{student}</li>
                    )
                })}
                <hr/>
                <button type="button" onClick={this.toggleLabel}>Toggle</button>
                <hr/>
                {
                    this.state.visibility === true && <button>Hi</button>
                }
            </div>
        )
    }
}