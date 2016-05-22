import React from 'react';
import QuestionList from './QuestionList'


export default class QuestionBox extends React.Component{

  render() {
    return (
      <div className="questionBox">
        <QuestionList data={this.props.data} />
      </div>
    )
  }
};

