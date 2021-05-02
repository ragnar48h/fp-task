import React, {useState} from 'react';
import Dashboard from './dashboard';
import Upload from './upload';

const navigation = ['Dashboard', 'Upload new JSON']

export default function Home () {
    const [activeTab, changeTab] = useState("Dashboard");

    let changeTabFunction = (tabName) => {
      changeTab(tabName);
    }

    return (
        <div>
            <div className=" mx-auto px-4 sm:px-6 lg:px-8 bg-gray-800">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-20 w-35"
                        src="https://www.financepeer.com/static/img_tmp/fp_main_logo_white.png"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <a 
                          href="#"
                          onClick={() => changeTabFunction("Dashboard")} 
                          className={activeTab === 'Dashboard' ? ("bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium") : ("text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")}>
                          Dashboard
                        </a>
                        <a
                          href="#"
                          onClick={() => changeTabFunction("Upload new JSON")}
                          className={activeTab !== 'Dashboard' ? ("bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium") : ("text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")}
                        >
                            Upload new JSON
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <a
                      href="#"
                      className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Log out
                    </a>
                  </div>
                </div>
            </div>
            {activeTab === "Dashboard" ? <Dashboard/> : <Upload/>}
        </div>
    );
}

