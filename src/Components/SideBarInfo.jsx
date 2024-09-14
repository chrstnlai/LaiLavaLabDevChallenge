//Storing Side Bar Tabs in Array of Objects

import { MdHomeFilled } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { IoMdArchive } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";

export const SideBarInfo = [
  {
    icon: <MdHomeFilled />,
    title: "All Projects",
    link: "/",
  },
  {
    icon: <IoMdPerson />,
    title: "Your Projects",
    link: "/YourProjects",
  },
  {
    icon: <IoPeople />,
    title: "Shared with you",
    link: "/SharedWithYou",
  },
  {
    icon: <IoMdArchive />,
    title: "Archived",
    link: "/Archived",
  },
  {
    icon: <IoMdTrash />,
    title: "Trash",
    link: "/Trash",
  },
];
