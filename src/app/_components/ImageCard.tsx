import Image from "next/image";
import Link from "next/link";

export function ImageCard({ image }: { image: { id: number; url: string; name: string } }) {
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