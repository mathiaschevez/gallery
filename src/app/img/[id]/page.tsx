import FullPageImageView from "~/components/FullPageImageView";

export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return <FullPageImageView id={idAsNumber} />
}