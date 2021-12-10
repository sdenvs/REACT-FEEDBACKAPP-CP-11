// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {raected: true}

  feedbackGiven = () => {
    this.setState({raected: false})
  }

  CreateEmoji = props => {
    const {details} = props
    return (
      <li onClick={this.feedbackGiven} className="emonji">
        <img
          alt={details.name}
          className="emonjiImage"
          src={details.imageUrl}
        />
        <p className="paragraph">{details.name}</p>
      </li>
    )
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {raected} = this.state
    return (
      <div className="bgContainer">
        {raected ? (
          <div className="card card-width">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emonjiCart">
              {emojis.map(eachItem => (
                <this.CreateEmoji key={eachItem.id} details={eachItem} />
              ))}
            </ul>
          </div>
        ) : (
          <div className="card card-width">
            <img alt="love emoji" className="loveimage" src={loveEmojiUrl} />
            <h1 className="heading">Thank You!</h1>
            <p className="paragraph">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
