import React, { Component } from 'react'
import { getRandomColor } from '../Helper/utils'
import { Button, Card } from 'antd'

class Final extends Component {
  isWinning() {
    const { tickets, winningNumber } = this.props

    for (const ticket of tickets) {
      if (ticket.number === winningNumber) {
        return true
      }
    }
    return false
  }

  renderResetButton() {
    return (
      <>
        <Button block onClick={this.props.actions.reset}><b>Играй отново</b></Button>
      </>
    )
  }

  renderWinning() {
    return (
      <>
        <h2>ЧЕСТИТО!!!</h2>
        <h3>Ти спечели страхотна награда - усмивка по радиото :)</h3>
        <p>Твоето печелившо число беше: <b>{this.props.winningNumber}</b></p>
      </>
    )
  }

  renderTryAgain() {
    return (
      <>
        <h2>Опитай пак!</h2>
        <p>Печелившо число беше: <b>{this.props.winningNumber}</b></p>
      </>
    )
  }

  render() {
    return (
      <Card style={{ backgroundColor: getRandomColor() }}
        title={this.isWinning() ? this.renderWinning() : this.renderTryAgain()}
      >
        {this.renderResetButton()}
      </Card>
    )
  }
}

export default Final