import FullPageImageView from "~/common/FullPageImageView";
import { Modal } from "./modal";


export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <Modal>
    <FullPageImageView id={photoId} />
  </Modal>;
}