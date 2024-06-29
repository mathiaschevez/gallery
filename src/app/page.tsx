import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

const MOCK_IMAGE_URLS = [
  'https://utfs.io/f/63559bb6-ad80-4180-81f2-6e9ccdd2734f-mhbjtf.jpg',
  'https://utfs.io/f/ba20e715-5dca-4bc0-af65-eb0ca1047fbb-mhbjte.jpg',
  'https://utfs.io/f/8bbee323-1516-4a6c-8ed5-f12265fa37cb-mhbjtd.jpg',
];

const mockImages = MOCK_IMAGE_URLS.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts)

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map(post => (<div key={post.id}>{post.name}</div>))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, i) => (
          <div key={i} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
