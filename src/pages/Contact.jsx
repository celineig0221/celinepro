import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you, " + form.name);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={form.name} 
          onChange={handleChange} 
          className="w-full p-3 border rounded" 
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={form.email} 
          onChange={handleChange} 
          className="w-full p-3 border rounded" 
          required
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={form.message} 
          onChange={handleChange} 
          className="w-full p-3 border rounded" 
          rows="5" 
          required
        ></textarea>
        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500">
          Send Message
        </button>
      </form>
    </div>
  );
}
