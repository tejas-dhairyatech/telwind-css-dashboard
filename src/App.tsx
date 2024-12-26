import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Main from "./ui/Main"
import Content from "./ui/Content"
import Profile from "./components/Profile/Profile"
import Stats from "./components/Stats/Stats"
import Team from "./components/Team"
import Event from "./components/Event"

const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <div className="font-quickSand">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <Main>
          <Content>
            <Stats />
            <div className="flex gap-3 flex-col xl:flex-row ">
              <Team />
              <Event />

            </div>
          </Content>
          <Profile />

        </Main>

      </div>
    </>
  )
}

export default App
