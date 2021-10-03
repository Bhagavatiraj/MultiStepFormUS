import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import MasterForm from "./components/MasterForm";
import Sellrequest from "./Sellrequest";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./StylesM.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Routes = (props) => {
    // const history = createBrowserHistory();

    return (
        <BrowserRouter>
            <Switch>
                <Container>
                    <Row>
                        <Col>
                            <Route path="/form" component={MasterForm} exact />
                            <Route path="/sell" component={Sellrequest} />
                        </Col>
                    </Row>
                </Container>

               
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
