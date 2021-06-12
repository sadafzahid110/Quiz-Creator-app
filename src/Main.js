import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Question from './Question';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
function Main() {
  const [ques, setQues] = useState([
    { title:"Question", type:"Type" , choice: "Choice" , points :"Points" , action: "Action"},
    { title:"sadf is question", type:"single" , choice: "3" , points :"100" , action: "eidt"},
    
    { title:"sadf is question", type:"single" , choice: "3" , points :"100" , action: "eidt"},
    { title:"sadf is question", type:"single" , choice: "3" , points :"100" , action: "eidt"}
  ]);

  const history = useHistory();

  return (
 
    <Form>
   <center><h1><b>Create a Quiz</b> </h1></center>
    <Form.Group controlId="QuizTitle">
      <Form.Label>Quiz Title</Form.Label>
      <Form.Control type="text" placeholder="Enter title" />
     </Form.Group>
  
    <Form.Group controlId="points">
      <Form.Label>Total Points</Form.Label>
      <Form.Control type="text" placeholder="Enter Total Points" />
    </Form.Group>
    
    
    <Form.Group controlId="time">
      <Row>
        <Col>
    <Form.Label>Time Allowed (minutes)</Form.Label>
      <Form.Control type="text" placeholder="Enter total time allowed" />
      </Col>
      <Col>
      <Form.Label>Deadline</Form.Label>
      <Form.Control type="date" placeholder="Enter date" />
      </Col>
      </Row>
    </Form.Group>
    <center><h2><b>Questions</b> </h2></center>
 {
ques.length>0 ? ques.map((item)=> <Question getQuestion={item} />) : "No question"

 }
 <center><Button variant="primary" type="Submit" onClick={()=> history.push('/add-question')}>
     Add Question
    </Button></center>

    <Button variant="primary" type="cancel">
      Cancel
    </Button>
    <Button variant="primary" type="submit">
      Create Quiz
    </Button>
   
  </Form>
  );
}

export default Main;
