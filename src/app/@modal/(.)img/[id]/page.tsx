import { Modal } from "./modal";
import FullPageImageView from "~/components/FullPageImageView";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return <Modal>
    <FullPageImageView id={idAsNumber} />
  </Modal>;
}