import { useState } from "react";
import { Send, Mail, Phone, Linkedin, Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const contactInfo = [
  {
    icon: Mail,
    label: "thirupathaiahjodu0421@gmail.com",
    href: "mailto:thirupathaiahjodu0421@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 9347117047",
    href: "tel:+919347117047",
  },
  {
    icon: Linkedin,
    label: "linkedin.com/in/jodu-thirupathaiah",
    href: "https://www.linkedin.com/in/jodu-thirupathaiah-738636270",
  },
  {
    icon: Github,
    label: "github.com/thirupathaiahjodu",
    href: "https://github.com/thirupathaiahjodu",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Open email client with message
    const mailtoLink = `mailto:thirupathaiahjodu0421@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message} (%0AFrom: ${form.email})`;
    window.location.href = mailtoLink;

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" title="Contact Me">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Contact Info */}
        <div className="space-y-6">

          <p className="text-muted-foreground leading-relaxed">
            I'm a Python Full Stack Developer open to internship and full-time opportunities.
            Feel free to contact me for collaborations or job opportunities.
          </p>

          <div className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Icon size={18} className="text-primary" />
                </div>

                <span className="text-sm">{label}</span>
              </a>
            ))}
          </div>

        </div>

        {/* Contact Form */}
        <div className="glass rounded-2xl p-6 sm:p-8 neon-border">
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50"
            />

            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 resize-none"
            />

            <button
              type="submit"
              className="w-full gradient-btn text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90"
            >
              <Send size={16} />
              Send Message
            </button>

          </form>
        </div>

      </div>
    </SectionWrapper>
  );
};

export default Contact;
