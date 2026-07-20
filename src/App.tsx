import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import logo from "./assets/logo.jpg";

export default function WestEndWellness() {
  const navigate = useNavigate();
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
          A welcoming Pilates studio on Perth Road, Dundee. Strengthen your body, improve flexibility, and restore balance in a calm, supportive environment.
        </p>
        <Button onClick={() => navigate("/booking")} className="rounded-2xl text-base px-6 py-3 shadow-md">
          Book a Session
        </Button>
      </section>

      {/* About Section */}
      <section className="bg-[#f8f7f3] text-gray-900 py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About Our Studio</h2>
            <p className="mb-4">
              At West End Wellness, we specialise in small-group and one-to-one Pilates classes designed to build core strength, improve posture, and enhance overall wellbeing.
            </p>
            <p>
              Whether you are a beginner or experienced practitioner, our supportive instructors will guide you through safe and effective sessions tailored to your needs.
            </p>
          </div>
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Perth Road, Dundee</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <span>Small Group & Private Sessions</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>Flexible Weekly Schedule</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Classes Section */}
      <section className="bg-[#f8f7f3] text-gray-900 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Classes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Pilates",
                desc: "Perfect for those new to Pilates. Focus on fundamentals, posture, and gentle strength building.",
              },
              {
                title: "Intermediate Flow",
                desc: "A dynamic class designed to challenge strength, coordination, and flexibility.",
              },
              {
                title: "Private 1:1 Sessions",
                desc: "Personalised sessions tailored to rehabilitation, injury prevention, or specific goals.",
              },
            ].map((cls, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="rounded-2xl shadow-lg h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                    <p>{cls.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="bg-[#f8f7f3] text-gray-900 py-10 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Meet Our Instructors</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Emma Fraser",
              bio: "Certified Pilates instructor with over 10 years of experience specialising in rehabilitation and posture correction.",
            },
            {
              name: "Sophie McLeod",
              bio: "Passionate about mindful movement and helping clients build confidence through strength and flexibility training.",
            },
          ].map((inst, i) => (
            <Card key={i} className="rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{inst.name}</h3>
                <p>{inst.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} West End Wellness | Perth Road, Dundee
      </footer>
    </div>
  );
}
