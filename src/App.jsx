import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="First card" desc="First card desc" />
        <Card title="Second card" desc="second card desc" />
        <Card title="Third card" desc="third card desc" />
        <Card title="Fourth card" desc="Fourth card desc" />
        <Card title="Fifth card" desc="Fifth card desc" />
        <Card title="Sixth card" desc="Sixth card desc" />
       
      </div>

      <Footer />

    </>
  )
}

export default App
