import { User } from "../../app/models/user";
import agent from "../agent";
import { Command } from "./command";

export const gptAnswerCommand = async (q: string, user: User) => {

  console.log(user.userId.email)

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
        internalObjectId: "09cf01f7-5a95-4ceb-9feb-f34b20075acf",
      },
    },
    invocationTimeStamp: "2022-11-26T15:15:18.479+00:00",
    invokedBy: {
      userId: { superapp: "2023a.Assaf.Ariely", email: `${user.userId.email!}` },
    },
    commandAttributes: { prompt: `${q}` },
  };

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
        internalObjectId: "09cf01f7-5a95-4ceb-9feb-f34b20075acf",
      },
    },
    invocationTimeStamp: "2022-11-26T15:15:18.479+00:00",
    invokedBy: {
      userId: { superapp: "2023a.Assaf.Ariely", email: "eden@demo.org" },
    },
    commandAttributes: { prompt: `no relvent` },
  };

  const ans = agent.TlvWeather.getWeather(myCommand);

  return ans;
};
