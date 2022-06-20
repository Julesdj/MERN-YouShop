import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import React from 'react';

function Login() {
    return (
        <div
            style={{
                backgroundColor: 'white',
                maxWidth: '600px',
                margin: '1.5rem auto',
                padding: '1.5rem',
                borderStyle: 'hidden',
                borderRadius: '25px'
            }}
        >
            <Form>
                <h2 className="mb-4" style={{ textAlign: 'center' }}>
                    Login
                </h2>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                    >
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                        />
                    </FloatingLabel>

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Password"
                    >
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Form.Group>
                <Button
                    variant="dark"
                    type="submit"
                    style={{
                        width: '100%',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        backgroundImage: 'linear-gradient(to left, #B491FF, #78DFFF)',
                    }}
                    className="bg-accent mb-4"
                >
                    Login
                </Button>
                <p>
                    Not a member? <a href="/#">Sign up.</a>
                </p>
            </Form>
        </div>
    );
}

export default Login;
