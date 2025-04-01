import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"


function App() {


  return (
    <>

      <Navbar />

      <main>
        <Card desLink="https://dragonball.fandom.com/wiki/Goku" ImgSrc="https://wallpapersmug.com/large/c469c1/dragon-ball-son-goku-blue-power.jpg" adj1="Pure" adj2="Kind" Title="Goku" Des="Goku is the main character in the Dragon Ball manga and anime series. He is a Saiyan with superhuman strength who was sent to Earth as an infant. He is a passionate fighter who protects Earth from threats. " />
        <Card desLink="https://dragonball.fandom.com/wiki/Vegeta" ImgSrc="src\components\vegita_red&blue.png" adj1="Pride" adj2="Hardwork" Title="Vegita" Des="Vegeta (ベジータ Bejīta), more specifically Vegeta IV (ベジータ四世 Bejīta Yonsei),[1] recognized as Prince Vegeta (ベジータ王子 Bejīta Ōji), is the prince of the fallen Saiyan race and the husband of Bulma, the father of Trunks and Bulla, the eldest son of King Vegeta, as well as one of the main characters of the Dragon Ball series." />
        <Card desLink="https://dragonball.fandom.com/wiki/Gohan" ImgSrc="https://images.alphacoders.com/126/thumb-1920-1269563.jpg" adj1="Best" adj2="All rounder" Title="Gohan" Des="Gohan is a fictional character in the Dragon Ball series. He is a half-Saiyan, half-human, and one of the main characters in the series. " />
      </main>



      <Footer />

    </>
  )
}

export default App
