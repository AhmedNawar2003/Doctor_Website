export default function Footer() {
  return (
    <>
      <div className="text-center bg-[#38bff84a] text-white mt-6 py-4 ">
        <p className="text-sm md:text-lg mx-2">
          &copy; {new Date().getFullYear()} Doctor Booking System. All rights
          reserved.
        </p>
      </div>
    </>
  );
}
