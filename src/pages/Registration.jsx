import React, { useState } from 'react';
import axios from "axios";
import { Bus, Mail, Lock, User, Phone, Eye, EyeOff, Check, ArrowLeft, Sparkles, Shield, Zap, Camera, X } from 'lucide-react';
import Footer from './Footer';
export default function Registration() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  const userData = {
    name: formData.fullName,
    email: formData.email,
    password: formData.password,
    phoneNumber: formData.phone,
  };

  const data = new FormData();
  data.append("user", new Blob([JSON.stringify(userData)], { type: "application/json" }));
  if (profileImage) data.append("profileImage", profileImage);

  try {
    const response = await axios.post("http://localhost:8080/api/auth/register", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    alert("✅ Registration successful!");
    window.location.href = "/login";
  } catch (error) {
    console.error("Registration Error:", error);
    alert("❌ Error during registration");
  }
};
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, image: 'Image size must be less than 5MB' });
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        setErrors({ ...errors, image: 'Please select a valid image file' });
        return;
      }
      
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      
      if (errors.image) {
        setErrors({ ...errors, image: '' });
      }
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setImagePreview(null);
    if (errors.image) {
      setErrors({ ...errors, image: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 p-2.5 rounded-2xl shadow-lg pulse-glow">
              <Bus className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">SwiftBus</h1>
              <p className="text-xs text-gray-500">Travel Reimagined</p>
            </div>
          </div>
          
          <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Benefits */}
            <div className="hidden lg:block animate-fadeInUp">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 border border-indigo-100">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700">Join 10M+ Happy Travelers</span>
                </div>
                
                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Start Your Journey with
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    SwiftBus Today
                  </span>
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Create your free account and unlock exclusive benefits
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Zap, title: 'Instant Booking', desc: 'Book tickets in 30 seconds with just a few clicks' },
                  { icon: Shield, title: 'Safe & Secure', desc: 'Your data is protected with bank-level encryption' },
                  { icon: Sparkles, title: 'Exclusive Offers', desc: 'Get special discounts and early access to deals' }
                ].map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg animate-fadeInUp"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-lg">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Registration Form */}
            <div className="animate-scaleIn">
              <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10 border border-indigo-100">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h3>
                  <p className="text-gray-600">Join the SwiftBus community today</p>
                </div>

                <div className="space-y-5">
                  {/* Profile Image Upload */}
                  <div className="flex flex-col items-center mb-6">
                    <label className="text-sm font-semibold text-gray-700 mb-3">Profile Picture (Optional)</label>
                    <div className="relative">
                      {imagePreview ? (
                        <div className="relative group">
                          <img 
                            src={imagePreview} 
                            alt="Profile preview" 
                            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-lg"
                          />
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:bg-red-600 transition-all hover:scale-110"
                          >
                            <X className="w-4 h-4" />
                          </button>
                          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <label className="cursor-pointer">
                              <Camera className="w-8 h-8 text-white" />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      ) : (
                        <label className="relative cursor-pointer group">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center border-4 border-dashed border-indigo-300 group-hover:border-indigo-500 transition-all group-hover:scale-105">
                            <Camera className="w-10 h-10 text-indigo-600 mb-2 group-hover:scale-110 transition-transform" />
                            <span className="text-xs text-indigo-600 font-semibold">Upload Photo</span>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </label>
                      )}
                    </div>
                    {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image}</p>}
                    <p className="text-xs text-gray-500 mt-2">JPG, PNG or GIF (max 5MB)</p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 text-indigo-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3 border-2 ${errors.fullName ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 text-indigo-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 border-2 ${errors.email ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 text-indigo-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="10-digit mobile number"
                      className={`w-full px-4 py-3 border-2 ${errors.phone ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Password */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Lock className="w-4 h-4 text-indigo-600" />
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleChange('password', e.target.value)}
                        placeholder="Minimum 8 characters"
                        className={`w-full px-4 py-3 border-2 ${errors.password ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900 pr-12`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                      <Lock className="w-4 h-4 text-indigo-600" />
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange('confirmPassword', e.target.value)}
                        placeholder="Re-enter your password"
                        className={`w-full px-4 py-3 border-2 ${errors.confirmPassword ? 'border-red-300' : 'border-gray-200'} rounded-xl focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-gray-900 pr-12`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>

                  {/* Terms Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
                          className="w-5 h-5 text-indigo-600 border-2 border-gray-300 rounded focus:ring-4 focus:ring-indigo-100 transition-all cursor-pointer"
                        />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        I agree to SwiftBus's{' '}
                        <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">Privacy Policy</a>
                      </span>
                    </label>
                    {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Check className="w-5 h-5" />
                    Create My Account
                  </button>
                </div>

                {/* Sign In Link */}
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
                      Sign In
                    </a>
                  </p>
                </div>

                {/* Social Login */}
                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-300 font-semibold text-gray-700 hover:text-indigo-600">
                      Google
                    </button>
                    <button className="px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-300 font-semibold text-gray-700 hover:text-indigo-600">
                      Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}