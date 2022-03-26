import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import './FAQs.css'

const FAQs = () => {
    return (
        <div className='faqs my-5'>
            <h1 className='text-center fs-2 fw-bold mb-4'>Answers to some <span className='text-success'>FAQs</span></h1>
            <div className='mx-5'>
                <Accordion defaultActiveKey={['0']} flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><span className='fs-5 fw-bold'>How does react work?</span></Accordion.Header>
                        <Accordion.Body>
                            React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code. In React, the code that we write in html format is not html. React translate compiler (BabelJS) converts the code in html format written in React into object. Because React is the library of JavaScript, and JavaScript cannot directly translate html. So the code that is written in html form in React is converted to JavaScript Object where the tagname of html is sent as Object name and the code inside the tag is sent as value of Object. Moreover, when the browser displays the code of react in the form of DOM, then React saves a copy of browser DOM in the form of virtual DOM. Later, when the source code is changed, the react browser compares the virtual DOM with the DOM. If any changes are found, it is displayed in the browser DOM.

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><span className='fs-5 fw-bold'>What is the difference between props and state?</span></Accordion.Header>
                        <Accordion.Body>
                            Props: Props are used to pass data from one component to another component and it is immutable (cannot be modified). Props are read only.
                            <br />
                            State: State are used to pass data within the component only and it is mutable (can be modified). State is both read and write.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><span className='fs-5 fw-bold'>How does useState work?</span></Accordion.Header>
                        <Accordion.Body>
                            useState is a temporary storage where we can keep temporary data. When we have to deal with a lot of data in a component, we store that data in a state. If we want we can set the data in useState, then we can pass the data to another component in the form of props. State is by default behavior of React.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default FAQs;