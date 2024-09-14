import "./App.css";
import SideBar from "./Components/SideBar";

export default function Trash() {
  return (
    <main className = "SideBarTabs">
        <div className = "flexsidebar">
          <SideBar />
        </div>
        <div className = "flexsidebar">
          <h1  className = "yourprojectstext">
           Trash   
          </h1>
        </div>
    </main>
  );
}
