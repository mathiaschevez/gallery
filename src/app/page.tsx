import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map(image => <ImageCard key={image.id} image={image} />)}
    </div>
  );
}

function ImageCard({ image }: { image: { id: number; url: string; name: string } }) {
  return (
    <div className="bg-slate-800 border border-white flex flex-col w-72 h-80">
      <Link href={`/img/${image.id}`} className="flex flex-col items-center justify-center h-full p-3">
        <Image
          className="max-h-60"
          src={image.url}
          alt={image.name}
          width={192}
          height={192}
          style={{ objectFit: 'contain' }}
        />
        <div className="mt-auto w-full">{image.name}</div>
      </Link>
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
