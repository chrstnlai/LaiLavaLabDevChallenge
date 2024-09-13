import "./App.css";
import SideBar from "./Components/SideBar";
import { SearchBar } from "./Components/SearchBar";
import { Profile } from "./Components/Profile";
import { Documents } from "./Components/Documents";

export default function App() {
  return (
    <main className="App">
      <div className="SideBarflex">
        <SideBar />
        {/* sidebar///// */}
      </div>
      <div className="MainContent">
        <div className="SearchProfileflex">
          <div className="Searchflex">
            <SearchBar />
          </div>
          <div className="Profileflex">
            <Profile />
          </div>
        </div>
        <div className="DocumentsSection">
        <div>
          <Documents 
            text1="Assignment 1"
            text2="1m ago" 
            />
        </div>
        <div >
          <Documents 
            text1="Lab 3"
            text2="40m ago" 
            />
        </div>
        <div>
          <Documents 
            text1="Workbook Ch3."
            text2="40m ago" 
            />
        </div>
          <div>
            <Documents 
              text1="Workbook Ch3."
              text2="40m ago" 
              />
          </div>
          <div>
            <Documents 
              text1="Workbook Ch3."
              text2="40m ago" 
              />
          </div>
          <div>
            <Documents 
              text1="Workbook Ch3."
              text2="40m ago" 
              />
          </div>
          
          </div>
      </div>
    </main>
  );
}
