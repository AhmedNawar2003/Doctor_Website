import { useEffect, useState } from "react";

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // trigger the animation
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onCancel, 300); // wait for animation
  };

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-[#000000cc] to-[#1a1a2e88] flex items-center justify-center z-50 transition-opacity duration-300`}>
      <div
        className={`bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center transform transition-all duration-300 ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <p className="text-sm md:text-lg font-semibold text-gray-800 mb-4">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-all duration-500 text-sm md:text-base cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 transition-all duration-500 text-sm md:text-base cursor-pointer"
          >
            Yes, Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
