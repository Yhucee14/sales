'use client';

import {
    BarChart3,
    Users,
    DollarSign,
    Settings,
    ShoppingCart,
    Target,
    UserCheck
} from 'lucide-react';


const CustomHomeIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className={props.className}
        {...props}
    >
        <path
            fill="currentColor"
            fillOpacity="0.3"
            d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
        />
        <path
            fill="currentColor"
            d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
        />
        <path
            fill="currentColor"
            d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
        />
        <path
            fill="currentColor"
            d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
        />
    </svg>
);

const CustomLogo = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200.39 112.97"
        className={props.className}
        {...props}
    >
        <g data-name="Layer 2">
            <g data-name="Layer 1">
                <path
                    d="M199.54,103.9l-60.27-101a6,6,0,0,0-8.87-1.64L2.3,102.26A6,6,0,0,0,6,113H28.33a6,6,0,0,0,3.72-1.29l91.24-71.9a6,6,0,0,1,8.86,1.64L154,78.06a6,6,0,0,1-5.16,9.08H121.13a6,6,0,0,0-3.69,1.26L99.68,102.24A6,6,0,0,0,103.37,113h91A6,6,0,0,0,199.54,103.9Z"
                    fill="currentColor"
                />
            </g>
        </g>
    </svg>
);

const CustomBagIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    {...props}
  >
    <path
      d="M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z"
      fill="currentColor"
      fillOpacity="0.3"
    />
    <path
      d="M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <path
      d="M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5"
      stroke="currentColor"
      strokeLinecap="round"
    />
    <rect x="4" y="8" width="16" height="3" rx="1" fill="currentColor" />
    <path
      d="M12 11V15"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

const CustomGridIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    {...props}
  >
    <path
      d="M9.85714 3H4.14286C3.51167 3 3 3.51167 3 4.14286V9.85714C3 10.4883 3.51167 11 4.14286 11H9.85714C10.4883 11 11 10.4883 11 9.85714V4.14286C11 3.51167 10.4883 3 9.85714 3Z"
      fill="currentColor"
    />
    <path
      d="M9.85714 12.8999H4.14286C3.51167 12.8999 3 13.4116 3 14.0428V19.757C3 20.3882 3.51167 20.8999 4.14286 20.8999H9.85714C10.4883 20.8999 11 20.3882 11 19.757V14.0428C11 13.4116 10.4883 12.8999 9.85714 12.8999Z"
      fill="currentColor"
      fillOpacity="0.3"
    />
    <path
      d="M19.757 3H14.0428C13.4116 3 12.8999 3.51167 12.8999 4.14286V9.85714C12.8999 10.4883 13.4116 11 14.0428 11H19.757C20.3882 11 20.8999 10.4883 20.8999 9.85714V4.14286C20.8999 3.51167 20.3882 3 19.757 3Z"
      fill="currentColor"
      fillOpacity="0.3"
    />
    <path
      d="M19.757 12.8999H14.0428C13.4116 12.8999 12.8999 13.4116 12.8999 14.0428V19.757C12.8999 20.3882 13.4116 20.8999 14.0428 20.8999H19.757C20.3882 20.8999 20.8999 20.3882 20.8999 19.757V14.0428C20.8999 13.4116 20.3882 12.8999 19.757 12.8999Z"
      fill="currentColor"
      fillOpacity="0.3"
    />
  </svg>
);




const Navbar = ({ activeTab, setActiveTab }) => {
    const topNavItems = [
        { id: 'overview', label: 'Overview', icon: CustomHomeIcon },
        { id: 'sales', label: 'Sales', icon: CustomBagIcon },
        { id: 'Prototypes', label: 'Prototypes', icon: CustomGridIcon },
        { id: 'customers', label: 'Customers', icon: Users },
        { id: 'analytics', label: 'Analytics', icon: BarChart3 },
        { id: 'targets', label: 'Targets', icon: Target },
    ];

    const bottomNavItems = [
        { id: 'settings', icon: Settings },
        { id: 'team', label: 'Team', icon: UserCheck },
    ];

    return (
        <nav className="flex flex-col justify-between h-screen w-20 bg-white shadow-lg border-r border-gray-100">
            <div>
                <div className="p-6 border-gray-100 ">
                    <CustomLogo className="w-8 h-8 text-sky-600 " />
                </div>
                <div className="py-4 flex flex-col gap-1">
                    {topNavItems.map(({ id, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`flex justify-center py-3 hover:bg-gray-100 ${activeTab === id ? 'bg-blue-50 text-blue-600 border-blue-500' : 'text-gray-600'
                                }`}
                        >
                            <Icon className="h-6 w-6" />
                        </button>
                    ))}
                </div>
            </div>
            <div className="py- flex flex-col gap-1">
                {bottomNavItems.map(({ id, icon: Icon }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`flex justify-center py-3 hover:bg-gray-100 ${activeTab === id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-500' : 'text-gray-600'
                            }`}
                    >
                        <Icon className="h-5 w-5" />
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
