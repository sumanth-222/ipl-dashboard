import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {teamBanner: '', latest: {}, recentMatch: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const data = await response.json()
    const formattedData = {
      teamUrl: data.team_banner_url,
      latestM: data.latest_match_details,
      recentM: data.recent_matches,
    }

    const teamBannerUrl = formattedData.teamUrl
    const latestMatch = formattedData.latestM
    const updatedLatestMatch = {
      umpires: latestMatch.umpires,
      result: latestMatch.result,
      manOfTheMatch: latestMatch.man_of_the_match,
      id: latestMatch.id,
      date: latestMatch.date,
      venue: latestMatch.venue,
      competingTeam: latestMatch.competing_team,
      competingTeamLogo: latestMatch.competing_team_logo,
      firstInnings: latestMatch.first_innings,
      secondInnings: latestMatch.second_innings,
    }
    const recentMatches = formattedData.recentM
    const updateRecentMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
    }))
    console.log(updateRecentMatches)
    this.setState({
      teamBanner: teamBannerUrl,
      latest: updatedLatestMatch,
      recentMatch: updateRecentMatches,
      isLoading: false,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {teamBanner, latest, recentMatch, isLoading} = this.state
    const fontStyle = `teamMatches-container ${this.getRouteClassName()}`
    console.log(fontStyle)
    return (
      <div className={fontStyle}>
        <img src={teamBanner} alt="team banner" className="team-banner-image" />
        {isLoading ? (
          <Loader type="TailSpin" testid="loader" />
        ) : (
          <LatestMatch updatedLatestMatch={latest} key={latest.id} />
        )}
        <ul className="ul-container">
          {recentMatch.map(each => (
            <MatchCard recentMatch={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
