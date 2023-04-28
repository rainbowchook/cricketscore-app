import { Component } from 'react'
import Button from '../Button/Button'

export default class TeamScore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      runs: 0,
      wickets: 0,
    }
    // this.addRuns = this.addRuns.bind(this)
    // this.addWickets = this.addWickets.bind(this)
    // this.setText = this.setText.bind(this)
  }
  // state = {name: 'Default Team', runs: 0, wickets: 0}

  addRuns(runs) {
    console.log("add run")
    this.setState((state) => ({runs: this.state.runs + runs}))
    console.log('end of addRuns')
  }

  addWickets(wickets) {
    console.log("add wicket")
    this.setState({wickets: this.state.wickets + wickets})
  }

  setText(e) {
    console.log("team name " + e.target.value)
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div className='bg-white dark:bg-slate-800 dark:text-white ml-2 rounded-lg px-6 py-8 my-3 ring-1 ring-slate-900/5 shadow-xl flex flex-col'>
        <div>
          <p className='font-bold text-2xl'>{this.state.name} <label className={`mx-4 px-4 text-sm text-center text-white bg-orange-600 rounded-lg ${this.state.wickets >=10 ? 'visible' : 'invisible'}`}>All Out!</label></p>
          <button></button>


        </div>
        <p>Runs: <span className='text-7xl font-bold text-green-600'>{this.state.runs}</span> Wickets: <span className='text-7xl font-bold text-amber-600'>{this.state.wickets}</span></p>
        {/* <input className='dark:text-black' type="text" onChange={(e) => this.setText(e)} placeholder="Enter team name"></input> */}
        <div className={this.state.wickets >= 10 ? 'collapse' : 'visible'}>
          <Button onClick={() => this.addRuns(1)}>Add 1 run</Button>
          <Button onClick={() => this.addRuns(4)}>Add 4 runs</Button>
          <Button onClick={() => this.addWickets(1)}>Add 1 wicket</Button>
        </div>
      </div>
    )
  }
}
