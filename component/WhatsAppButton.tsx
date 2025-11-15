// components/WhatsAppButton.jsx
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918693977777" // apna number yaha daal do
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors"
    >
      <img
        src="/3670051.png" // tumhare uploaded whatsapp icon ka path
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
}
