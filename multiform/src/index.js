// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

/*
 * This Multi-Step-Form was created using the tutorial found on CSS-Tricks.com
 * https://css-tricks.com/the-magic-of-react-based-multi-step-forms/
 */

import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import MasterForm from "./components/MasterForm";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import "./StylesM.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <div className="App">
    //   <Helmet>
    //     <style>{"body { background-color: lightgray; }"}</style>
    //   </Helmet>
    //   <Container>
    //     <Row>
    //       <Col>
    //         <MasterForm />
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    <Container>
        <Row>
          <Col>
            <MasterForm />
          </Col>
        </Row>
      </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);