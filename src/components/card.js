import React from "react";
import { Card, Badge } from "antd";

const { Meta } = Card;
const statusColor = {
  Alive: "green",
  Dead: "red",
  unknown: "gray",
};
const CharacterCard = ({ character, onClick }) => {
  return (
    <Badge.Ribbon
      text={character.status}
      color={statusColor[character.status] || "blue"}
    >
      <Card
        hoverable
        style={{ width: 240, textAlign: "center" }}
        cover={<img alt={character.name} src={character.image} />}
      >
        <Meta
          title={character.name}
          description={
            <>
              <p style={{ color: statusColor[character.status] || "blue" }}>
                <span className="status"> Status:</span> {character.status}
              </p>
              <p>
                <span className="status"> Last Location:</span>{" "}
                {character.location?.name}
              </p>
            </>
          }
        />
      </Card>
    </Badge.Ribbon>
  );
};

export default CharacterCard;
