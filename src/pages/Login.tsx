
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lanyard } from '@reactbits/lanyard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  const handleEmailFocus = () => {
    // Optional: Add swing to focus animation here
    console.log('Email field focused');
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

      {/* Lanyard Login form */}
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
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-300"
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
                <p className="text-purple-200 font-light">Sign in to your account</p>
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
                    className="bg-white/10 border-white/20 text-white placeholder:text-purple-300 focus:bg-white/15 focus:border-purple-400"
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
                      className="bg-white/10 border-white/20 text-white placeholder:text-purple-300 focus:bg-white/15 focus:border-purple-400 pr-10"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-300 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <Link 
                    to="/forgot-password"
                    className="text-purple-300 hover:text-white transition-colors font-light text-sm"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Sign In
                </Button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-purple-200 font-light">
                  Don't have an account?{' '}
                  <Link 
                    to="/signup"
                    className="text-purple-300 hover:text-white transition-colors font-medium"
                  >
                    Sign up
                  </Link>
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
