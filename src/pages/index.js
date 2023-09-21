import Image from "next/image";
import { getUnsplashImages } from "@/lib/utils";

export async function getStaticProps() {
  const images = await getUnsplashImages();

  return { props: { images } };
}

export default function Home({ images }) {
  return (
    <main>
      <div className="grid grid-cols-3 gap-5 p-5">
        {images.map((image) => (
          <div key={image.id} className="relative w-full h-96 max-w-md">
            <Image
              alt={image.alt_description}
              src={image.urls.regular}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
