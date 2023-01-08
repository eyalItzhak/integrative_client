import React, { useState } from "react";
import { Form, TextArea, Card } from "semantic-ui-react";
import {gptAnswerCommand} from "../../api/Interfaces/mokupCommands";

export default function OracleGptDashboard() {
  const [q, setq] = useState("");
  const [ans, setAns] = useState<any[]>([]);
  const [isLoading ,setIsLoading] = useState(false)

  const handleChange = (e: any, Form: any) => {
    setq(Form.value);
  };

  const handleSubmit = async () => {
  setIsLoading(true);
    const myans = await gptAnswerCommand(q);
    const element = {
      header: `${q}`,
      description: `${myans.text}`,
    };
    setAns([...ans, element]);
    setIsLoading(false);
  };

  return (
    <>
      <Form size="huge" onSubmit={handleSubmit}>
        <Form.Input
          control={TextArea}
          label="Ask me everthing!"
          placeholder="You ask i tell (about the my city)"
          name="questions"
          onChange={handleChange}
        />
        {!isLoading && <Form.Button content="Submit" />}
        {isLoading &&  <Form.Button basic loading> Loading</Form.Button> }
        <Card.Group items={ans} />
      </Form>
    </>
  );
}
