import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";

const users = [
  { email: "sa@gmail.com", password: "Samsun55" },
  { email: "user2@example.com", password: "password2" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRemember(true);
    }
  }, []);

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePassword = (value) => value.length >= 6;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };

  const handleRememberChange = (e) => setRemember(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      if (remember) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
      } else {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
      }
      history.push("/users");
    } else {
      alert("E-mail adresiniz veya şifreniz hatalı! Tekrardan deneyiniz.");
    }
  };

  return (
    <>
      <div className="ana-div-login">
        <div className="background-login"></div>
        <div className="login-form">
          <Form onSubmit={handleSubmit}>
            <label className="title-label">Giriş Yap</label>
            <FormGroup>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email adresinizi girin"
                value={email}
                onChange={handleEmailChange}
                invalid={!emailValid}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Şifrenizi girin"
                value={password}
                onChange={handlePasswordChange}
                invalid={!passwordValid}
              />
              <Label className="checkbox-label" for="remember">
                <Input
                  className="checkbox-input"
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={remember}
                  onChange={handleRememberChange}
                />
                Beni Hatırla
              </Label>
            </FormGroup>
            <Button
              color="primary"
              type="submit"
              disabled={!emailValid || !passwordValid}
            >
              Oturum Aç
            </Button>
            <p className="forgot-password">
              <a href="">Şifremi Unuttum?</a>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}
