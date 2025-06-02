
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lanyard } from '@/components/Lanyard';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      console.log('Signup attempt:', { email, password, confirmPassword });
    } else {
      console.log('Login attempt:', { email, password });
    }
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
  };

  const handleEmailFocus = () => {
    console.log('Email field focused');
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setPassword('');
    setConfirmPassword('');
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-950 to-black relative overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      
      {/* Back to home link */}
      <div className="absolute top-6 left-6 z-10">
        <Link 
          to="/"
          className="flex items-center space-x-2 text-purple-200 hover:text-white transition-all duration-300 hover:scale-105 font-light"
        >
          <ArrowLeft size={20} />
          <span>Back to home</span>
        </Link>
      </div>

      {/* Lanyard Login/Signup form */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <Lanyard
          mass={1}
          tension={180}
          friction={12}
          style={{
            cord: {
              stroke: 'rgba(168, 85, 247, 0.4)',
              strokeWidth: 2,
            },
          }}
          className="w-full max-w-md"
        >
          <div className="w-full max-w-md">
            <form 
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2 transition-all duration-300">
                  {isSignup ? 'Create Account' : 'Welcome back'}
                </h1>
                <p className="text-purple-200 font-light">
                  {isSignup ? 'Join us today' : 'Sign in to your account'}
                </p>
              </div>

              {/* Google Sign-in Button */}
              <Button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full mb-6 bg-white hover:bg-gray-50 text-gray-700 font-medium py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg border border-gray-200"
              >
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Continue with Google
              </Button>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-purple-200">or</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-purple-200 font-light">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={handleEmailFocus}
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-300 focus:bg-white/15 focus:border-purple-400 transition-all duration-300"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-purple-200 font-light">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-purple-300 focus:bg-white/15 focus:border-purple-400 pr-10 transition-all duration-300"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password - only show in signup mode */}
                <div className={`space-y-2 transition-all duration-500 overflow-hidden ${
                  isSignup ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Label htmlFor="confirmPassword" className="text-purple-200 font-light">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder:text-purple-300 focus:bg-white/15 focus:border-purple-400 pr-10 transition-all duration-300"
                      placeholder="Confirm your password"
                      required={isSignup}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white transition-colors duration-200"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Forgot Password - only show in login mode */}
                {!isSignup && (
                  <div className="text-right">
                    <Link 
                      to="/forgot-password"
                      className="text-purple-300 hover:text-white transition-colors duration-200 font-light text-sm"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {isSignup ? 'Create Account' : 'Sign In'}
                </Button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-purple-200 font-light">
                  {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button 
                    type="button"
                    onClick={toggleMode}
                    className="text-purple-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {isSignup ? 'Sign in' : 'Sign up'}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </Lanyard>
      </div>
    </div>
  );
};

export default Login;
