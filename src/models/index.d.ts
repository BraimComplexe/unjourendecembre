import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type InviteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Invite {
  readonly id: string;
  readonly nom: string;
  readonly samedi: boolean;
  readonly dimanche: boolean;
  readonly regime?: string | null;
  readonly voiture?: boolean | null;
  readonly navette?: boolean | null;
  readonly hotel?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Invite, InviteMetaData>);
  static copyOf(source: Invite, mutator: (draft: MutableModel<Invite, InviteMetaData>) => MutableModel<Invite, InviteMetaData> | void): Invite;
}