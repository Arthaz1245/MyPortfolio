import { useState } from "react";
import swal from "sweetalert";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("Success!");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  function validateEmail(e) {
    const validateEmail = e.target.value;
    if (regexEmail.test(validateEmail)) {
      setEmail(true);
    } else {
      setEmail(false);
    }
  }
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={validateEmail}
              required
            />
            {!email ? (
              <h6 className="text-[#f84141] text-center mt-2">
                You need to enter the email
              </h6>
            ) : (
              ""
            )}
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
