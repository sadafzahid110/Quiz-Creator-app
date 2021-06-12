
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
function Question({getQuestion}){
return(

<Container>
<Row>
<Col md = {4}>{getQuestion.title}</Col>
<Col md = {2}>{getQuestion.type}</Col>
<Col md = {2}>{getQuestion.choice}</Col>
<Col md = {2}>{getQuestion.points}</Col>
<Col md = {2}>{getQuestion.action}</Col>

</Row>

    
</Container>


);




}

export default Question;