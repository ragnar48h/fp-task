import React, { useEffect, useState } from 'react';
import axios from 'axios';
  
export default function Dashboard() {
  let [data, setData] = useState(null);

  useEffect(() => {
    refreshList();
  }, []);

  let refreshList = () => {
    axios.
    get("http://localhost:8000/api/data/")
    .then((res) => {
      setData(res.data)
      console.log(res.data);
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="flex flex-col p-6">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    UserID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Body
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data !== null && data.map((item) => (
                  <tr key={item.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">{item.data.id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">{item.data.userId}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.data.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.data.body}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
              {(data === null || data.length === 0) && (
                <div className="flex text-sm text-gray-600 items-center py-4 pl-6">
                  <span className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">No Data Found: </span>
                  <p className="pl-1">Upload JSON File.</p>
                </div>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}