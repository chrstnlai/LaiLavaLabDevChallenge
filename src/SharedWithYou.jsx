import "./App.css";
import SideBar from "./Components/SideBar";

export default function SharedWithYou() {
  return (
    <main className = "SideBarTabs">
        <div className = "flexsidebar">
          <SideBar />
        </div>
        <div className = "flexsidebar">
          <h1  className = "yourprojectstext">
           Shared With You 
          </h1>
        </div>
    </main>
  );
}
