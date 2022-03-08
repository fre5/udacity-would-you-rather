import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

export default function LeaderBoardCard(props) {
  return (
    <Card className="lb-card">
      <Card.Body>
        <div className="lb-card-ribbon"></div>
        <div className="lb-card-trophy"><FontAwesomeIcon icon={faTrophy} /></div>
        <img src="avatar-placeholder.jpeg" alt="avatar" className="avatar" />
        <div className="lb-card-container">
          <h4>{props.name}</h4>
          <div style={{ height: 30 }} />
          <div className="lb-card-info lb-card-info-line">
            <p className="lb-card-info-question">{props.answered}</p>
            <p className="lb-card-info-number">{props.answered}</p>
          </div>
          <div className="lb-card-info">
            <p className="lb-card-info-question">{props.created}</p>
            <p className="lb-card-info-number">{props.created}</p>
          </div>
        </div>
        <Card className="lb-card-score">
          <Card.Header>
            <Card.Title>Score</Card.Title>
          </Card.Header>
          <Card.Body>
            <div className="lb-score-number">
              <h3>3</h3>
            </div>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  )
}