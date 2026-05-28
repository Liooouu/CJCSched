import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Home, Bell, User, LogOut, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchMyProfile } from "../api/userApi";
import ConfirmDialog from "./ConfirmDialog";
import Footer from "./footer";

const MemberLayout = ({ children, activeNav = "home", onNavChange, isLoading }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const drawerRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [memberDropdownOpen, setMemberDropdownOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const [userData, setUserData] = useState(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        let nameToDisplay = parsed.fullName;
        if (!nameToDisplay && parsed.firstName) {
          const mInitial = parsed.middleName ? `${parsed.middleName.charAt(0)}.` : "";
          nameToDisplay = `${parsed.firstName} ${mInitial} ${parsed.lastName}`.replace(/\s+/g, ' ');
        }
        return {
          fullName: nameToDisplay || "User",
          role: parsed.role || "VISITOR",
          profileImage: parsed.profileImage || null,
        };
      } catch (e) {
        console.error("Error parsing user data:", e);
      }
    }
    return { fullName: "Guest User", role: "VISITOR", profileImage: null };
  });

  useEffect(() => {
    const syncUser = async () => {
      try {
        const serverUser = await fetchMyProfile();
        const mInitial = serverUser.middleName ? ` ${serverUser.middleName.charAt(0)}.` : "";
        const nameToDisplay = `${serverUser.firstName}${mInitial} ${serverUser.lastName}`.replace(/\s+/g, ' ');
        setUserData({
          fullName: nameToDisplay || "User",
          role: serverUser.role || "VISITOR",
          profileImage: serverUser.profileImage || null
        });
        localStorage.setItem("user", JSON.stringify(serverUser));
      } catch {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          try {
            const parsedUser = JSON.parse(storedUser);
            let nameToDisplay = parsedUser.fullName;
            if (!nameToDisplay && parsedUser.firstName) {
              const mInitial = parsedUser.middleName ? `${parsedUser.middleName.charAt(0)}.` : "";
              nameToDisplay = `${parsedUser.firstName} ${mInitial} ${parsedUser.lastName}`.replace(/\s+/g, ' ');
            }
            setUserData({
              fullName: nameToDisplay || "User",
              role: parsedUser.role || "VISITOR",
              profileImage: parsedUser.profileImage || null 
            });
          } catch (error) {
            console.error("Error parsing user data:", error);
          }
        }
      }
    };

    syncUser();

    window.addEventListener("userDataUpdated", syncUser);
    return () => window.removeEventListener("userDataUpdated", syncUser);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      setNearFooter(window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLightboxOpen(document.body.classList.contains("lightbox-open"));
      setModalOpen(document.body.classList.contains("modal-open"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    document.body.style.overflow = "hidden";
    const handleEsc = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    const handleTab = (e) => {
      if (!drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("keydown", handleTab);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("keydown", handleTab);
    };
  }, [mobileMenuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/member/home" },
    { id: "announcements", label: "Announcements", icon: Bell, path: "/member/announcements" },
    { id: "profile", label: "Profile", icon: User, path: "/member/profile" },
  ];

  const handleNavClick = (id, path) => {
    if (onNavChange) onNavChange(id);
    setMobileMenuOpen(false);
    if (path) navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userRole");
    window.dispatchEvent(new Event("userDataUpdated"));
    setShowLogoutConfirm(false);
    navigate("/login");
  };

  const displayRole = userData.role === "ADMIN" ? "Administrator" : 
                    userData.role === "MEMBER" ? "CJC Member" : "Visitor";

  const ProfileAvatar = ({ sizeClass }) => (
    <div className={`overflow-hidden rounded-full border-4 border-[#3B4B89] shadow-md ${sizeClass}`}>
      {userData.profileImage ? (
        <img src={userData.profileImage} alt="Profile" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <User className="text-gray-400 w-1/2 h-1/2" />
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <ConfirmDialog
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
        confirmText="Logout"
        variant="danger"
      />

      <header className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-100 px-4 md:px-8 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-gray-600">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <img src="/LOGO.png" alt="Logo" className="hidden md:block w-8 h-8 md:w-10 md:h-10" />
          <span className="hidden md:inline font-bold text-[#3B4B89] text-sm md:text-lg uppercase">CJCRSG PHILS. INC.</span>
        </div>

        <div className="relative flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setMemberDropdownOpen(!memberDropdownOpen)}
              className="flex items-center gap-2 bg-[#3B4B89] text-white px-3 py-1.5 md:py-2 rounded-lg text-sm font-medium hover:bg-[#2d3a6a] transition"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-300">
                {userData.profileImage ? (
                  <img src={userData.profileImage} alt="" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-full h-full p-1 text-gray-500" />
                )}
              </div>
              <span className="hidden sm:inline capitalize">{userData.role.toLowerCase()}</span>
              <ChevronDown size={16} className={`transition-transform ${memberDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {memberDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setMemberDropdownOpen(false)} />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-20 overflow-hidden"
                  >
                    <div className="px-4 py-2 border-b border-gray-50">
                      <p className="text-xs font-semibold text-gray-400 uppercase">Account</p>
                    </div>
                    <button
                      onClick={() => {
                        setMemberDropdownOpen(false);
                        setShowLogoutConfirm(true);
                      }}
                      className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 min-h-[48px] transition-colors"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)}>
            <motion.div ref={drawerRef} className="w-64 h-full bg-[#F0F0F5] p-6 pt-20" initial={{ x: -256 }} animate={{ x: 0 }} exit={{ x: -256 }} onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col items-center mb-8">
                <ProfileAvatar sizeClass="w-20 h-20 mb-3" />
                <p className="font-semibold text-[#3B4B89] text-sm text-center">{userData.fullName}</p>
                <span className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{displayRole}</span>
              </div>
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <button key={item.id} onClick={() => handleNavClick(item.id, item.path)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium min-h-[48px] transition ${activeNav === item.id ? "bg-[#3B4B89] text-white shadow-md" : "text-gray-600 hover:bg-white/50"}`}>
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <aside className="hidden md:flex flex-col flex-shrink-0 w-64 fixed left-0 top-16 bottom-0 bg-[#F0F0F5] p-6 border-r border-gray-200">
        <div className="flex flex-col items-center text-center mb-10">
          <ProfileAvatar sizeClass="w-24 h-24 mb-4" />
          <p className="font-bold text-[#3B4B89] text-lg leading-tight">{userData.fullName}</p>
          <span className="text-xs font-semibold text-gray-400 mt-2 uppercase tracking-widest">{displayRole}</span>
        </div>
        {navItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => handleNavClick(item.id, item.path)} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium min-h-[48px] transition whitespace-nowrap overflow-hidden ${
              activeNav === item.id 
                ? "bg-[#3B4B89] text-white shadow-md" 
                : "text-gray-600 hover:bg-white/50"
            }`}
          >
            <span className="flex-shrink-0">
              <item.icon size={18} />
            </span>
            <span className="truncate">{item.label}</span>
          </button>
        ))}
      </aside>

      <main className="md:ml-64 pt-16 min-h-screen transition-all">
        {children}
        {!isLoading && <Footer />}
      </main>

      {showBackToTop && !location.pathname.includes("/member/profile") && !lightboxOpen && !modalOpen && !mobileMenuOpen && (
        <button
          onClick={scrollToTop}
          className={`group fixed z-50 bg-[#4A558F] text-white rounded-full p-3 shadow-lg hover:bg-[#3a4575] transition-all duration-300 ${nearFooter ? 'bottom-10 md:bottom-16' : 'bottom-6'} right-6`}
          aria-label="Back to top"
        >
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Back to Top
          </span>
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default MemberLayout;