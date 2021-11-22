import { DateTime } from "luxon";
import { Call } from "types/Call";
import { System } from "types/System";
import { SystemACL } from "types/SystemACL";

const now = DateTime.now();

export const systemACL: SystemACL = {
  uuid: "5c0a00b7-910d-4367-89df-257121538384",
  name: "Sample ACL",
  users: [],
  public: true,
};

export const system: System = {
  uuid: "5130f178-f61c-4dda-938b-0e8c6f42fba5",
  name: "Omaha Regional Interoperability Network (ORION)",
  systemACL,
};

export const dataNormal: Call = {
  uuid: "bacdbcd8-cbda-4f63-a6de-e2823db95b8e",
  trunkRecorderID: "1",
  startTime: now.toJSDate(),
  endTime: now.plus({ seconds: 30 }).toJSDate(),
  units: [
    {
      uuid: "4a98a205-997b-4e8b-b907-2fcfb4d64bed",
      system,
      decimalID: 12345,
      description: "OPD Northwest Dispatcher",
    },
    {
      uuid: "bc8c5c5c-96b3-4eaa-8c51-d47c5ee89e0c",
      system,
      decimalID: 54321,
      description: "Unit One",
    },
  ],
  active: false,
  emergency: false,
  encrypted: true,
  frequency: 855.555555,
  phase2: "unknown",
  talkgroup: {
    uuid: "f9632987-740b-48f1-b157-ebded186a45b",
    system,
    decimalID: 123,
    alphaTag: "Omaha Police Northwest Dispatch",
    encrypted: true,
    agency: {
      uuid: "ad7b32c0-e373-409d-ba2b-0083328eb610",
      name: "Omaha Police Department",
      city: {
        uuid: "33cb6c4a-9dd7-4bd7-b4cb-32b58019db49",
        name: "Omaha",
      },
    },
  },
};

export const dataEmergency: Call = {
  uuid: "bacdbcd8-cbda-4f63-a6de-e2823db95b8e",
  trunkRecorderID: "1",
  startTime: now.toJSDate(),
  endTime: now.plus({ seconds: 30 }).toJSDate(),
  units: [
    {
      uuid: "4a98a205-997b-4e8b-b907-2fcfb4d64bed",
      system,
      decimalID: 12345,
      description: "OPD Northwest Dispatcher",
    },
    {
      uuid: "bc8c5c5c-96b3-4eaa-8c51-d47c5ee89e0c",
      system,
      decimalID: 54321,
      description: "Unit One",
    },
  ],
  active: false,
  emergency: true,
  encrypted: true,
  frequency: 855.555555,
  phase2: "unknown",
  talkgroup: {
    uuid: "f9632987-740b-48f1-b157-ebded186a45b",
    system,
    decimalID: 123,
    alphaTag: "Omaha Police Northwest Dispatch",
    encrypted: true,
    agency: {
      uuid: "ad7b32c0-e373-409d-ba2b-0083328eb610",
      name: "Omaha Police Department",
      city: {
        uuid: "33cb6c4a-9dd7-4bd7-b4cb-32b58019db49",
        name: "Omaha",
      },
    },
  },
};
