import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatch
  return (
    <li className="matchCard-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="text">{competingTeam}</p>
      <p className="text">{result}</p>
      <p className="text">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
