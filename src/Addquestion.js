import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from 'react-router-dom';

function AddQuestion(){
    const history = useHistory();
    
return(
    <Form>
<center><h1>Question</h1></center>
<Form.Group controlId="writeQuestion">
     
      <Form.Control type="text" placeholder="Enter Question" />
     </Form.Group>


     <Form.Group controlId="type">
      <Row>
        <Col>
    <Form.Label>Question Type</Form.Label>
    <Form.Check
          type="radio"
          label="Single Choice"
          name="singletype"
          id="singletyperadio"
        />
        <Form.Check
          type="radio"
          label="Multiple Choice"
          name="multipletype"
          id="multityperadio"
        />
      </Col>
      <Col>
      <Form.Label>Points</Form.Label>
      <Form.Control type="text" placeholder="Enter points" />
      </Col>
      </Row>
    </Form.Group>
      <center><b><h2>Choices</h2></b></center>

      <center><Button variant="primary" type="Submit" onClick={()=> history.push('/choice')}>
     Add Choice
    </Button></center>





    <Button variant="primary" type="cancel">
      Cancel
    </Button>
    <Button variant="primary" type="submit">
      Create 
    </Button>
   
</Form>

);





}
export default AddQuestion;