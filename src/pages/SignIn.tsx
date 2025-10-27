import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBackground from "@/assets/image/background/signin-background.jpg";
import Logo from "@/assets/logo.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log("Sign in with:", email, password);
  };

  const handleGoogleSignIn = () => {
    // Handle Google sign in logic here
    console.log("Sign in with Google");
  };

  return (
    <div className="h-screen overflow-hidden">
      {/* Sign In Section */}
      <section
        className="relative h-screen flex items-center justify-center px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="glass rounded-3xl p-8 md:p-12 max-w-2xl w-full animate-scale-in">
          {/* Logo and Title */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <img 
                src={Logo} 
                alt="StayHub logo" 
                className="h-16 w-16 object-contain cursor-pointer hover:opacity-80 transition-opacity" 
                onClick={() => navigate('/')}
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome Back
            </h1>
            <p className="text-white/80">Sign in to continue your journey</p>
          </div>

          {/* Sign In Form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email Address
              </label>
              <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-muted-foreground"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-white">
                Password
              </label>
              <div className="flex items-center gap-3 bg-background/50 rounded-xl px-4 py-3">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-0 bg-transparent p-0 focus-visible:ring-0 placeholder:text-muted-foreground flex-1"
                  data-form-type="other"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-foreground hover:text-primary transition-colors p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Forgot password?
              </a>
            </div>

            {/* Sign In Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                className="rounded-xl h-12 w-full text-base font-medium bg-black text-white hover:bg-muted-foreground/40"
              >
                Sign In
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-5 max-w-md mx-auto">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-transparent text-white/80">Or continue with</span>
            </div>
          </div>

          {/* Google Sign In Button */}
          <div className="max-w-md mx-auto">
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full rounded-xl h-12 text-base font-medium bg-background/90 text-foreground hover:bg-background gap-3"
            >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
            </Button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-5 text-sm text-white/80 max-w-md mx-auto">
            Don't have an account?{" "}
            <a href="/signup" className="text-white font-medium hover:text-primary transition-colors">
              Sign up
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
