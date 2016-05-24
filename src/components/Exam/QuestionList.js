import React from 'react';
import Question from './Question'
import $ from 'jquery';


export default class QuestionList extends React.Component {
   constructor() {
      super();

    }
  render() {
    //extract questions
    var sections = this.props.data["lectoratest"]["section"];

    var questions = []
    sections.map(function(section, index) {
      for(var i = 0; i < section.page.length; i++){
        var page = section.page[i];
        questions.push(page.question);
      }
      return;
    })
    var questionNode = questions.map(function(question, index) {
      // console.log(question.type);
      // var node;
      // switch(question.type) {
      //   case '1':
      //     node = (<TFQuestion data={question} key={question.id}>
      //             </TFQuestion>);
      //     break;
      //   case '2':
      //     node = (<ChoiceQuestion data={question} key={question.id} >
      //             </ChoiceQuestion>)
      //     break;
      // }
      return (<Question id={question.id} text={question.text} choices={question.choices} key={question.id} >
      //             </Question>);
    })
    // console.log(questionNode);

  return (
           <div className="QuestionList">
           {questionNode}
           </div>
           );
 }
}

