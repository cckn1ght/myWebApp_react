import React from 'react';
import QuestionBox from '../components/Exam/QuestionBox'
import questions from '../data/questions.json'


export default class Exam extends React.Component {
  render() {
    return (
         <QuestionBox data={questions} />
    );
  }
}
