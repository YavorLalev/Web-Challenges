import Link from "next/link";

export default function IndexPage({ albums }) {
  return (
    <>
      <h1>Music Album Gallery</h1>
      <ul>
        {albums.map(({ id, title, artist }) => (
          <Link href={`/albums/${id}`}>
            <li key={id}>
              "{title}" - {artist}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
