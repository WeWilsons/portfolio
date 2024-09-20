// components/ContactForm.js

'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto">
      {submitted ? (
        <div className="alert alert-success shadow-lg mb-6">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Your message has been sent!</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label htmlFor="name" className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="message" className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              required
              id="message"
              name="message"
              rows="5"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
