import { useState } from "react";
import LoginForm from "../../../components/Forms/LoginForm";
import ButtonLogin from "../../../components/Button/Button";
import SocialLogin from "../../../components/buttonSocial/SocialLogin";
import { login } from "../../../service/AuthService"
import Background from "../../../components/Background/Background";


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await login(formData.email, formData.password);
      window.location.href = "/example"; 
    } catch (err) {
      setError(err.response?.data?.message || "Email ou senha incorretos.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <Background>
    <div className="container-login">
      <div className="left-side">
        <LoginForm userType="login" formData={formData} onChange={handleChange} />
        {error && <p style={{ color: "red", margin: "8px 0" }}>{error}</p>}
        <ButtonLogin onClick={handleLogin} loading={loading} />
        <SocialLogin type="login" />
      </div>
      <div className="right-side"></div>
    </div>
    </Background>
  );
}