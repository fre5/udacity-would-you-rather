import { Card, Button } from 'react-bootstrap'

export default function Poll() {
  return (
    <Card style={{ width: 600, margin: '20px auto' }}>
      <Card.Header>
        <Card.Title>Kanye West asks:</Card.Title>
      </Card.Header>
      <Card.Body>
        <img src="avatar-placeholder.jpeg" className="avatar" alt="avatar"/>
        <div className="poll-question">
          <h4>Would You Rather ...</h4>
          <div>
            <input type="radio" id="first" style={{ margin: '10px 10px 10px 0px' }}/>
            <label htmlFor="first">Would you rather find $50 yourself?</label>
          </div>
          <div>
            <input type="radio" id="second" style={{ margin: '10px 10px 10px 0px' }}/>
            <label htmlFor="second">Would you rather have your best friend find $500</label>
          </div>
          <Button variant="primary" style={{ marginTop: 10, width: '100%' }}>Submit</Button>
        </div>
      </Card.Body>
    </Card>
  )
}