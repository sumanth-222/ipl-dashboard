import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardList} = props
  const {id, name, teamImageUrl} = teamCardList
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamcard-container">
        <img src={teamImageUrl} className="team-logo" alt={name} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
