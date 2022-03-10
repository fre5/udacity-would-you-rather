import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomeCard = (props) => {
  const navigate = useNavigate()

  const handleClick = (event) => {
    if (props.authedUser) {
      navigate(`/questions/${props.index}`)
    } else {
      navigate('/login')
    }
  }
  return (
    <>
      <Card className="home-card">
      <Card.Header>
        <Card.Title>
          {props.name}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <img src={props.avatar} className="avatar" alt="avatar" />
        <div className="home-poll-question">
          <h6>Would you rather</h6>
          <div style={{ height: 20 }} />
          {`...${props.question}`}
          <div style={{ height: 20 }} />
          <Button variant="outline-primary" style={{ width: '100%' }} onClick={handleClick}>View Poll</Button>
        </div>
      </Card.Body>
      </Card>
    </>
  )
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default connect (mapStateToProps)(HomeCard)