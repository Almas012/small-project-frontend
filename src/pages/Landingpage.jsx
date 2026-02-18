import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaWifi, FaChair, FaClock, FaShieldAlt, FaStar, FaChevronDown, FaChevronUp, FaTicketAlt } from 'react-icons/fa';
import FloatingLines from '../components/FloatingLines';
import busImg from '../assets/bus.png';
import ScrollToTop from '../components/ScrollToTop';

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "How do I book a ticket?", a: "Simply enter your departure and destination cities, select a date, and click search. Choose your bus and seat, then proceed to payment." },
    { q: "Can I cancel my ticket?", a: "Yes, tickets can be cancelled through the 'My Bookings' section. Cancellation charges may apply based on the time of cancellation." },
    { q: "Is it safe to travel during the night?", a: "Absolutely. Our buses are equipped with GPS tracking and emergency support 24/7." },
    { q: "Do I need to print my ticket?", a: "No, an m-ticket on your mobile device is sufficient for boarding." }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-lg">{faq.q}</span>
                {openFaq === idx ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-slate-400" />}
              </button>
              <AnimatePresence>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const enabledWaves = useMemo(() => ["top", "middle", "bottom"], []);

  return (
    <div className="w-full bg-slate-50">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="w-full relative min-h-[90vh] flex items-center justify-center bg-slate-900 pt-20 overflow-y-hidden">

       <div className="absolute inset-0 z-0 w-full overflow-hidden">

          <FloatingLines 
            enabledWaves={enabledWaves}
            lineCount={5}
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white font-semibold text-sm mb-6 backdrop-blur-sm border border-white/20">
                🚀 The Smartest Way to Travel
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Your Journey, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Reimagined.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience seamless bus booking with premium amenities, real-time tracking, and 24/7 support.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="w-full bg-gradient-to-b from-primary/10 to-slate-50">
      {/* Booking Widget */}
      <div id="booking" className="relative z-20  container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-b from-primary/10 to-slate-50 rounded-3xl shadow-2xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100"
        >
          <form className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-black ml-1">From</label>
              <div className="relative group">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-primary group-focus-within:text-primary-dark transition-colors" />
                <input type="text" placeholder="Departure City" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 font-medium placeholder:text-slate-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-black ml-1">To</label>
              <div className="relative group">
                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-light group-focus-within:text-primary transition-colors" />
                <input type="text" placeholder="Destination City" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 font-medium placeholder:text-slate-400" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-black ml-1">Date</label>
              <div className="relative group">
                <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-800 font-medium" />
              </div>
            </div>
            <div className="flex items-end">
              <button type="button" className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transform active:scale-[0.98]">
                <FaSearch /> Search Buses
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Offers Section */}
      <section id="offers" className="py-24 container mx-auto px-4 overflow-hidden">

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
             <img src={busImg} alt="Bus Offers" loading="lazy" className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-blue-900/20" />
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-left mb-8"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Exclusive Offers</h2>
                <p className="text-slate-500 text-lg">Save more on your next trip with our limited-time deals and discounts.</p>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
            >
                {[
                    { title: "First Ride Special", code: "NEW50", discount: "50% OFF", desc: "Get 50% off on your first booking with us.", color: "from-blue-500 to-blue-600" },
                    { title: "Summer Vacation", code: "SUMMER25", discount: "25% OFF", desc: "Enjoy the summer with a cool 25% discount.", color: "from-primary to-primary-dark" },
                    { title: "Return Trip Deal", code: "BACK10", discount: "10% OFF", desc: "Book a round trip and save extra on return.", color: "from-rose-500 to-rose-600" },
                ].map((offer, idx) => (
                    <motion.div key={idx} variants={fadeInUp} className={`relative overflow-hidden rounded-2xl p-6 text-white shadow-xl bg-gradient-to-r ${offer.color} group cursor-pointer flex items-center justify-between hover:shadow-2xl  transition-all duration-300`}>
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
                        <div className="relative z-10 flex-1 pr-4">
                            <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">{offer.title}</div>
                            <div className="text-3xl font-extrabold mb-1">{offer.discount}</div>
                            <p className="text-white/90 text-sm">{offer.desc}</p>
                        </div>
                        <div className="relative z-10 flex flex-col items-center justify-center gap-2 min-w-[100px]">
                            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30 border-dashed text-sm font-mono font-bold tracking-widest whitespace-nowrap">
                                {offer.code}
                            </div>
                            <div className="flex items-center gap-1 text-xs opacity-80">
                                <FaTicketAlt /> <span>Use Code</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
  id="features"
  className="py-24 bg-slate-100/70"
>

        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Voyage?</h2>
                <p className="text-slate-500 max-w-2xl mx-auto">We prioritize your comfort and safety above all else.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <FaWifi />, title: 'Free Wifi', desc: 'Stay connected with high-speed internet on board.' },
                    { icon: <FaChair />, title: 'Reclining Seats', desc: 'Relax in our extra-legroom reclining seats.' },
                    { icon: <FaClock />, title: 'On Time', desc: 'Punctual departures and arrivals, guaranteed.' },
                    { icon: <FaShieldAlt />, title: 'Safe Travel', desc: 'Sanitized buses and trained professional drivers.' },
                ].map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 group"
                    >
                        <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center text-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-24 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Loved by Travelers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50"
                >
                    <div className="flex text-yellow-400 mb-4 gap-1">
                        {[...Array(5)].map((_, star) => <FaStar key={star} size={14} />)}
                    </div>
                    <p className="text-slate-600 mb-6 italic leading-relaxed">"Absolutely the best bus service I've used. The seats were incredibly comfortable and the staff was very helpful."</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                            <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">Alex Morgan</h4>
                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Frequent Traveler</p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* FAQs */}
      <FaqSection />
      </div>
    </div>
  );
};

export default LandingPage;
