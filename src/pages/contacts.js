import React from 'react';
import img_2 from '../assets/img_2.jpg';
import{
    Row,
    Col,
    Card,
    ButtonGroup,
    Dropdown,
    DropdownButton  
} from 'react-bootstrap';

class Contacts extends React.Component{

render(){
    return( 
    <>  
    <ButtonGroup vertical>
        <DropdownButton as={ButtonGroup} title="Со мной можно связаться в социальных сетях" id="bg-vertical-dropdown-1">
            <Dropdown.Item eventKey="1" href="https://vk.com/kosterin2017">Я в Вконтакте</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="https://www.instagram.com/666_dope_boy_666/?hl=ru">Я в Инстаграм</Dropdown.Item>
        </DropdownButton>
    </ButtonGroup>

        <Row>
            <Col>
            <Card style={{ width: '380px'}}>
                <Card.Img variant="top" height="410px" img src= {img_2} />
            </Card>
            </Col>
        </Row> 
        
    </>
  
    );
}
}
export default Contacts;