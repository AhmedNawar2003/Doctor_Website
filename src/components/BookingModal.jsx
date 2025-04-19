import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaClock } from "react-icons/fa";
import useBookingStore from "../store/bookingStore.js";
import { toast } from "react-toastify";

const BookingModal = ({ doctor, onClose, setView }) => {
  const { addAppointment } = useBookingStore();
  const modalRef = useRef();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const handleConfirm = (slot) => {
    const now = new Date();
    const date = now.toLocaleDateString();

    const appointment = {
      id: uuidv4(),
      doctorName: doctor.name,
      time: slot,
      date,
      location: doctor.location,
      specialty: doctor.specialty,
      image: doctor.image,
    };

    addAppointment(appointment);

    toast.success("Booking confirmed! Check your appointments for details.", {
      position: "top-right",
      autoClose: 2000,
      onClose: () => setView("appointments"),
    });

    onClose();
  };

  return (
    <div className="absolute inset-0 bg-opacity-40 flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-6 rounded shadow-lg w-full max-w-md relative"
      >
        <h3 className="text-sm md:text-lg font-semibold text-black mb-4">
          Book with {doctor.name}
        </h3>

        <ul className="space-y-2">
          {doctor.availableSlots.map((slot, i) => (
            <li key={i}>
              <button
                onClick={() => handleConfirm(slot)}
                className="button-all text-sm md:text-base w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <FaClock />
                {slot}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className=" absolute top-2 right-0 md:right-3 close text-sm md:text-xl cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default BookingModal;
