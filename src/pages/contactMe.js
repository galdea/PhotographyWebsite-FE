import React from 'react';

const ContactMe = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]),
      )
      .join('&');
  }

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => {
        alert('Message sent, I will be contacting you soon!');
        window.location.reload();
      })
      .catch((error) => alert(error));
  }

  return (
    <form
      netlify
      name="contact"
      onSubmit={handleSubmit}
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
    >
      <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
        Let's talk
      </h2>
      <p className="leading-relaxed mb-5">Name</p>
      <div className="relative mb-4">
        <label
          htmlFor="name"
          className="leading-7 text-sm text-gray-400"
        ></label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
          {' '}
          Message{' '}
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      ></button>
    </form>
  );
};

export default ContactMe;
