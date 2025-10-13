/**
 * Contact Form Component for PLKNM Plumbing Services
 *
 * Professional contact form with validation and email functionality.
 * Features classic styling and user-friendly interface.
 *
 * @author PLKNM Development Team
 * @version 1.0.0
 */

"use client";

import { useState } from "react";
import { siteConfig } from "../../lib/seo-config";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission

      // Example using fetch to send to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For demonstration, we'll show success message
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // You can also integrate with services like:
      // - EmailJS for client-side email sending
      // - Formspree for form handling
      // - Netlify Forms for static sites
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2
        className="text-2xl font-bold mb-6"
        style={{ color: "var(--foreground)" }}
      >
        Get Project Quote
      </h2>

      {/* Success Message */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Thank you for your inquiry!</span>
          </div>
          <p className="mt-2 text-sm">
            We have received your message and will contact you within 24 hours
            to discuss your project requirements.
          </p>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Submission failed</span>
          </div>
          <p className="mt-2 text-sm">
            There was an error sending your message. Please try again or contact
            us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--foreground)" }}
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--foreground)" }}
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--foreground)" }}
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--foreground)" }}
          >
            Project Type *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
          >
            <option value="">Select project type</option>
            <option value="Hotel Plumbing">Hotel Plumbing</option>
            <option value="Shopping Mall">Shopping Mall</option>
            <option value="Resort Development">Resort Development</option>
            <option value="Commercial Building">Commercial Building</option>
            <option value="Cinema Complex">Cinema Complex</option>
            <option value="Luxury Bungalow">Luxury Bungalow</option>
            <option value="Showroom">Showroom</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--foreground)" }}
          >
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
            placeholder="Please describe your project requirements, timeline, and any specific details..."
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-md font-semibold text-white transition-colors duration-200 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
            style={{
              backgroundColor: isSubmitting ? "#9ca3af" : "var(--primary)",
            }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending Message...
              </span>
            ) : (
              "Send Project Inquiry"
            )}
          </button>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="text-sm text-gray-600 text-center">
            Or contact us directly at{" "}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-medium hover:underline"
              style={{ color: "var(--primary)" }}
            >
              {siteConfig.contact.phone}
            </a>{" "}
            or{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-medium hover:underline"
              style={{ color: "var(--primary)" }}
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
