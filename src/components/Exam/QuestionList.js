import React from 'react';
import Question from './Question'



export default class QuestionList extends React.Component {
   constructor() {
      super();
    }
  render() {
    // console.log(this.props.data);

   var questionNode = this.props.data.map(function(question, index) {
    return (
            <Question id={question.id} description={question.description} key={index} first_choice={question.first_choice} second_choice={question.second_choice} third_choice={question.third_choice} fourth_choice={question.fourth_choice}>
            </Question>
            );
  });
  return (
           <div className="QuestionList">
           {questionNode}
           </div>
           );
 }
}

