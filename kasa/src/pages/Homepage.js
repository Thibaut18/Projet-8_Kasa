import Banner from "../components/Banner"
import Gallery from "../components/Gallery"
import bannerpicture from "../assets/bannerpicture.svg"

function homepage() {
  return (
    <>
      <Banner
        imageSrc={bannerpicture}
        altText="Falaises en bord de mer"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </>
  )
}

export default homepage
