import { useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import data from "../data.json";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  const [albums, setAlbums] = useState(data);
  console.log("Test", albums);

  function getAlbum(id) {
    return albums.find((album) => album.id == id);
  }

  return (
    <>
      <Nav />
      <main>
        <Component albums={albums} getAlbum={getAlbum} {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
