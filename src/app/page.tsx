import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map(image => (
        <div key={image.id} className="flex flex-col w-48 h-48">
          <Image
            src={image.url}
            alt={image.name}
            width={192}
            height={192}
            style={{ objectFit: 'contain' }}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-center text-2xl">Please sign in to view images</div>
      </SignedOut>
      <SignedIn><Images /></SignedIn>
    </main>
  );
}
