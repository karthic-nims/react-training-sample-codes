import React from 'react'

class SectionComponent extends React.Component {
    render() {
        return (
            <div>
                Called class component {this.props.username}
            </div>
        )
    }
}

export default class ReactTrainingApp extends React.Component {
    orgName = 'Inapp'
    render() {
        return (
            <div>
                {this.orgName}
                <br/>
                <SectionComponent username={this.orgName}/>
            </div>
        )
    }
}