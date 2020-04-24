import React from "react";
import { Box, Heading, Badge, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
  return (
    <Link to={`${game.url}`}>
      <Box
        mx={10}
        my={6}
        pb={6}
        w="280px"
        border="1px"
        borderColor="gray.200"
        rounded="md"
        overflow="hidden">
        <Image
          src="https://via.placeholder.com/250x250/333/fff?text=Cover%20of%20the%20Game"
          objectFit="cover"
          htmlWidth="100%"
        />
        {/* Top Row */}
        <Box px={4} py="4">
          <Box d="flex" alignItems="baseline">
            {game.editors_choice === "Y" ? (
              <Badge rounded="full" pr="2" variantColor="yellow">
                Editors Choice
              </Badge>
            ) : null}

            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2">
              {game.genre} &bull; {game.release_year}
            </Box>
          </Box>
        </Box>

        {/* Title */}
        <Box
          mt="1"
          px={4}
          fontWeight="semibold"
          as="h4"
          fontSize="1.4em"
          lineHeight="tight"
          isTruncated>
          {game.title}
        </Box>
      </Box>
    </Link>
  );
};

export default GameCard;
