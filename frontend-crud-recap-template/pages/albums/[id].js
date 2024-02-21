import { useRouter } from "next/router";
import Image from "next/image";

export default function AlbumDetails({ getAlbum }) {
  const router = useRouter();
  const album = getAlbum(router.query.id);
  console.log("test", album);

  if (!album) {
    return "Check this later, please";
  }

  return (
    <section>
      <h1>"{album.title}"</h1>
      <h2>{album.artist}</h2>
      <Image src={album.cover} width={300} height={300} />
    </section>
  );
}
