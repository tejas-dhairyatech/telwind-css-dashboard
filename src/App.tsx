import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Main from "./ui/Main"
import Content from "./ui/Content"
import Stats from "./components/Stats/Stats"

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
            {/* <div className="flex gap-3 flex-col xl:flex-row ">
              <Team />
              <Event />
            </div> */}

          </Content>

          {/* <Profile /> */}
        </Main>
        <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 mt-0">


        </div>


      </div>

    </>
  )
}

export default App
