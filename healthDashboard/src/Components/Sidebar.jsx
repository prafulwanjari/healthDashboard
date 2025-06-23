import React from 'react'

const Sidebar = () => {
    

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
    return (
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
    )
}

export default Sidebar