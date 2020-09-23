import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Container, Row, Col } from "react-bootstrap";

export const Travel = () => {
  const [Salesman, setsalesman] = useState("Alex");
  const [Location, setlocation] = useState("New York");
  const NameOptions = ["Zubair", "Tauseef", "Khwaja"];
  const defaultNameOption = NameOptions[0];
  const LocationOption = ["Pune", "Nanded", "Aurangabad"];
  const defaultLocationOption = LocationOption[0];
  const handleOnSelectsales = (e) => setsalesman(e.value);
  const handleOnSelectLocation = (e) => setlocation(e.value);
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <p>Select Sales Man:</p>
          </Col>
          <Col>
            <Dropdown
              options={NameOptions}
              value={defaultNameOption}
              placeholder="Select a Name"
              onChange={handleOnSelectsales}
            />
          </Col>
          <Col>
            <p>Select Location:</p>
          </Col>
          <Col>
            <Dropdown
              options={LocationOption}
              value={defaultLocationOption}
              placeholder="Select a Location"
              onChange={handleOnSelectLocation}
            />
          </Col>
        </Row>
        You Have Selected <b>{Salesman}</b> Sales Man and<b>{Location}</b>
        {"  "}
      </Container>
    </div>
  );
};
