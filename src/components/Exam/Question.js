import React from 'react';


export default class Question extends React.Component {

  render() {
    return (
             <div className="question">
              <h3 className="questionDescription">
              {this.props.id+'. '+this.props.description}
              </h3>

                <ul class="list-group">
                <form>
                  <li class="list-group-item">
                    <input type="radio" name="choices" value={this.props.first_choice} /> {this.props.first_choice}
                  </li>
                  <li class="list-group-item">
                    <input type="radio" name="choices" value={this.props.second_choice} /> {this.props.second_choice}
                  </li>
                  <li class="list-group-item">
                    <input type="radio" name="choices" value={this.props.third_choice} /> {this.props.third_choice}
                  </li>
                  <li class="list-group-item">
                    <input type="radio" name="choices" value={this.props.fourth_choice} /> {this.props.fourth_choice}
                  </li>
                  </form>
                </ul>

            </div>)
  }
}
