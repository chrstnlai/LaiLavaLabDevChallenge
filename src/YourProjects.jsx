import "./App.css";
import SideBar from "./Components/SideBar";

export default function YourProjects() {
  return (
    <main className = "SideBarTabs">
        <div className = "flexsidebar">
          <SideBar />
        </div>
        <div className = "flexsidebar">
          <h1  className = "yourprojectstext">
           Your Projects   
          </h1>
        </div>
    </main>
  );
}
