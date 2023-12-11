import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const dataList = data.teams
    const updatedData = await dataList.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <div className="main-dashboard-container">
        <div className="logo-and-heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="ul-container">
          {isLoading ? (
            <Loader type="TailSpin" testid="loader" />
          ) : (
            teamCardList.map(eachItem => (
              <TeamCard teamCardList={eachItem} key={eachItem.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
