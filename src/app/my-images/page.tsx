import { getMyImages } from "~/server/queries";

export default async function MyImagesPage() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map(image => <div key={image.id} >{image.name}</div>)}
    </div>
  );
}