// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: '',
    firstNameClass: '',
    lastName: '',
    lastNameClass: '',
  }

  onFirstName = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({firstName: 'Joe', firstNameClass: 'name-container'})
    } else {
      this.setState({firstName: '', firstNameClass: ''})
    }
  }

  onLastName = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({lastName: 'Jonas', lastNameClass: 'name-container'})
    } else {
      this.setState({lastName: '', lastNameClass: ''})
    }
  }

  render() {
    const {firstName, firstNameClass, lastName, lastNameClass} = this.state

    return (
      <div className="container">
        <div>
          <h1>Show/Hide</h1>
          <div className="button-container">
            <div>
              <button
                className="button"
                onClick={this.onFirstName}
                type="button"
              >
                Show/Hide FirstName
              </button>
              <p className={firstNameClass}>{firstName}</p>
            </div>
            <div>
              <button
                className="button"
                onClick={this.onLastName}
                type="button"
              >
                Show/Hide LastName
              </button>
              <p className={lastNameClass}>{lastName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
