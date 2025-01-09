import { PersonModel } from "./person.model";

export interface OfferModel {
  id: string;
  name: string;
  description: string;
  person: PersonModel;
}
