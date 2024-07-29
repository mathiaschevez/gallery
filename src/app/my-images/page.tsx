import { getMyImages } from "~/server/queries";
import { ImageCard } from "../_components/ImageCard";

export const dynamic = "force-dynamic";

export default async function MyImagesPage() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map(image => <ImageCard key={image.id} image={image} />)}
    </div>
  );
}