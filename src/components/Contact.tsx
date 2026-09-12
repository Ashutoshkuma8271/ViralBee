import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Mail,
  Phone,
  MessageSquare,
  Globe,
  ArrowRight,
  Check,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { BRAND, SERVICES } from '../constants/content.ts';

interface FormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: SERVICES[0].title,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const pkg = searchParams.get('package');
    if (pkg) {
      setFormData((prev) => ({
        ...prev,
        message: `Inquiring about the ${pkg} Package. Please share tailored scope and onboarding details.`,
      }));
    }
  }, [searchParams]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a phone/WhatsApp number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief project details.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // TODO: connect to backend/CRM
      await new Promise((resolve) => setTimeout(resolve, 900));

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          businessName: '',
          email: '',
          phone: '',
          service: SERVICES[0].title,
          message: '',
        });
      }, 7000);
    } catch {
      alert('An unexpected error occurred. Please contact us directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-36 relative bg-[#070707] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-white/[0.08] gap-6"
        >
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-[#F5B90F] block mb-2 font-semibold">
              10 / Studio Consultation
            </span>
            <h2 className="text-fluid-h2 font-display font-extrabold text-white">
              Start a Project
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-sm">
            Tell us about your brand goals. We review all submissions within 24 business hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-xl bg-[#0F0F0F] border border-white/[0.08] space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-neutral-400 font-sans">
                  Prefer instant messaging or direct telephone consultation?
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={BRAND.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#F5B90F]/50 hover:bg-[#F5B90F]/[0.05] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-[#F5B90F]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white">
                      WhatsApp Chat
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#F5B90F]/50 hover:bg-[#F5B90F]/[0.05] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#F5B90F]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white">
                      {BRAND.contact.phoneDisplay}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="flex items-center justify-between p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-[#F5B90F]/50 hover:bg-[#F5B90F]/[0.05] transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#F5B90F]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white">
                      {BRAND.contact.email}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#F5B90F] transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <div className="flex items-center justify-between p-4 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#F5B90F]" />
                    <span className="text-xs font-mono uppercase tracking-wider text-white">
                      {BRAND.contact.website}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs text-neutral-400 space-y-1 font-mono">
                <div>HOURS: {BRAND.contact.hours}</div>
                <div>STUDIO: {BRAND.contact.location}</div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-xl bg-[#0F0F0F] border border-white/[0.08] shadow-2xl">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5B90F]/10 text-[#F5B90F] flex items-center justify-center mx-auto border border-[#F5B90F]/30">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-neutral-400 font-sans max-w-sm mx-auto">
                    Thank you, {formData.name}. Our senior marketing lead will review your project and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className={`input-studio w-full px-4 py-3 rounded-lg bg-white/[0.03] border ${
                          errors.name ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-neutral-600 text-sm`}
                      />
                      {errors.name && (
                        <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="businessName" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                        Business / Brand
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Acme Studio"
                        className="input-studio w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/10 text-white placeholder-neutral-600 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={`input-studio w-full px-4 py-3 rounded-lg bg-white/[0.03] border ${
                          errors.email ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-neutral-600 text-sm`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`input-studio w-full px-4 py-3 rounded-lg bg-white/[0.03] border ${
                          errors.phone ? 'border-red-500' : 'border-white/10'
                        } text-white placeholder-neutral-600 text-sm`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5 font-sans">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Primary Capability Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="input-studio w-full px-4 py-3 rounded-lg bg-[#141414] border border-white/10 text-white text-sm"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Full Growth Suite (All Services)">
                        Full Growth Suite (All Services)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      Project Goals & Context *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand, target audience, and primary growth KPIs..."
                      className={`input-studio w-full px-4 py-3 rounded-lg bg-white/[0.03] border ${
                        errors.message ? 'border-red-500' : 'border-white/10'
                      } text-white placeholder-neutral-600 text-sm resize-none`}
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1 text-xs text-red-400 mt-1.5 font-sans">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full py-4 rounded-full bg-[#F5B90F] hover:bg-[#FFD426] text-black font-display font-bold text-xs uppercase tracking-widest transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer hover:shadow-[0_0_25px_rgba(245,185,15,0.4)] active:scale-98"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
