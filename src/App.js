import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom";
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar
} from 'react-bootstrap';
import Components from './components';

import { HomePage, Contacts } from './pages';

class App extends React.Component {

    render() {
        return (
            <>
            <Navbar bg="dark" variant="blue">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="Contacts">Contacts</Nav.Link>
                </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
            
            <React.StrictMode>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/contacts" component={Contacts} />
                    </Switch>
                </BrowserRouter>
            </React.StrictMode>

            </>
        );
    }
}
export default App;