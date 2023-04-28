import { Component } from 'react'
import Button from '../Button/Button'
import TeamScore from '../TeamScore'

export default class Scoreboard extends Component {
  state = { team1: '', team2: ''}

  getTeamName() {
    let userTeam1 = prompt('Enter name of team 1:')
    let userTeam2 = prompt('Enter name of team 2:')

    this.setState({team1: userTeam1,team2: userTeam2})
  }

  render() {
    return (
      <div className='bg-slate-400 rounded-t-lg min-w-min mx-3'>
        <div className=''>
          <header>Score for {this.state.team1} and {this.state.team2}</header>
        </div>

        {
          (this.state.team1.length === 0 || this.state.team2.length === 0)
            ? (
                <div className='bg-slate-400'>
                  <Button onClick={this.getTeamName.bind(this)}>Click to change team name</Button>
                </div>
            ) : (
              <div className='container mx-auto grid grid-cols-2 gap-2'>
                <TeamScore name={this.state.team1}/>
                <TeamScore name={this.state.team2}/>
              </div>
            )
        }

      </div>


    )
  }
}
