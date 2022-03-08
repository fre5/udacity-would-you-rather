import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

export default function LeaderBoardCard() {
  return (
    <Card className="lb-card">
      <Card.Body>
        <div className="lb-card-ribbon"></div>
        <div className="lb-card-trophy"><FontAwesomeIcon icon={faTrophy} /></div>
        <img src="avatar-placeholder.jpeg" alt="avatar" className="avatar" />
        <div className="lb-card-container">
          <h4>Name</h4>
          <div style={{ height: 30 }} />
          <div className="lb-card-info lb-card-info-line">
            <p className="lb-card-info-question">Answered questions</p>
            <p className="lb-card-info-number">5</p>
          </div>
          <div className="lb-card-info">
            <p className="lb-card-info-question">Created questions</p>
            <p className="lb-card-info-number">7</p>
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