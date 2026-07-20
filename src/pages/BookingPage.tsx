import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [classType, setClassType] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [availability, setAvailability] = useState<Record<string, number>>({});

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const sendBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !email || !classType || !bookingDate || !bookingTime) {
      setError("Please complete all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          classType,
          bookingDate,
          bookingTime,
        }),
      });

      if (!response.ok) throw new Error("Booking failed");

      setSuccess(true);
      setName("");
      setEmail("");
      setClassType("");
      setBookingDate("");
      setBookingTime("");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 17; hour++) {
      const time = `${hour.toString().padStart(2, "0")}:00:00`;
      slots.push(time);
    }
    return slots;
  };

  return (
    <div className="min-h-screen bg-[#f8f7f3] text-[#2e2e2e]">
      
      {/* Elegant Intro Section */}
      <section className="bg-[#656948] text-white py-20 text-center px-6">
        <button
          onClick={() => navigate("/")}
          className="text-sm opacity-80 hover:opacity-100 transition mb-6"
        >
          ← Back to Home
        </button>

        <h1 className="text-4xl md:text-5xl font-light tracking-wide">
          Reserve Your Session
        </h1>
        <p className="mt-4 text-lg opacity-80 max-w-xl mx-auto">
          Small-group Pilates designed to strengthen, restore and rebalance.
        </p>
      </section>

      {/* Main Booking Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left Column - Experience */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-light mb-6">
              What to Expect
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>• Small groups (maximum 8 participants)</li>
              <li>• Calm, supportive environment</li>
              <li>• Expert guidance tailored to your level</li>
              <li>• 60-minute focused sessions</li>
            </ul>

            <p className="mt-8 text-sm text-gray-500">
              Sessions run daily between 9am and 5pm.
            </p>
          </div>

          {/* Right Column - Booking Form */}
          <div className="bg-white shadow-xl rounded-3xl p-10">
            <form onSubmit={sendBooking} className="space-y-8">

              {/* Name */}
              <div>
                <label className="text-sm uppercase tracking-wide text-gray-500">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#656948] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm uppercase tracking-wide text-gray-500">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#656948] transition"
                />
              </div>

              {/* Class */}
              <div>
                <label className="text-sm uppercase tracking-wide text-gray-500">
                  Choose Your Session
                </label>
                <select
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                  className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#656948] transition"
                >
                  <option value="">Select a class...</option>
                  <option value="Beginner Pilates">Beginner Pilates</option>
                  <option value="Intermediate Flow">Intermediate Flow</option>
                  <option value="Private 1:1 Session">Private 1:1 Session</option>
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="text-sm uppercase tracking-wide text-gray-500">
                  Booking Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={async (e) => {
                    const selectedDate = e.target.value;
                    setBookingDate(selectedDate);

                    const res = await fetch(
                      `http://localhost:5000/availability?date=${selectedDate}`
                    );
                    const data = await res.json();
                    setAvailability(data);
                  }}
                  className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#656948] transition"
                />
              </div>

              {/* Time */}
              <div>
                <label className="text-sm uppercase tracking-wide text-gray-500">
                  Booking Time
                </label>
                <select
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full border-b border-gray-300 bg-transparent py-3 focus:outline-none focus:border-[#656948] transition"
                >
                  <option value="">Select a time slot...</option>
                  {generateTimeSlots().map((time) => {
                    const count = availability[time] || 0;
                    const isFull = count >= 8;

                    return (
                      <option key={time} value={time} disabled={isFull}>
                        {time.slice(0, 5)}{" "}
                        {isFull ? "(Full)" : `(${8 - count} spots left)`}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-[#656948] text-white py-4 rounded-full tracking-wide hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "Reserving..." : "Confirm Reservation"}
              </button>

              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}

              {success && (
                <p className="text-green-600 text-sm text-center">
                  Reservation confirmed. Please check your email.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} West End Wellness | Perth Road, Dundee
      </footer>
    </div>
  );
}
