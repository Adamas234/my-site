import React from 'react';
import {Nav,
    Navbar,
    Form,
    FormControl,
    Button

} from 'react-bootstrap';

class Components extends React.Component {

    render(){
        return(

    <Navbar bg="dark" variant="blue">
        <Navbar.Brand href="HomePage">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="HomePage">Home</Nav.Link>
            <Nav.Link href="Contacts">Features</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
        </Form>
    </Navbar>


        );
    }
}

export default Components;