import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import api from "../../services/api";

const FormComponent: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();

        const res = await api.post("/auth/login", {
            email,
            password,
        });

        const token = "Bearer " + res.data.access_token;

        sessionStorage.setItem("token", token);

        history.push("/dashboard");
    }

    return (
        <Row className="justify-content-center mt-5">
            <Col sm={12} md={8} lg={6}>
                <Form onSubmit={handleLogin}>
                    <Form.Group controlId="email">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Insira seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Form.Text className="text-muted">
                            dev1@curseduca.com
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Senha:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Insira sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>
                        Entrar
                    </Button>
                </Form>
            </Col>
        </Row>
    );
};

export default FormComponent;
