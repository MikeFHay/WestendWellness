import { motion } from "framer-motion";
import logo from "./assets/logo.jpg";
import { WaitlistForm } from "./components/WaitlistForm";

export default function WestEndWellness() {
  return (
    <div className="min-h-screen bg-[#f8f7f3] text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[#5F6446] py-5 px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold mb-4"
        >
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt="West End Wellness Logo"
              className="w-48 md:w-64 mb-6"
            />
          </div>
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-white">
          A welcoming Pilates and wellness studio on Perth Road, Dundee. Strengthen your body, improve flexibility, and restore balance in a calm, supportive environment.
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-white font-semibold">
          Opening soon. Sign up to the mailing list to receive early bird offers.
        </p>
        <WaitlistForm />
      </section>

      {/* About Section */}
      <section className="bg-[#f8f7f3] text-gray-900 py-6 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
        Click below to follow us on Instagram
        <a href="https://www.instagram.com/westendwellnessdundee" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-semibold hover:underline text-lg" >
        @westendwellnessdundee
          <img src="/wew_insta_qr.png" alt="West End Wellness Instagram QR Code" className="m-2" />
        </a>
      </section>
    </div>
  );
}
