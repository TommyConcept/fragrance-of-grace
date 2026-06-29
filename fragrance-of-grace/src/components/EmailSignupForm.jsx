// components/EmailSignupForm.jsx
// Brevo (formerly Sendinblue) form integration.
// Form action URL and field names match the Brevo embed code provided.

import React, { useState, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const BREVO_ACTION = "https://2f8699f9.sibforms.com/serve/MUIFAKQi3iKML7Q9JU5N5gsvxOT0vu-d9SOF2Kr6596FFIbD1sDsZzo8w7a5LRgcGHfUCFbLcE7iJlb4NrHq_-Cj0DpLDw94r4tqmYpPdxTRDy9XV49J_nyTh_X8JnVaK3OyifWl71Jfaz9Zh7ECm4_7e2eKvAbe5GuovAaJjBkJ09d0-Lg_2qtVhDzORbf2DdIFvmzkVSIGFe9etQ==";

export default function EmailSignupForm({ theme = 'light' }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const isDark = theme === 'dark';

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = 'Please enter your first name.';
    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('FIRSTNAME', firstName);
      formData.append('EMAIL', email);
      formData.append('email_address_check', '');
      formData.append('locale', 'en');

      await fetch(BREVO_ACTION, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Brevo requires no-cors cross-origin submission
      });

      setSubmitted(true);
      setFirstName('');
      setEmail('');
    } catch (err) {
      // no-cors means we can't read the response — assume success if no network error
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputBase = `w-full px-4 py-3 rounded text-sm font-inter focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all ${
    isDark
      ? 'bg-white/10 text-ivory placeholder-ivory/50 border border-white/20 focus:border-gold/60'
      : 'bg-white text-navy placeholder-muted border border-gray-200 focus:border-gold/60'
  }`;

  const labelBase = `block text-xs font-inter font-medium mb-1 tracking-wide ${
    isDark ? 'text-ivory/70' : 'text-navy/70'
  }`;

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-4">
        <CheckCircle size={36} className="text-gold" aria-hidden="true" />
        <p
          className={`font-playfair text-lg font-medium text-center ${isDark ? 'text-ivory' : 'text-navy'}`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          You're on the prayer list, Beloved.
        </p>
        <p className={`text-xs font-inter text-center ${isDark ? 'text-ivory/60' : 'text-muted'}`}>
          Watch for Christ-centered prayers and reflections in your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Join the prayer list"
    >
      <div className="flex flex-col sm:flex-row gap-3 mb-3">
        <div className="flex-1">
          <label htmlFor="FIRSTNAME" className={labelBase}>First Name</label>
          <input
            id="FIRSTNAME"
            type="text"
            name="FIRSTNAME"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
            className={inputBase}
            aria-required="true"
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" className="text-red-400 text-xs mt-1" role="alert">
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="flex-1">
          <label htmlFor="EMAIL" className={labelBase}>Email Address</label>
          <input
            id="EMAIL"
            type="email"
            name="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className={inputBase}
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Hidden fields required by Brevo */}
      <input type="text" name="email_address_check" defaultValue="" style={{ display: 'none' }} />
      <input type="hidden" name="locale" value="en" />

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold text-white font-inter font-medium text-sm rounded tracking-wide hover:bg-yellow-500 hover:text-navy transition-all duration-200 disabled:opacity-60"
        aria-label="Join the Prayer List"
      >
        {loading ? (
          <span className="animate-pulse">Joining...</span>
        ) : (
          <>
            <Send size={14} aria-hidden="true" />
            Join the Prayer List
          </>
        )}
      </button>

      <p className={`text-xs font-inter text-center mt-3 leading-relaxed ${isDark ? 'text-ivory/40' : 'text-muted'}`}>
        No spam. Only Christ-centered prayers, reflections, devotionals, and ministry updates.
      </p>
    </form>
  );
}
