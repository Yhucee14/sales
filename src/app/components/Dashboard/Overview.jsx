import {
    ArrowLeft,
    Menu,
    Bell,
    Globe,
    User, Search, Loader2
} from 'lucide-react';
import Products from './Products';
import SalesReport from './SalesReport';
import TeamActivity from './TeamActivity';
import SocialAndCountrySource from './SocialAndCountrySource';

const Overview = ({ isPanelOpen, setIsPanelOpen, setActiveTab }) => {
    const handleMenuClick = () => {
        setActiveTab("Dashboards"); // default 
        setIsPanelOpen(true);       // open the panel
    };

    const handleCloseClick = () => {
        setIsPanelOpen(false);
    };

    return (
        <div className="space-y-4 ">
            <div className="flex items-center justify-between bg-white px-12 py-4 shadow-sm border border-gray-100">

                <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12">
                        <button
                            onClick={handleMenuClick}
                            className={`absolute inset-0 flex items-center justify-center p-2 rounded hover:bg-gray-100 transition-all duration-300 transform
            ${isPanelOpen ? "opacity-0 scale-75 pointer-events-none" : "opacity-100 scale-100"}`}
                        >
                            <Menu className="h-12 w-12 text-gray-700" />
                        </button>

                        <button
                            onClick={handleCloseClick}
                            className={`absolute inset-0 flex items-center justify-center p-2 rounded hover:bg-gray-100 transition-all duration-300 transform
            ${isPanelOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
                        >
                            <ArrowLeft className="h-12 w-12 text-gray-700" />
                        </button>
                    </div>
                </div>

                <div className='flex  space-x-6'>
                    <div className="relative w-64 ">
                        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <Loader2 className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 " />
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded hover:bg-gray-100 transition">
                            <Bell className="h-5 w-5 text-gray-700" />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-100 transition">
                            <User className="h-5 w-5 text-gray-700" />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-100 transition">
                            <Globe className="h-5 w-5 text-gray-700" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid  px-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Sales</p>
                            <p className="text-2xl font-semibold text-sky-600">6.5k</p>
                        </div>

                        <div className='p-2 bg-sky-100 rounded-2xl'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 w-8 text-sky-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                                />
                            </svg>
                        </div>

                    </div>

                    <div className='flex '>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-4 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg>
                        </div>
                        <div>
                            <p className="text-sm px-0.5 text-green-600 mt-3">4.3%</p>
                        </div>

                    </div>

                </div>


                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Customers</p>
                            <p className="text-xl font-semibold text-amber-500">12k</p>
                        </div>
                        <div className='p-2 bg-amber-100 rounded-2xl'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="#FF5733"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                                />
                            </svg>

                        </div>
                    </div>
                    <div className='flex '>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-4 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg>
                        </div>
                        <div>
                            <p className="text-sm px-0.5 text-green-600 mt-3">7.2%</p>
                        </div>

                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Products</p>
                            <p className="text-2xl font-semibold text-green-600">47k</p>
                        </div>

                        <div className='p-2 bg-gray-200 rounded-2xl'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6 text-green-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                                />
                            </svg>

                        </div>
                    </div>
                    <div className='flex '>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-4 text-green-600"><path strokeLinecap="round" strokeline="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg>
                        </div>
                        <div>
                            <p className="text-sm px-0.5 text-green-600 mt-3">8%</p>
                        </div>

                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-300">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm font-medium text-gray-600">Revenue</p>
                            <p className="text-2xl font-semibold text-[#b8008c]">$128k</p>
                        </div>
                        <div className='p-2 bg-[#fbc8ef8f] rounded-2xl'>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6 text-[#b8008c]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                            </svg>

                        </div>
                    </div>
                    <div className='flex '>
                        <div className='mt-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="size-4 text-green-600"><path strokeLinecap="round" strokeline="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"></path></svg>
                        </div>
                        <div>
                            <p className="text-sm px-0.5 text-green-600 mt-3">3.69%</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex px-14 py-5 justify-between gap-4'>
                <div className='w-[70%]'>
                    <SalesReport />
                </div>
                <div className='flex w-[30%] gap-2'>
                    <div className='flex flex-col justify-between '>
                        <div className="flex flex-col rounded-lg border border-gray-300">
                            <div>
                                <p className='py-2 px-2'>Earning</p>
                                <p className="text-xl  px-2 font-semibold ">$16.4k</p>
                            </div>

                            <div className="h-[100px]">
                                <img src='/short.png' alt="Brand" className=" object-contain" />
                            </div>
                        </div>
                        <div className='flex rounded-lg border  border-gray-300'>
                            <div className="">
                                <img src='/rating.png' alt="Brand" className="w-full object-contain" />
                            </div>
                            <p className='flex justify-center items-center text-lg font-medium'>Closed Orders</p>
                        </div>
                    </div>

                    <div className='flex  flex-col justify-between gap-2'>
                        <div className='flex rounded-lg border  border-gray-300'>
                            <div className="">
                                <img src='/rating.png' alt="Brand" className="w-full object-contain" />
                            </div>
                            <p className='flex justify-center items-center text-lg font-medium'>Closed Orders</p>
                        </div>
                        <div>
                            <div className="flex mt-2 flex-col rounded-lg border border-gray-200">
                                <div>
                                    <p className='py-2 px-2'>Orders</p>
                                    <p className="text-xl  px-2 font-semibold ">22.6k</p>
                                </div>

                                <div className="">
                                    <img src='/wavy.png' alt="Brand" className=" object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between px-12'>
                <div className='w-full h-full'>
                    <Products />
                </div>

                <div className='py-3 flex flex-col gap-2 w-[30%]'>
                    <div className='px-5 py-4 rounded-lg bg-blue-600'>
                        <div className="py-4 h-[170px]">
                            <img src='/blue.png' alt="Brand" className="w-full h-[170px] object-contain" />
                        </div>
                        <div className='py-2'>
                            <p className="text-4xl font-bold text-white py-1">$31.313</p>
                            <p className="text-xl font-meduim text-white">Current Balance</p>
                        </div>
                        <div className='flex justify-center py-3 w-full '>
                            <button className='text-white flex justify-center w-full gap-2 text-xl border p-3 rounded-full font-semibold'>
                                <div></div>
                                <div>Get Statement</div>
                            </button>
                        </div>
                    </div>

                    <div className='p-3 border border-gray-300 rounded-lg'>
                        <div className='flex justify-between py-2'>
                            <div>Top Sellers</div>
                            <div>...</div>
                        </div>
                        <div className='flex flex-col '>
                            <div className="py-3 px-3 flex justify-center  rounded-full">
                                <img src='/travis.jpg' alt="Brand" className="w-28 flex rounded-full h-28 object-contain" />
                            </div>
                            <div className='flex flex-col  py-3'>
                                <p className=' flex justify-center font-bold text-xl'>Travis Fuller</p>
                                <p className=' flex justify-center py-1 text-gray-500'> Salesman</p>
                            </div>
                        </div>
                        <div className="py-2 p-3 rounded-xl">
                            <img src='/bluewave.png' alt="Brand" className="w-full rounded-xl h-full object-contain" />
                        </div>


                    <div className='flex py-4 flex-row justify-center gap-2'>
                        <div className="p-2 bg-sky-100 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 w-8 text-sky-600"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                />
                            </svg>
                        </div>

                        <div className="p-2 bg-sky-100 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 w-8 text-sky-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                            </svg>
                        </div>

                        <div className="p-2 bg-sky-100 rounded-2xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-8 w-8 text-sky-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                />
                            </svg>
                        </div>

                    </div>

                    <div className='flex justify-center'>
                        ...
                    </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-row p-8 justify-between gap-4'>
                <div>
                    <TeamActivity />
                </div>
                <div>
                    <TeamActivity />
                </div>
                <div><TeamActivity /></div>
            </div>
        </div>
    );
};

export default Overview;