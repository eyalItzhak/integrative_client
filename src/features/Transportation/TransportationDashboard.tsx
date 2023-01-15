import React, { useState } from "react";
import { Form, Input, Button, Select } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import GoogleMapService from "../../api/gooleMapService/GoogleMapService";
import {
  GetLimeScooter,
  GetTireScooter,
} from "../../api/Interfaces/mokupCommands";

import { useStore } from "../../app/stores/store";

const ScooterOptions = [
  { key: "l", text: "Lime", value: "Lime" },
  { key: "t", text: "Tr", value: "Tr" },
];

export default observer(function TransportationDashboard() {
  const { userStore } = useStore();
  const [loadGoogleMap, setLoadGoogleMap] = useState(false);
  const [scootterList, setScootterList] = useState<any[]>([]);

  //Lime Defult
  const [FormScooterType, setFormScooterType] = useState("Tr");
  const [lat, setLat] = useState(32.106171);
  const [lng, setLng] = useState(34.815309);
  const [range,setRange] = useState(1000);

  const handleRangeChange = (e: any, Form: any) =>{
    setRange(Number(Form.value));
  }

  const handleChangeScooterType = (e: any, Form: any) => {
    setFormScooterType(Form.value);
  };

  const handleChangeLat = (e: any, Form: any) => {
    if (Form.value) setLat(Number(Form.value));
  };

  const handleChangelng = (e: any, Form: any) => {
    setLng(Number(Form.value));
  };

  const handleUserMapClick = (lat: number, lng: number) => {
    setLat(lat);
    setLng(lng);
  };

  const handleSubmit = async () => {
    setLoadGoogleMap(false);
    let myScooterList;
    console.log(FormScooterType);
    if (FormScooterType === "Tr") {
      myScooterList = await GetTireScooter(
        userStore.user!,
        FormScooterType,
        lat,
        lng,
        range
      );
    } else myScooterList = await GetLimeScooter(userStore.user!, lat, lng);
    setScootterList(myScooterList);
    console.log(myScooterList);
    setLoadGoogleMap(true);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Field
            onChange={handleChangeScooterType}
            control={Select}
            options={ScooterOptions}
            label={{
              children: "Scooter",
              htmlFor: "form-select-control-gender",
            }}
            placeholder="Scooter"
            search
            searchInput={{ id: "form-select-control-gender" }}
          />
          <Form.Field
            onChange={handleChangeLat}
            id="form-input-control-last-name"
            control={Input}
            label="lat"
            placeholder="your lat"
            value={lat}
            readOnly={true}
          />
          <Form.Field
            onChange={handleChangelng}
            id="form-input-control-first-name"
            control={Input}
            label="lng"
            value={lng}
            readOnly={true}
          />
        </Form.Group>
        <Form.Group>
        <Form.Input
         width={14}
          label={`Range: ${range} m `}
          min={100}
          max={2000}
          onChange={handleRangeChange}
          name="duration"
          step={100}
          type="range"
          disabled={FormScooterType !== "Tr"}
        />
        <Form.Field
          width={2}
          id="form-button-control-public"
          control={Button}
          content="Confirm"
          label="Find me a scooter!"
        />
        </Form.Group>
      </Form>
      {loadGoogleMap && (
        <GoogleMapService
          markers={scootterList}
          handleUserMapClick={handleUserMapClick}
        />
      )}
    </>
  );
});
