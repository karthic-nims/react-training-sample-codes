function sayHello() {
    return 'Hello'
}

function SectionHeaderComonent(props) {
    return (
        <b>header component</b>
    )
}

function SectionComonent(props) {
    return (
        <div>
            <h1>Hi {props.username}</h1>
            <SectionHeaderComonent/>
        </div>
    )
}

export default function ReactTrainingApp() {
    const orgName = sayHello()
    return (
        <div>
            <SectionComonent username={orgName}/>
            <SectionComonent username="Inapp3.0"/>
            <SectionComonent username="Inapp4.0"/>
        </div>
    )
}