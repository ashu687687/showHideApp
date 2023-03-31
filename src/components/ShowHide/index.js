// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}
  showFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }
  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="btn-con">
            <button
              type="button"
              className="showFirst"
              onClick={this.showFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="name">Joe</p>}
            <button
              type="button"
              className="showFirst"
              onClick={this.showLastName}
            >
              Show/Hide LastName
            </button>
            {showFirstName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
