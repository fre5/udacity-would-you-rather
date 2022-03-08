import { Card, ProgressBar } from 'react-bootstrap'

export default function Results() {
  return (
    <Card style={{ width: 600, margin: '20px auto' }}>
      <Card.Header>
        <Card.Title>Asked by Kanye West</Card.Title>
      </Card.Header>
      <Card.Body>
        <img src="avatar-placeholder.jpeg" className="avatar" style={{ marginTop: 90 }} alt="avatar"/>
        <div className="poll-question">
          <h4>Results:</h4>
          <div className="poll-answer">
            <div className="your-vote">Your vote</div>
            <p>Would you rather find $50 yourself?</p>
            <strong><ProgressBar variant="primary" now={60} label={'60%'} /></strong>
            <p style={{textAlign: 'center'}}><strong>2 out of 3 votes</strong></p>
          </div>
          <div className="poll-answer">
            <div className="your-vote">Your vote</div>
            <p>Would you rather have your best friend find $500</p>
            <strong><ProgressBar variant="primary" now={40} label={'40%'} /></strong>
            <p style={{textAlign: 'center'}}><strong>2 out of 3 votes</strong></p>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}