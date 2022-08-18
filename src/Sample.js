import React, { Component } from 'react';

const cardStyle={
    border:'1px solid black',
    padding:10,
    margin:30
}
function Card(props){
    return <div style={cardStyle}>
        <span>2022년 8월 16일</span>
        <hr />
        <span>{props.author}</span>
        {props.children}
    </div>
}
class Sample extends Component {

    render() {
        const elements=[]
        for(let index=1;index<10;index++){
            elements.push(
                <Card author="NoName">
                <h1>Lorem ipsum</h1>
                <p>Built like a spreadsheet, project tables give you a live canvas to filter, sort, and group issues and pull requests. Tailor them to your needs with custom fields and saved views.</p>
                </Card>    
            )
            const element = <div>{elements}</div>
        }
        return (
            <div>
                {elements}
            </div>
        );
    }
}

export default Sample;