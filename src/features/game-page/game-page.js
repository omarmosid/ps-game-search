import React from "react";
import { Flex, Heading } from "@chakra-ui/core";
import { useParams } from "react-router-dom";

const GamePage = () => {
  const { gameslug } = useParams();
  console.log(gameslug);
  return (
    <Flex>
      <Heading>{gameslug}</Heading>
    </Flex>
  );
};

export default GamePage;
