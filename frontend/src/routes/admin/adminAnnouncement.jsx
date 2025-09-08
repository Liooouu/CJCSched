import React from "react";
import AdminNavbar from "../../components/adminNavbar";


const Announcements = () => {
  return (
    
    <div>
      <AdminNavbar/>
      <h2 className="text-xl font-bold mb-4">Create Announcement</h2>
      <form className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Title"
          className="border rounded-lg px-3 py-2"
        />
        <textarea
          placeholder="Message"
          className="border rounded-lg px-3 py-2"
          rows={4}
        />
        <button className="bg-blue-500 text-white py-2 rounded-lg w-32 hover:bg-blue-600 transition">
          Post
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Recent Announcements</h3>
        <ul className="space-y-2">
          <li className="border p-3 rounded-lg">Announcement 1</li>
          <li className="border p-3 rounded-lg">Announcement 2</li>
          <li className="border p-3 rounded-lg">Announcement 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Announcements;
