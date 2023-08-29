import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Banner from "./Banner"
import Gallery from "./Gallery"
import Footer from "./Footer"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Gallery />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App
