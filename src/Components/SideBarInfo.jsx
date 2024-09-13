//Storing Side Bar Tabs in Array of Objects 
//For Icons,  npm install @mui/icons-material

import { MdHomeFilled } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { IoMdArchive } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

export const SideBarInfo = [

  {
    icon:<MdHomeFilled />,
    title:"All Projects",
    link:"/YourProjects"
  },
  {
    icon:<IoMdPerson />,
    title:"Your Projects",
    link:"/home"
  },
  {
    icon:<IoPeople />,
    title:"Shared with you",
    link:"/home"
  },
  {
    icon:<IoMdArchive />,
    title:"Archived",
    link:"/home"
  },
  {
    icon:<IoMdTrash />,
    title:"Trash",
    link:"/home"
  }
  
  
]
