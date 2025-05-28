import { Hero } from "./components/hero"
import { CardContainer } from "./components/card-container"
import { Footer } from "./components/footer"
function App() {
  
  return (
    <main className="font-Poppins flex justify-center text-Grey-500 ">
      
      <section className="w-[296px] my-[80px] xl:w-[1100px]">
        <Hero/>
        <CardContainer/>
        <Footer/>
     </section>
    </main>
  )
}

export default App
