export default function Services() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p>We build responsive and modern web applications using ReactJS.</p>
        </div>
        <div className="p-6 border rounded hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
          <p>Custom mobile apps for Android and iOS platforms.</p>
        </div>
        <div className="p-6 border rounded hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Software Consulting</h3>
          <p>Expert advice to improve your software development workflow.</p>
        </div>
      </div>
    </div>
  );
}
