import { useState } from "react";
import SignUpForms from "../../../components/Forms/SignUpForms";
import ButtonSignUp from "../../../components/Button/ButtonSignUp";
import SocialLogin from "../../../components/buttonSocial/SocialLogin";
import Background from "../../../components/Background/Background";
import { register } from "../../../service/AuthService";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleRegister = async () => {
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);
    try {
      await register(formData.name, formData.email, formData.password);
      window.location.href = "/login"; 
    } catch (err) {
      setError(err.response?.data?.message || "Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Background>
      <div className="container-login">
        <div className="left-side">
          <SignUpForms userType="signup" formData={formData} onChange={handleChange} />
          {error && <p style={{ color: "red", margin: "8px 0" }}>{error}</p>}
          <ButtonSignUp onClick={handleRegister} loading={loading} />
          <SocialLogin type="signup" />
        </div>
      </div>
    </Background>
  );
}