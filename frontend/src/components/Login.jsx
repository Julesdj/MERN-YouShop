import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import React from 'react';

function Login() {
    return (
        <div
            style={{
                maxWidth: '600px',
                margin: '1.5rem auto',
                padding: '1.5rem',
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
                    }}
                    className="bg-accent mb-4"
                >
                    Login
                </Button>
                <p>
                    Don't have an Account? <a href="/#">SIGN UP</a>
                </p>
            </Form>
        </div>
    );
}

export default Login;
