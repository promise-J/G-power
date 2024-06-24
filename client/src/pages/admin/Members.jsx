import React from "react";
import { users } from "../../data";

const Members = () => {
  return (
    <div className="py-10">
      <div className="mt-5">
        <h1 className="text-[40px] text-center">Worker's List</h1>
      </div>
      <div className="overflow-x-auto border mx-auto max-w-[80vw]">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                S/N
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th className="px-6 py-3 bg-gray-50"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user?.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user?.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user?.first_name} {user?.last_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user?.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right flex justify-around">
                  <button className="text-green-600 hover:text-indigo-900">
                    Edit
                  </button>
                  <button className="text-red-500 hover:text-red-900 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center py-3">
          <div className="flex gap-20">
            <button className="border px-5 py-1 rounded-md">Prev</button>
            <span>1 of 3</span>
            <button className="border px-5 py-1 rounded-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
