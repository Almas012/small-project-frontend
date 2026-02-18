import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaLock, FaBell, FaSave, FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General', icon: FaGlobe },
    { id: 'security', label: 'Security', icon: FaLock },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200 pb-1 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 font-medium text-sm transition-colors relative ${
              activeTab === tab.id ? 'text-primary' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            <tab.icon />
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
        {activeTab === 'general' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 max-w-2xl"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4">General Settings</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Site Name</label>
                <input type="text" defaultValue="Voyage" className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Support Email</label>
                <input type="email" defaultValue="support@voyage.com" className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Currency</label>
                <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-primary">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Timezone</label>
                <select className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-primary">
                  <option>UTC</option>
                  <option>EST</option>
                  <option>PST</option>
                </select>
              </div>
            </div>
            <div className="pt-4">
              <button className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
                <FaSave /> Save Changes
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === 'security' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 max-w-2xl"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                <div>
                  <h4 className="font-bold text-slate-800">Two-Factor Authentication</h4>
                  <p className="text-xs text-slate-500">Add an extra layer of security to your account.</p>
                </div>
                <button className="text-2xl text-slate-300"><FaToggleOff /></button>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Current Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">New Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-slate-200 rounded-lg text-sm outline-none focus:border-primary" />
              </div>
              <div className="pt-4">
                <button className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
                  <FaSave /> Update Password
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'notifications' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 max-w-2xl"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4">Notification Preferences</h3>
            <div className="space-y-4">
              {[
                { title: 'Email Notifications', desc: 'Receive emails about new bookings and updates.' },
                { title: 'SMS Alerts', desc: 'Get text messages for urgent alerts.' },
                { title: 'Marketing Emails', desc: 'Receive offers and promotions.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl bg-slate-50/50">
                  <div>
                    <h4 className="font-bold text-slate-800">{item.title}</h4>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                  <button className={`text-2xl ${idx === 0 ? 'text-primary' : 'text-slate-300'}`}>
                    {idx === 0 ? <FaToggleOn /> : <FaToggleOff />}
                  </button>
                </div>
              ))}
            </div>
             <div className="pt-4">
              <button className="bg-primary text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-lg shadow-primary/30">
                <FaSave /> Save Preferences
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Settings;
