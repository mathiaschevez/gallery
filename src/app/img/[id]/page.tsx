import FullPageImageView from "~/common/FullPageImageView";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <FullPageImageView id={photoId} />
}