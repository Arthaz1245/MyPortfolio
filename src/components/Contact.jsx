import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";
import SectionTitle from "./SectionTitle";

const inputClass =
  "block w-full rounded-lg border border-white/10 bg-surface px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/40";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sergiomendoza-softwareengineer/",
    icon: <AiFillLinkedin size={20} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/Arthaz1245",
    icon: <AiFillGithub size={20} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/sergiomendozap3",
    icon: <AiFillTwitterCircle size={20} />,
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      swal(
        "Success",
        "Your message has been sent. I'll get back to you soon!",
        "success"
      );
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error(error);
      swal(
        "Error",
        "Something went wrong. Please try again or reach me directly on LinkedIn.",
        "error"
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container-section">
        <SectionTitle
          overline="Contact"
          title="Let&apos;s work together"
          subtitle="Have a project in mind or just want to say hi? Drop me a message and I&apos;ll get back to you."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="leading-relaxed text-slate-400">
              I&apos;m currently open to new opportunities and interesting
              projects. Whether it&apos;s a full product, a feature, or a quick
              question, I&apos;d love to hear from you.
            </p>
            <div className="mt-8">
              <h3 className="font-heading text-lg font-semibold text-white">
                Find me online
              </h3>
              <div className="mt-4 flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-all duration-200 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-glow"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} ref={form} className="space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Your name"
                className={inputClass}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="you@example.com"
                className={inputClass}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                placeholder="What is this about?"
                className={inputClass}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                placeholder="Write your message here..."
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className={inputClass}
                required
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="btn-primary w-full disabled:opacity-60"
            >
              {sending ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
