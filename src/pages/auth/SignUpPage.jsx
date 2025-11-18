import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, Check, Shield, Server, Zap } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  const passwordRequirements = [
    { id: 1, text: "At least 8 characters", met: formData.password.length >= 8 },
    { id: 2, text: "One number or symbol", met: /[0-9!@#$%^&*]/.test(formData.password) },
    { id: 3, text: "Uppercase and lowercase letters", met: /[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password) },
  ];

  const allRequirementsMet = passwordRequirements.every(req => req.met);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Left Side - Form */}
        <div style={styles.formSection}>
          <div style={styles.formContainer}>
            {/* Header */}
            <div style={styles.header}>
              <div style={styles.logo}>
                <Shield size={32} color="#7c3aed" />
              </div>
              <h1 style={styles.title}>Sign Up</h1>
              <p style={styles.subtitle}>
                Secure Your Inventory with StockSense
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={styles.form}>
              {/* Name Field */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <div style={styles.inputContainer}>
                  <User size={20} color="#6B7280" style={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    style={styles.input}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <div style={styles.inputContainer}>
                  <Mail size={20} color="#6B7280" style={styles.inputIcon} />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    style={styles.input}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <div style={styles.inputContainer}>
                  <Lock size={20} color="#6B7280" style={styles.inputIcon} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    style={styles.input}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    style={styles.eyeButton}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} color="#6B7280" /> : <Eye size={20} color="#6B7280" />}
                  </button>
                </div>

                {/* Password Requirements */}
                <div style={styles.requirements}>
                  {passwordRequirements.map((req) => (
                    <div key={req.id} style={styles.requirement}>
                      <div style={{
                        ...styles.checkmark,
                        backgroundColor: req.met ? '#10B981' : '#E5E7EB',
                        color: req.met ? 'white' : 'transparent'
                      }}>
                        <Check size={12} />
                      </div>
                      <span style={{
                        color: req.met ? '#10B981' : '#6B7280',
                        fontSize: '14px'
                      }}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !allRequirementsMet}
                style={{
                  ...styles.submitButton,
                  opacity: (loading || !allRequirementsMet) ? 0.6 : 1,
                  cursor: (loading || !allRequirementsMet) ? 'not-allowed' : 'pointer'
                }}
              >
                {loading ? (
                  <div style={styles.loading}>
                    <div style={styles.spinner}></div>
                    Creating Account...
                  </div>
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>

            {/* Login Link */}
            <div style={styles.loginLink}>
              <span style={styles.loginText}>
                Already have an account?{" "}
                <Link to="/login" style={styles.loginLinkText}>
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div style={styles.featuresSection}>
          <div style={styles.featuresContent}>
            <h2 style={styles.featuresTitle}>Your data, your rules</h2>
            <p style={styles.featuresSubtitle}>
              Your data belongs to you, and our encryption ensures that:
            </p>

            <div style={styles.featuresList}>
              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Shield size={24} color="#7c3aed" />
                </div>
                <div>
                  <h3 style={styles.featureTitle}>Enterprise Security</h3>
                  <p style={styles.featureDescription}>
                    Bank-level encryption to protect your inventory data
                  </p>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Server size={24} color="#7c3aed" />
                </div>
                <div>
                  <h3 style={styles.featureTitle}>Your Data Stays Yours</h3>
                  <p style={styles.featureDescription}>
                    Complete control over your inventory information
                  </p>
                </div>
              </div>

              <div style={styles.feature}>
                <div style={styles.featureIcon}>
                  <Zap size={24} color="#7c3aed" />
                </div>
                <div>
                  <h3 style={styles.featureTitle}>Smart Protection</h3>
                  <p style={styles.featureDescription}>
                    AI-powered security monitoring for your business data
                  </p>
                </div>
              </div>
            </div>

            <div style={styles.securityBadge}>
              <Shield size={16} color="#10B981" />
              <span style={styles.badgeText}>End-to-end encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'white',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  },
  content: {
    display: 'flex',
    minHeight: '100vh'
  },
  formSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  logo: {
    marginBottom: '20px'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#111827',
    margin: '0 0 8px 0'
  },
  subtitle: {
    fontSize: '16px',
    color: '#6B7280',
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  },
  inputContainer: {
    position: 'relative'
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  input: {
    width: '100%',
    padding: '12px 12px 12px 40px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box'
  },
  eyeButton: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  },
  requirements: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginTop: '12px'
  },
  requirement: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  checkmark: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  submitButton: {
    width: '100%',
    padding: '12px 24px',
    backgroundColor: '#7c3aed',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px'
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  },
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid transparent',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  loginLink: {
    textAlign: 'center',
    marginTop: '24px'
  },
  loginText: {
    fontSize: '14px',
    color: '#6B7280'
  },
  loginLinkText: {
    color: '#7c3aed',
    fontWeight: '500',
    textDecoration: 'none'
  },
  featuresSection: {
    flex: 1,
    backgroundColor: '#1F2937',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  },
  featuresContent: {
    maxWidth: '440px'
  },
  featuresTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '0 0 12px 0'
  },
  featuresSubtitle: {
    fontSize: '16px',
    color: '#D1D5DB',
    margin: '0 0 40px 0'
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '40px'
  },
  feature: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px'
  },
  featureIcon: {
    width: '48px',
    height: '48px',
    backgroundColor: 'white',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 4px 0'
  },
  featureDescription: {
    fontSize: '14px',
    color: '#D1D5DB',
    margin: 0,
    lineHeight: '1.5'
  },
  securityBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    width: 'fit-content'
  },
  badgeText: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#10B981'
  }
};

// Add spinner animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);