import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.jsx";
import YourProjects from "./YourProjects.jsx";
import AllProjects from "./AllProject.jsx";
import SharedWithYou from "./SharedWithYou.jsx";
import Archived from "./Archived.jsx";
import Trash from "./Trash.jsx";
import DocumentPage from "./DocumentPage.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path ="/YourProjects" element={<YourProjects />} />
				<Route path="/AllProjects" element={<AllProjects />} />
				<Route path="/SharedWithYou" element={<SharedWithYou />} />
				<Route path="/Archived" element={<Archived />} />
				<Route path="/Trash" element={<Trash />} />
				<Route path="/DocumentPage" element={<DocumentPage />} />
				
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
