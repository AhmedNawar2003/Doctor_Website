import { useState } from "react";
import doctorsData from "./data/doctors.json";
import DoctorCard from "./components/DoctorCard.jsx";
import AppointmentsList from "./components/AppointmentsList .jsx";
import Filter from "./components/Filter.jsx";
import AnimatedBackground from "./components/AnimatedBackground";

import { ToastContainer } from "react-toastify";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {
  const [view, setView] = useState("doctors");
  const [filters, setFilters] = useState({
    specialty: "All",
    availability: "All",
  });

  const specialties = [...new Set(doctorsData.map((doc) => doc.specialty))]; 

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchSpec =
      filters.specialty === "All" || doc.specialty === filters.specialty;
    const matchAvail =
      filters.availability === "All" ||
      (filters.availability === "Available" && doc.available) ||
      (filters.availability === "Unavailable" && !doc.available);

    return matchSpec && matchAvail;
  });

  return (
    <>
      <AnimatedBackground />
      <ToastContainer />
      <div className="max-w-6xl mx-auto">
        <Header view={view} setView={setView} />
        {view === "doctors" && (
          <>
            <Filter
              selectedSpecialty={filters.specialty}
              selectedAvailability={filters.availability}
              onFilterChange={(newFilter) =>
                setFilters((prev) => ({ ...prev, ...newFilter }))
              }
              specialties={specialties}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {filteredDoctors.map((doc) => (
                <DoctorCard key={doc.id} doctor={doc} setView={setView} />
              ))}
            </div>
          </>
        )}
        {view === "appointments" && <AppointmentsList />}
      </div>
      <Footer />
    </>
  );
};

export default App;
