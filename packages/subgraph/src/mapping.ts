import { CVUpdated } from "../generated/ProfessionalCV/ProfessionalCV";
import { CVEntity } from "../generated/schema";

export function handleCVUpdated(event: CVUpdated): void {
  let cv = CVEntity.load(event.params.owner.toHex());

  if (!cv) {
    cv = new CVEntity(event.params.owner.toHex());
  }

  cv.owner = event.params.owner;
  cv.timestamp = event.params.timestamp;
  cv.blockNumber = event.block.number;
  cv.transactionHash = event.transaction.hash;

  cv.save();
}
