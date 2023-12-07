import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

const Card_id = ({ data }) => {
  console.log(data);
  return (
    <Box
      m={10}
      w={"450px"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="md"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1000' height='800' preserveAspectRatio='none' viewBox='0 0 500 300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3crect width='500' height='300' x='0' y='0' fill='rgba(59%2c 57%2c 57%2c 1)'%3e%3c/rect%3e%3cpath d='M229.47 313.71C276.56 292.9 240.25 155.98 346.65 144.38 453.05 132.78 519.5 70.29 581.01 69.38' stroke='rgba(142%2c 205%2c 11%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M232.73 331.7C288.65 315.43 286.84 175.19 387.55 157.61 488.26 140.03 497.35 68.09 542.37 64.61' stroke='rgba(142%2c 205%2c 11%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M84.8 336.53C143.45 310.07 145.45 130.56 229.93 123.96 314.41 117.36 302.5 161.46 375.06 161.46 447.63 161.46 482.72 124.26 520.19 123.96' stroke='rgba(142%2c 205%2c 11%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M91.29 351.91C166.63 342.68 211.63 173 336.28 172.6 460.93 172.2 516.29 258.32 581.27 259.6' stroke='rgba(142%2c 205%2c 11%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3cpath d='M127.56 322.46C204.06 296.71 219.98 76.73 331.98 72.56 443.98 68.39 482.7 137.75 536.4 138.56' stroke='rgba(142%2c 205%2c 11%2c 0.5)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='500' height='300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e\")",
        backgroundPosition: "center",
      }}
    >
      <Badge fontSize={"xl"} colorScheme="black" mb={2}>
        {data[1]}
      </Badge>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image
          height={"100px"}
          width={"100px"}
          objectFit={"cover"}
          borderRadius={"500px"}
          src="https://media.licdn.com/dms/image/D5635AQGUTZEXZFYNxg/profile-framedphoto-shrink_800_800/0/1698697437052?e=1702000800&v=beta&t=CYwukOX7aWw8Z5OSflgwIgFA4XupuBAQr325D8OlYjI"
          alt="name"
        />
        <Flex mx={"5"} justifyContent={"space-between"} direction={"column"}>
          <Text fontWeight="bold" fontSize="lg">
            Name: {data[2]} {data[3]}
          </Text>
          <Text fontWeight="normal" fontSize="lg">
            Gender: {data[4]}
          </Text>
          <Text fontWeight="normal" fontSize="lg">
            Age: {data[6]}
          </Text>
          <Text fontWeight="normal" fontSize="lg">
            Expiry: {data[14]}
          </Text>
        </Flex>
        <Flex
          direction={"column"}
          flex="1"
          justifyContent={"space-between"}
          alignItems={"end"}
        >
          <ReactCountryFlag
            className="emojiFlag"
            countryCode="US"
            style={{
              fontSize: "2em",
            }}
            aria-label="United States"
          />
          <ReactCountryFlag
            className="emojiFlag"
            countryCode="IN"
            style={{
              fontSize: "2em",
            }}
            aria-label="United States"
          />
        </Flex>
      </Flex>
      <Box mt={4}>
        <Text fontWeight="bold" fontSize="lg">
          Address
        </Text>
        <Text>{data[5]} </Text>
        <Badge colorScheme="green" mt={2}>
          Passport
        </Badge>
      </Box>
    </Box>
  );
};

export default Card_id;
