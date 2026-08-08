import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const inputClass =
  "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

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
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div>
        <h1 className="text-4xl font-bold text-center text-[#13138297]">
          Contact
        </h1>
      </div>
      <div className="pt-8">
        <form onSubmit={handleSubmit} ref={form}>
          <div className="p-8">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
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
          <div className="p-8">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
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
          <div className="p-8">
            <label
              htmlFor="subject"
              className="block text-sm font-medium leading-6 text-gray-900"
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
          <div className="p-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              placeholder="Write your message here..."
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className={inputClass}
              required
            />
            <div>
              <button
                type="submit"
                disabled={sending}
                className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
