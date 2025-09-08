import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000"; // Backend root

const UserDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [announcements, setAnnouncements] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          setLoading(false);
          return;
        }

        // Fetch logged-in user data
        const userRes = await axios.get(`${BACKEND_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserData(userRes.data.user);

        // Fetch announcements
        const annRes = await axios.get(`${BACKEND_URL}/announcements`);
        setAnnouncements(annRes.data);

        // Fetch posts
        const postRes = await axios.get(`${BACKEND_URL}/posts`);
        setPosts(postRes.data);
      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* INFO BANNER */}
    <div className="bg-blue-100 text-blue-900 text-center py-3 px-4 rounded-md text-sm font-medium shadow-sm">
      Welcome back! We're happy to have you here.
    </div>



      {/* HERO SECTION */}
      <main className="flex justify-center items-center flex-col font-montserrat text-[#364687] lg:text-4xl md:text-3xl font-bold bg-gray-50">
        <div className="container flex justify-center items-center flex-col h-[50vh] w-max md:space-y-2 lg:space-y-4">
          <p className="sm:text-2xl lg:text-3xl font-semibold">WELCOME TO </p>
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">CHURCH OF JESUS CHRIST</p>
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl">THE RISEN SON OF GOD PHILS. INC.</p>
          <p className="sm:text-2xl lg:text-3xl font-semibold">ATTENDANCE SYSTEM</p>
        </div>
        <div>
          <img src="/COVER.png" alt="CJCRSG Cover Photo" />
        </div>
      </main>

      {/* MAIN CONTENT GRID */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 p-6 bg-gray-100">

        {/* LEFT SIDEBAR (PROFILE) */}
        <aside className="w-full lg:w-1/4 bg-white rounded-2xl shadow-lg p-4">
          <div className="flex flex-col items-center text-center">
            <img
              src={userData?.profilePic || "/profile.jpg"}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-3 border-4 border-[#364687]"
            />
            <p className="text-xl font-semibold">{userData?.name || "John Doe"}</p>
            <p className="text-gray-600 text-sm">{userData?.email || "N/A"}</p>
          </div>
          <hr className="my-4" />

          <div className="space-y-2 text-gray-700 font-medium">
            <p>ID: {userData?.id}</p>
            <p>Contact: {userData?.contact || "N/A"}</p>
            <p>Address: {userData?.address || "N/A"}</p>
            <p>Gender: {userData?.gender || "N/A"}</p>
            <p>
              Member since:{" "}
              {userData?.created_at
                ? new Date(userData.created_at).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </aside>

        {/* CENTER FEED */}
        <section className="w-full lg:w-2/4 space-y-6">
          {/* Announcements */}
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-2">📢 Announcements</h2>
            <ul className="space-y-2">
              {announcements.length > 0 ? (
                announcements.map((ann, i) => (
                  <li key={i} className="bg-gray-100 p-3 rounded-lg">
                    {ann.message}
                  </li>
                ))
              ) : (
                <p className="text-gray-500">No announcements available.</p>
              )}
            </ul>
          </div>

          {/* Posts */}
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <h2 className="text-xl font-bold mb-3">📰 Latest Posts</h2>
            <div className="space-y-4">
              {posts.length > 0 ? (
                posts.map((post, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium">{post.title}</p>
                    <p className="text-sm text-gray-600">{post.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No posts available.</p>
              )}
            </div>
          </div>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="w-full lg:w-1/4 bg-white rounded-2xl shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-3">🕒 Service Times</h2>
          <p>9:00 AM - Morning Service</p>
          <p>2:00 PM - Youth Service</p>
          <hr className="my-4" />
          <h2 className="text-xl font-semibold mb-3">🌐 Connect With Us</h2>
          <div className="flex space-x-4">
            <img src="/FACEBOOK.png" alt="facebook_icon" className="w-8 h-8" />
            <img src="/GMAIL.png" alt="gmail_icon" className="w-8 h-8" />
            <img src="/CONTACT.png" alt="contact_icon" className="w-8 h-8" />
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
};

export default UserDashboard;
