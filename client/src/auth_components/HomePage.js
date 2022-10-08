import { Tab, Tabs, Card, Nav } from 'react-bootstrap';

import Login from './Login';
import Register from './Register';

function HomePage({ setAuth }) {

    return (
    <div className="container">
        <div class="row justify-content-md-center">
            <div className="col-4 mt-5  align-self-center">
                <Card class="shadow p-3 mb-5 bg-white rounded" style={{ width: '25rem'}}>
                    <Card.Body>
                        <Tab.Container defaultActiveKey="login" id="justify-tab" >
                        <Nav variant="pills" className='text-center nav-justified'>
                            <Nav.Item>
                                <Nav.Link eventKey="login" className='mb-3'>Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="register" className='mb-3'>Register</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="login"><Login setAuth={setAuth}/></Tab.Pane>
                            <Tab.Pane eventKey="register"><Register setAuth={setAuth}/></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container> 
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
    );
}
export default HomePage;