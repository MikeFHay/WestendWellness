import { useState } from "react";
import { Button } from "./ui/button";

const BASIN_ENDPOINT = "https://usebasin.com/f/9b383a047618";

export const WaitlistForm = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(BASIN_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-lg max-w-md mx-auto text-white">
        <p>
          Thanks for signing up, we'll be in touch soon!
        </p>
        <p>
          In the meantime, follow us on Instagram!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3 text-left">
      <input
        type="text"
        name="name"
        required
        placeholder="Name"
        className="rounded-2xl px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Email address"
        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
        title="a valid email address"
        className="rounded-2xl px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number (optional)"
        className="rounded-2xl px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
      />
      <Button type="submit" disabled={status === "submitting"} className="rounded-2xl text-base px-6 py-3 shadow-md">
        {status === "submitting" ? "Signing up..." : "Sign Up"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-white/90">Something went wrong. Please try again.</p>
      )}
    </form>
  );
};
