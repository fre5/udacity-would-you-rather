import { Button, Card } from 'react-bootstrap'

const HomeCard = (props) => {
  return (
    <Card className="home-card">
      <Card.Header>
        <Card.Title>
          {props.name}
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <img src="avatar-placeholder.jpeg" className="avatar" alt="avatar" />
        <div className="home-poll-question">
          <h6>Would you rather</h6>
          <div style={{ height: 20 }} />
          {`...${props.question}`}
          <div style={{ height: 20 }} />
          <Button variant="outline-primary" style={{ width: '100%' }}>View Poll</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default HomeCard 