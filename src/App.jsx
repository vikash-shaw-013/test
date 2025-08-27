
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Article from "./pages/Article"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/articles" element={<Article />} /> */}
    </Routes>
  )
}

export default App
