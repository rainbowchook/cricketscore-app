import { useState } from 'react'
import Button from '../Button/Button'
import Scoreboard from '../Scoreboard'

function App() {
  const [scoreboards, setScoreboards] = useState([])

  const addScoreboard = () => {
    setScoreboards((prev) => [...prev, <Scoreboard />])
  }
  return (
    <div>
      <div className="m-auto w-500">
        <h1 className="mb-4 text-3xl font-bold underline">
          Cricket Scoreboard
        </h1>
        <Button onClick={addScoreboard}>Add new scoreboard</Button>
      </div>
      {!scoreboards.length ? (
        <div>Loading</div>
      ) : (
        scoreboards &&
        scoreboards.length &&
        scoreboards.map(({ team1, team2 }, i) => (
          <Scoreboard key={i} team1={team1} team2={team2} />
        ))
      )}
    </div>
  )
}

export default App
