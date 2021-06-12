import Form from 'react-bootstrap/Form';
function Choice(){
return(
    <Form>
<h1><b>Choice</b></h1>
<Form.Control type="text" placeholder="Enter choice" />

<Form.Check type="check" label ="Correct Option"/>





<Button variant="primary" type="cancel">
      Cancel
    </Button>
    <Button variant="primary" type="submit">
     Add Choice
    </Button>
   

    </Form>





);






}
export default Choice;