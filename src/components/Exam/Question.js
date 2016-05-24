import React from 'react';


export default class Question extends React.Component {

  render() {
    var id = this.props.id;
    // var question = this.props.data;
    var choices = this.props.choices.split("|");
    var text = this.props.text;

    var choiceNode = choices.map(function(choice, index) {
      // console.log(choice);
      return (
              <li class="list-group-item" key={index}>
                <input type="radio" name="choices" value={choice} /> {choice}
              </li>
              )
    })
    // console.log(choiceNode);
    return (
             <div className="question">
              <h3 className="questionText">
              {id+'. '+ text}
              </h3>
                <ul class="list-group">
                  <form>
                  {choiceNode}
                  </form>
                </ul>


            </div>)
  }
}
