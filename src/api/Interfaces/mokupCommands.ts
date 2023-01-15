import { User } from "../../app/models/user";
import agent from "../agent";
import { Command, limeScotter, tireScotter } from "./command";

export const gptAnswerCommand = async (q: string, user: User) => {
  const myCommand: Command = {
    command: "chatAnswer",
    targetObject: {
      objectId: {
        superapp: "2023a.Assaf.Ariely",
        internalObjectId: "050666",
      },
    },

    invokedBy: {
      userId: {
        superapp: "2023a.Assaf.Ariely",
        email: `${user.userId.email!}`,
      },
    },
    commandAttributes: { prompt: `${q}` },
  };
  //invocationTimeStamp commandId

  const ans = agent.GptOrcal.getAnswer(myCommand);

  return ans;
};

export const GetWetherCommand = async (user: User) => {
  const myCommand: Command = {
    command: "getTlvWeather",
    targetObject: {
      objectId: {
        superapp: "2023a.Assaf.Ariely",
        internalObjectId: "807060",
      },
    },

    invokedBy: {
      userId: {
        superapp: "2023a.Assaf.Ariely",
        email: `${user.userId.email!}`,
      },
    },
    commandAttributes: { prompt: `no relvent` },
  };

  const ans = agent.TlvWeather.getWeather(myCommand);

  return ans;
};

export const GetTireScooter = async (
  user: User,
  FormScooterType: string,
  lat: number,
  lng: number,
  range: number
) => {
  const myCommand: Command = {
    command: "getScooters",
    targetObject: {
      objectId: {
        superapp: "2023a.Assaf.Ariely",
        internalObjectId: "123456",
      },
    },

    invokedBy: {
      userId: {
        superapp: "2023a.Assaf.Ariely",
        email: `${user.userId.email!}`,
      },
    },
    commandAttributes: {
      lat: lat,
      lng: lng,
      radius: range,
    },
  };

  const ans = await agent.getScooter.getTire(myCommand);

  return ans;
};

export const GetLimeScooter = async (user: User, lat: number, lng: number) => {
  const myCommand: Command = {
    command: "getScooters",
    targetObject: {
      objectId: {
        superapp: "2023a.Assaf.Ariely",
        internalObjectId: "123456",
      },
    },

    invokedBy: {
      userId: {
        superapp: "2023a.Assaf.Ariely",
        email: `${user.userId.email!}`,
      },
    },
    commandAttributes: {
      user_latitude: lat,
      user_longitude: lng,
    },
  };

  const ans: limeScotter[] = await agent.getScooter.getLime(myCommand);

  const tireFormatConvertor: tireScotter[] = ans.map((scooter) => ({
    lat: scooter.latitude,
    lng: scooter.longitude,
    batteryLevel: scooter.battery_percentage,
  }));

  return tireFormatConvertor;
};
