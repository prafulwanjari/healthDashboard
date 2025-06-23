import { useState } from 'react';
import {
  Search, Bell, Plus, ChevronLeft, ChevronRight,
  Calendar, BarChart3, MessageCircle, HelpCircle,
  Settings, Heart, Eye, Activity, Brain, Menu,
} from 'lucide-react';

function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(30);

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Calendar, label: 'History' },
    { icon: Calendar, label: 'Calendar' },
    { icon: Calendar, label: 'Appointments' },
    { icon: BarChart3, label: 'Statistics' },
    { icon: MessageCircle, label: 'Chat' },
    { icon: HelpCircle, label: 'Support' },
    { icon: Settings, label: 'Setting' }
  ];

  const healthMetrics = [
    { name: 'Lungs', date: '26 Oct 2024', progress: 75, color: 'bg-red-400', icon: '🫁' },
    { name: 'Teeth', date: '26 Oct 2024', progress: 60, color: 'bg-green-400', icon: '🦷' },
    { name: 'Bone', date: '26 Oct 2024', progress: 45, color: 'bg-orange-400', icon: '🦴' }
  ];

  const calendarDays = [
    { day: 25, time: ['10:00', '11:00', '12:00'] },
    { day: 26, time: ['08:00', '09:00', '10:00'] },
    { day: 27, time: ['12:00', '13:00'] },
    { day: 28, time: ['10:00', '11:00'] },
    { day: 29, time: ['—', '14:00', '16:00'] },
    { day: 30, time: ['12:00', '14:00', '15:00'], active: true },
    { day: 31, time: ['09:00', '10:00', '11:00'] }
  ];

  const appointments = [
    {
      title: 'Dentist', time: '09:00-11:00', doctor: 'Dr. Cameron Williamson',
      icon: '🦷', color: 'bg-blue-600 text-white'
    },
    {
      title: 'Physiotherapy Appointment', time: '11:00-12:00', doctor: 'Dr. Kevin Djones',
      icon: '💪', color: 'bg-purple-100 text-purple-800'
    }
  ];

  const upcomingSchedule = [
    {
      day: 'Thursday', appointments: [
        { title: 'Health checkup complete', time: '11:00 AM', icon: '📋', color: 'bg-purple-100' },
        { title: 'Ophthalmologist', time: '14:00 PM', icon: '👁️', color: 'bg-orange-100' }
      ]
    },
    {
      day: 'Saturday', appointments: [
        { title: 'Cardiologist', time: '12:00 AM', icon: '❤️', color: 'bg-red-100' },
        { title: 'Neurologist', time: '16:00 PM', icon: '🧠', color: 'bg-green-100' }
      ]
    }
  ];

  const activityData = [
    { day: 'Mon', value: 20 },
    { day: 'Tues', value: 65 },
    { day: 'Wed', value: 35 },
    { day: 'Thurs', value: 80 },
    { day: 'Fri', value: 45 },
    { day: 'Sat', value: 90 },
    { day: 'Sun', value: 55 }
  ];

  return (


    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 w-full bg-opacity-40 z-30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed z-40 lg:static top-0 left-0 min-h-screen w-64 bg-white shadow-md transform transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-cyan-400">Health</span>
            <span className="text-gray-800">care.</span>
          </h1>
          <button
            className="lg:hidden text-gray-500"
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="px-4">
          <div className="text-sm text-gray-500 mb-4 uppercase tracking-wide">General</div>
          <nav className="space-y-2">
            {sidebarItems.map((item, i) => (
              <div
                key={i}
                onClick={() => setIsMobileSidebarOpen(false)}
                className={`flex items-center px-4 py-3 rounded-lg cursor-pointer transition-colors
                  ${item.active ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}

        <header className="bg-white shadow-sm border-b px-4 md:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-gray-600"
              onClick={() => setIsMobileSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative hidden md:block">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Bell className="w-6 h-6 text-gray-600 hidden md:block" />
            <div className="w-9 h-9 bg-cyan-400 rounded-full flex items-center justify-center text-white">👤</div>
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
              <Plus className="w-4 h-4 text-white " />
            </div>
          </div>
        </header>
        {/* Dashboard Grid */}
        <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Human Body */}
          <div className="lg:col-span-4 bg-white rounded-xl shadow-sm p-4">
            {/* Body and Metrics */}
            <div className="relative text-center">
              <div className="w-48 mx-auto mb-6">
                <img
                  src="https://t4.ftcdn.net/jpg/02/47/48/75/360_F_247487529_DFLkaxZ4FN8p4QelAjP9ZH5cWTJJNYaR.jpg"
                  alt="Human Body"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                <Heart className="w-4 h-4 inline mr-1" /> Healthy Heart
              </div>
              <div className="absolute -bottom-6 left-0 bg-cyan-400 text-white text-xs px-2 py-1 rounded-full">📊 Healthy Log</div>

              <div className="mt-6 space-y-3 text-left">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🫁</span>
                    <div>
                      <h4 className="font-medium">Lungs</h4>
                      <p className="text-sm text-gray-500">23 june 2025</p>
                    </div>
                  </div>
                  <div className="w-24 h-2 bg-gray-200 rounded-full">
                    <div className="bg-red-400 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
              <button className="text-sm text-blue-600 mt-4">Details →</button>
            </div>
          </div>



          {/* Calendar */}
          <div className="lg:col-span-5 bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-sm text-gray-500">This Week</p>
                <h3 className="text-lg font-bold">October 2024</h3>
              </div>
              <div className="flex gap-2">
                <ChevronLeft className="text-gray-400 cursor-pointer" />
                <ChevronRight className="text-gray-400 cursor-pointer" />
              </div>
            </div>
            <div className="grid grid-cols-7 gap-2 text-sm text-center text-gray-600 mb-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => <div key={i}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center mb-6">
              {calendarDays.map((d, i) => (
                <div key={i}>
                  <div className={`mb-1 w-8 h-8 mx-auto rounded-lg flex items-center justify-center font-semibold ${d.active ? 'bg-blue-600 text-white' : 'text-gray-900'}`}>
                    {d.day}
                  </div>
                  <div className="space-y-1">
                    {d.time.map((t, j) => (
                      <div key={j} className="bg-gray-100 text-xs rounded px-1">{t}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Appointments */}
            <div className="grid sm:grid-cols-2 gap-3">
              {appointments.map((apt, i) => (
                <div key={i} className={`p-3 rounded-xl ${apt.color}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xl">{apt.icon}</span>
                    <span className="text-sm">{apt.time}</span>
                  </div>
                  <h4 className="font-semibold">{apt.title}</h4>
                  <p className="text-sm">{apt.doctor}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Schedule */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-4">
            <h3 className="text-lg font-bold mb-4">The Upcoming Schedule</h3>
            {upcomingSchedule.map((s, i) => (
              <div key={i} className="mb-4">
                <h4 className="text-sm text-gray-600 mb-2">On {s.day}</h4>
                <div className="space-y-2">
                  {s.appointments.map((a, j) => (
                    <div key={j} className={`p-3 rounded-lg ${a.color} flex items-center justify-between`}>
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{a.icon}</span>
                        <div>
                          <h5 className="font-medium">{a.title}</h5>
                          <p className="text-sm text-gray-600">{a.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Activity Chart */}
          <div className="lg:col-span-6 bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-bold">Activity</h3>
              <span className="text-sm text-gray-500">5 appointments on this week</span>
            </div>
            <div className="flex items-end justify-between h-48">
              {activityData.map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="w-full h-36 bg-gray-100 relative rounded-lg overflow-hidden mb-2">
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-400 to-blue-500" style={{ height: `${(item.value / 100) * 150}px` }}></div>
                  </div>
                  <span className="text-sm">{item.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <Heart className="w-6 h-6" />
                <span className="text-xl font-bold">98</span>
              </div>
              <h4 className="font-semibold">Heart Rate</h4>
              <p className="text-blue-100 text-sm">BPM</p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <Activity className="w-6 h-6" />
                <span className="text-xl font-bold">87%</span>
              </div>
              <h4 className="font-semibold">Blood Oxygen</h4>
              <p className="text-green-100 text-sm">SpO2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
