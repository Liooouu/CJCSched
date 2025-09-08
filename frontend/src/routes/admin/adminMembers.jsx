import React from "react";
import AdminNavbar from "../../components/adminNavbar";
const Members = () => {
  return (
    <div>
      <AdminNavbar/>
      <h2 className="text-xl font-bold mb-4">Manage Members</h2>
      <div className="mb-4 flex justify-between">
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
          Add Member
        </button>
        <input
          type="search"
          placeholder="Search member..."
          className="border rounded-lg px-3 py-2"
        />
      </div>

      <table className="w-full border-collapse border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">john@example.com</td>
            <td className="border px-4 py-2 space-x-2">
              <button className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500">
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">jane@example.com</td>
            <td className="border px-4 py-2 space-x-2">
              <button className="bg-yellow-400 px-2 py-1 rounded hover:bg-yellow-500">
                Edit
              </button>
              <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Members;
