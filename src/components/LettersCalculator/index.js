import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputPhrase: '',
  }

  onChangeInputPhrase = event => {
    const {value} = event.target
    console.log(value)
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="app-container">
        <div className="letter-container">
          <div className="calculator-container">
            <h1 className="heading">
              Calculate the <br /> Letters you <br />
              enter
            </h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <input
                className="letters-input"
                type="text"
                id="phraseText"
                placeholder="Enter the phrase"
                onChange={this.onChangeInputPhrase}
              />
            </div>
            <div className="letters-container">
              <p className="letters-count">
                No.of letters: {inputPhrase.length}
              </p>
            </div>
          </div>
          <img
            alt="letters calculator"
            className="letters-calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
