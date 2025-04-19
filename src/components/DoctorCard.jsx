import { useState } from "react";
import { FaStar, FaMapPin } from "react-icons/fa"; 
import BookingModal from "./BookingModal";

const DoctorCard = ({ doctor,setView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#38bff864] border border-[#38bdf8] rounded-lg p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl duration-500 cursor-pointer relative">
      <div className="flex items-center gap-4 mb-3">
        <img
          src={`/images/${doctor.image}`}
          alt={doctor.name}
          className="w-16 h-16 object-cover rounded-full border"
        />
        <div>
          <h2 className="text-sm md:text-2xl font-semibold text-black">{doctor.name}</h2>
          <p className="text-fuchsia-200 text-sm md:text-lg">{doctor.specialty}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-yellow-500 mb-1">
        <FaStar className="w-4 h-4 text-yellow-500" /> 
        <span>{doctor.rating}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-700 mb-3">
        <FaMapPin className="w-4 h-4 text-black" />{" "}
        <span className="text-yellow-500">{doctor.location}</span>
      </div>

      <p
        className={`text-sm font-medium mt-1 ${
          doctor.available ? "text-green-500" : "text-red-500"
        }`}
      >
        {doctor.available ? "Available" : "Unavailable"}
      </p>

      <button
        className="button-all mt-3 bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 disabled:opacity-50 text-sm md:text-base"
        onClick={() => setIsModalOpen(true)}
        disabled={!doctor.available}
      >
        Book Appointment
      </button>

      {isModalOpen && (
        <BookingModal doctor={doctor} onClose={() => setIsModalOpen(false)} setView={setView}/>
      )}
    </div>
  );
};

export default DoctorCard;
