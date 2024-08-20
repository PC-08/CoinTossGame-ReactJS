// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    tossRes: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossClick = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const {total, heads, tails} = this.state
    if (tossResult === 0) {
      this.setState({
        total: total + 1,
        heads: heads + 1,
        tossRes: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState({
        total: total + 1,
        tails: tails + 1,
        tossRes: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {tossRes, total, heads, tails} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div className="coin-c">
            <img className="coin" alt="toss result" src={tossRes} />
          </div>
          <button onClick={this.onTossClick} className="btn" type="button">
            Toss Coin
          </button>
          <div className="result-container">
            <p className="res">Total: {total}</p>
            <p className="res">Heads: {heads}</p>
            <p className="res">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
