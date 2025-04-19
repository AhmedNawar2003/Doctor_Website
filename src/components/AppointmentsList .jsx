import useBookingStore from "../store/bookingStore.js";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import ConfirmModal from "./ConfirmModal";

const AppointmentsList = () => {
  const { appointments, removeAppointment } = useBookingStore();
  const [showConfirm, setShowConfirm] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const handleAskDelete = (appt) => {
    setToDelete(appt);
    setShowConfirm(true);
  };

  const confirmDelete = () => {
    if (toDelete) {
      removeAppointment(toDelete.id);
      setShowConfirm(false);
      setToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setToDelete(null);
  };

  if (appointments.length === 0) {
    return (
      <div className="text-center text-white py-6 md:text-2xl font-semibold capitalize">
        No appointments booked yet.
      </div>
    );
  }

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {appointments.map((appt, i) => (
          <div
            key={i}
            className="bg-[#38bff864] border border-[#38bdf8] p-4 rounded shadow flex items-center"
          >
            <div className="flex flex-col flex-1 mr-4">
              <h4 className="font-bold text-sm md:text-2xl text-green-500">{appt.doctorName}</h4>
              <p className="text-sm md:text-xl text-fuchsia-200">{appt.specialty}</p>
              <p className="text-sm md:text-xl">
                <strong className="text-amber-500">Date:</strong><span className="text-black mx-2">{appt.date}</span>
              </p>
              <p className="text-sm md:text-xl">
                <strong className="text-amber-500">Time:</strong> <span className="text-black mx-2">{appt.time}</span>
              </p>
              <p className="text-sm md:text-xl">
                <strong className="text-amber-500">Location:</strong> <span className="text-black mx-2">{appt.location}</span>
              </p>
              <p className="text-sm md:text-xl">
                <strong className="text-amber-500">Count:</strong> <span className="text-black mx-2">{appt.count}</span>
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img
                src={`/images/${appt.image || "default.png"}`}
                alt={appt.doctorName}
                className="w-16 h-16 object-cover rounded-full border"
              />
              <button
                onClick={() => handleAskDelete(appt)}
                className="cursor-pointer text-red-500 hover:text-red-700 transition duration-200"
                title="Cancel Appointment"
              >
                <FaTrash className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showConfirm && (
        <ConfirmModal
          message="Are you sure you want to cancel this appointment?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </>
  );
};

export default AppointmentsList;
