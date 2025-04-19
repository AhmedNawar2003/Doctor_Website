import { create } from "zustand";

const useBookingStore = create((set) => ({
  appointments: JSON.parse(localStorage.getItem("appointments")) || [],

  addAppointment: (appointment) => {
    set((state) => {
      const existingAppointment = state.appointments.find(
        (appt) =>
          appt.doctorName === appointment.doctorName &&
          appt.time === appointment.time
      );

      if (existingAppointment) {
        const updatedAppointments = state.appointments.map((appt) =>
          appt.id === existingAppointment.id
            ? { ...appt, count: appt.count + 1 }
            : appt
        );

        localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

        return { appointments: updatedAppointments };
      }

      const newAppointments = [...state.appointments, { ...appointment, count: 1 }];
      
      localStorage.setItem("appointments", JSON.stringify(newAppointments));

      return { appointments: newAppointments };
    });
  },

  removeAppointment: (id) => {
    set((state) => {
      const updatedAppointments = state.appointments.filter((appt) => appt.id !== id);
      
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

      return { appointments: updatedAppointments };
    });
  },
}));

export default useBookingStore;
