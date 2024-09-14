import "./App.css";
import SideBar from "./Components/SideBar";

export default function Archived() {
  return (
    <main className = "SideBarTabs">
      <div className = "flexsidebar">
      <SideBar />
      </div>
      <div className = "flexsidebar">
        <h1  className = "yourprojectstext">
       Archived
        </h1>
      </div>
    </main>
  );
}
