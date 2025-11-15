// components/ContactInfo.jsx
export default function ContactInfo() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 my-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Information</h2>
      
      <div className="mb-4">
        <h3 className="font-semibold">Phone:</h3>
        <p className="text-gray-700">
          <a href="tel:+918693977777" className="hover:text-blue-500">+91 86939-77777</a>,{" "}
          <a href="tel:+919001144474" className="hover:text-blue-500">+91 90011-44474</a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Email:</h3>
        <p className="text-gray-700">
          <a href="mailto:info@luxurycardrive.in" className="hover:text-blue-500">
            info@luxurycardrive.in
          </a>
        </p>
      </div>

      <div>
        <h3 className="font-semibold">Address:</h3>
        <p className="text-gray-700">
          Plot No -55, Ramesh Nagar, Gokulpura, Jhotwara-302012
        </p>
      </div>
    </div>
  );
}
