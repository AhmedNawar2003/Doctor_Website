import { FaCalendarAlt, FaUserMd } from "react-icons/fa";

export default function Header({ setView }) {
  return (
    <header className="bg-[#38bff84a] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 mb-6 p-5">
      <div className="flex items-center gap-2 text-center md:text-left">
        <FaUserMd className="text-white md:text-3xl" />
        <h1 className="md:text-2xl font-bold text-white">
          Doctor Booking System
        </h1>
      </div>
      <div className="space-x-3">
        <button
          onClick={() => setView("doctors")}
          className={
            "button-all px-1 py-2 mb-3 md:mb-0 w-full md:w-fit rounded "
          }
        >
          <span className="flex items-center justify-center gap-2 text-sm md:text-base">
            <FaUserMd />
            Doctors
          </span>
        </button>
        <button
          onClick={() => setView("appointments")}
          className={
            "button-all px-1 py-2 mb-3 md:mb-0 w-full md:w-fit rounded "
          }
        >
          <span className="flex items-center justify-center gap-2 text-sm md:text-base">
            <FaCalendarAlt />
            Appointments
          </span>
        </button>
      </div>
    </header>
  );
}
