import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pshtq1f",
        "template_sv4mlbo",
        form.current,
        "wWcgensZ8UMykx6et"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    swal("Success");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <div>
        <h1 className="text-4xl font-bold text-center text-[#13138297]">
          Contact
        </h1>
      </div>
      <div className="pt-8">
        <form
          action=""
          method="POST"
          onSubmit={handleSubmit}
          data-netlify="true"
          ref={form}
        >
          <div className="p-8">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="p-8">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="p-8">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={subject}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="p-8">
            <label
              htmlFor=""
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
            <div>
              <button
                type="submit"
                className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
