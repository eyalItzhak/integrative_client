import { User } from "../../app/models/user";
import agent from "../agent";
import { Command, limeScotter, tireScotter } from "./command";

export const gptAnswerCommand = async (q: string, user: User) => {
  console.log(user.userId.email);

  const myCommand: Command = {
    commandId: {
      superapp: "2023a.Assaf.Ariely",
      miniapp: "dummyApp",
      internalCommandId: "490edcaf-08db-4eac-a1e3-2cbf7932c412",
    },
    command: "chatAnswer",
    targetObject: {
      objectId: {
        superapp: "2023a.Assaf.Ariely",
        internalObjectId: "bf10a7cc-3f27-4b2a-8f9d-1b7dc1bb1475",
      },
    },
    invocationTimeStamp: "2022-11-26T15:15:18.479+00:00",
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
    commandId: {
      superapp: "2023a.Assaf.Ariely",
      miniapp: "weather",
      internalCommandId: "490edcaf-08db-4eac-a1e3-2cbf7932c412",
    },
    command: "getTlvWeather",
    targetObject: {
      objectId: {
        superapp: "2023a.Assaf.Ariely",
        internalObjectId: "bf10a7cc-3f27-4b2a-8f9d-1b7dc1bb1475",
      },
    },
    invocationTimeStamp: "2022-11-26T15:15:18.479+00:00",
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

export const GetTireScooter = async (user: User,FormScooterType:string,lat:number,lng:number) => {
  console.log(lat)
  console.log(lng)
  
  const myCommand: Command = {
    commandId: {
      superapp: "2023a.Assaf.Ariely",
      miniapp: "weather",
      internalCommandId: "490edcaf-08db-4eac-a1e3-2cbf7932c412",
    },
    command: "getScooters",
    targetObject: {
      objectId: {
        superapp: "2023a.Assaf.Ariely",
        internalObjectId: "bf10a7cc-3f27-4b2a-8f9d-1b7dc1bb1475",
      },
    },
    invocationTimeStamp: "2022-11-26T15:15:18.479+00:00",
    invokedBy: {
      userId: {
        superapp: "2023a.Assaf.Ariely",
        email: `${user.userId.email!}`,
      },
    },
    commandAttributes: {
      lat: lat,
      lng: lng,
      radius: 1000,
    },
  };

  const ans = await agent.getScooter.getTire(myCommand);

  return ans;
};



export const GetLimeScooter = async (user: User,lat:number,lng:number) => {

  
  const myCommand: Command = {
    commandId: {
      superapp: "2023a.Assaf.Ariely",
      miniapp: "weather",
      internalCommandId: "490edcaf-08db-4eac-a1e3-2cbf7932c412",
    },
    command: "getScooters",
    targetObject: {
      objectId: {
        superapp: "2023a.Assaf.Ariely",
        internalObjectId: "bf10a7cc-3f27-4b2a-8f9d-1b7dc1bb1475",
      },
    },
    invocationTimeStamp: "2022-11-26T15:15:18.479+00:00",
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

  const ans :limeScotter[] = await agent.getScooter.getLime(myCommand);
  
    
  const tireFormatConvertor :tireScotter[] = ans.map((scooter)=>(
    {lat:scooter.latitude,lng:scooter.longitude,batteryLevel:scooter.battery_percentage}
  ))
  

  return tireFormatConvertor;
};
