import React from 'react';
import QuestionBox from '../components/Exam/QuestionBox'
import questions from '../data/questions.json'
import lectoratest from '../data/lectoratest.json'


export default class Exam extends React.Component {
  render() {
    // console.log(lectoratest);
    return (
         <QuestionBox data={lectoratest} />
    );
  }
}
