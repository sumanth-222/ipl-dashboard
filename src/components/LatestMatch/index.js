import './index.css'

const LatestMatch = props => {
  const {updatedLatestMatch} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedLatestMatch
  return (
    <li className="latest-match-container">
      <div className="first-row">
        <p className="competing-team">{competingTeam}</p>
        <p className="venue">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="image"
      />
      <div className="third-row">
        <p className="first-innings">First Innings </p>
        <p className="venue two">{firstInnings}</p>
        <p className="first-innings">Second Innings </p>
        <p className="venue two">{secondInnings}</p>
        <p className="first-innings">Man of The Match </p>
        <p className="venue two">{manOfTheMatch}</p>
        <p className="first-innings">Umpires</p>
        <p className="venue two">{umpires}</p>
      </div>
    </li>
  )
}
export default LatestMatch
