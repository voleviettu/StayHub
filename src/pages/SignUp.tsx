import { useState } from "react";
import signupBackground from "@/assets/siginup-background.jpg";
import SignUpStep1 from "@/components/SignUpStep1";
import SignUpStep2 from "@/components/SignUpStep2";
import SignUpStep3 from "@/components/SignUpStep3";

const SignUp = () => {
  const [step, setStep] = useState(1); // 1: email/name, 2: password, 3: success
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Handle sign up logic here
    console.log("Sign up with:", email, fullName, password);
    setStep(3);
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log("Sign up with Google");
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Sign Up Section */}
      <section
        className="relative h-screen flex items-center justify-center px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${signupBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Step 1: Email and Full Name */}
        {step === 1 && (
          <SignUpStep1
            email={email}
            fullName={fullName}
            onEmailChange={setEmail}
            onFullNameChange={setFullName}
            onSubmit={handleStep1Submit}
            onGoogleSignUp={handleGoogleSignUp}
          />
        )}

        {/* Step 2: Password */}
        {step === 2 && (
          <SignUpStep2
            password={password}
            confirmPassword={confirmPassword}
            onPasswordChange={setPassword}
            onConfirmPasswordChange={setConfirmPassword}
            onSubmit={handleStep2Submit}
            onBack={() => setStep(1)}
          />
        )}

        {/* Step 3: Success */}
        {step === 3 && <SignUpStep3 fullName={fullName} />}
      </section>
    </div>
  );
};

export default SignUp;
