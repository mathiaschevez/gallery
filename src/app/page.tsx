import { getImages } from "~/server/queries";
import { ImageCard } from "./_components/ImageCard";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map(image => <ImageCard key={image.id} image={image} />)}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <Images />
    </main>
  );
}
