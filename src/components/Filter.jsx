import { FaSearch, FaCog } from "react-icons/fa";
import Select from "react-select";

export default function Filter({
  selectedSpecialty,
  selectedAvailability,
  onFilterChange,
  specialties = [],
}) {
  const uniqueSpecialties = ["All", ...new Set(specialties)];

  const specialtyOptions = uniqueSpecialties.map((specialty) => ({
    label: specialty === "All" ? "All Specialties" : specialty,
    value: specialty,
  }));

  const availabilityOptions = [
    { label: "All", value: "All" },
    { label: "Available", value: "Available" },
    { label: "Unavailable", value: "Unavailable" },
  ];

  const handleSpecialtyChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : "All";
    onFilterChange({ specialty: selectedValue });
  };

  const handleAvailabilityChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : "All";
    onFilterChange({ availability: selectedValue });
  };

  return (
    <div className=" flex flex-col md:flex-row md:items-center gap-4 mb-6 bg-[#38bff84a] p-4 rounded-lg shadow-md">
      {/* Specialty Filter */}
      <div className="flex flex-col w-full md:w-1/2">
        <label className="mb-1 text-sm text-white font-medium">Specialty</label>
        <div className="flex items-center gap-2">
          <FaSearch className="md:w-5 md:h-5 text-white" />
          <Select
            value={specialtyOptions.find(
              (option) => option.value === selectedSpecialty
            )}
            onChange={handleSpecialtyChange}
            options={specialtyOptions}
            className="w-full text-sm md:text-base"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#333",
                color: "white",
                borderColor: "#38bff8",
                borderRadius: "5px",
                padding: "0.5rem",
                cursor: "pointer",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
            }}
          />
        </div>
      </div>

      {/* Availability Filter */}
      <div className="flex flex-col w-full md:w-1/2">
        <label className="mb-1 text-sm text-white font-medium">
          Availability
        </label>
        <div className="flex items-center gap-2">
          <FaCog className="md:w-5 md:h-5 text-white" />
          <Select
            value={availabilityOptions.find(
              (option) => option.value === selectedAvailability
            )}
            onChange={handleAvailabilityChange}
            options={availabilityOptions}
            className="w-full text-sm md:text-base"
            classNamePrefix="react-select"
            styles={{
              control: (base) => ({
                ...base,
                backgroundColor: "#333",
                color: "white",
                borderColor: "#38bff8",
                borderRadius: "5px",
                padding: "0.5rem",
                cursor: "pointer",
              }),
              singleValue: (base) => ({
                ...base,
                color: "white",
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
}
