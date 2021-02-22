import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile/Profile";
import Sidebar from "../components/Sidebar";

export default function profile() {
  return (
    <div className="bg-white">
      <Navbar />
      <Sidebar />
      <MainContent>
        <Profile />
      </MainContent>
    </div>
  );
}
