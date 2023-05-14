import { Box, Divider, Flex, Image, Text } from "@mantine/core";

const Footer = () => {
    return (
        <Box
            pt={"25px"}
            w={"100%"}
            bg={"white"}
            sx={{ boxSizing: "border-box" }}
        >
            <Flex
                px={"40px"}
                pt={"10px"}
                justify={"space-between"}
                bg={"paleOrange.0"}
            >
                <Flex>
                    <Image src="./assets/petitlogo.png" />
                </Flex>
                <Flex gap={"10px"}>
                    <Image
                        sx={{ filter: "invert(1)" }}
                        src="./assets/icons8-twitter-144.png"
                    />
                    <Image
                        sx={{ filter: "invert(1)" }}
                        src="./assets/icons8-facebook-144.png"
                    />
                    <Image
                        sx={{ filter: "invert(1)" }}
                        src="./assets/icons8-instagram-144.png"
                    />
                </Flex>
            </Flex>
            <Flex
                bg={"green.9"}
                justify={"space-evenly"}
                py={"25px"}
                px={"80px"}
            >
                <Flex direction={"column"}>
                    <Text fz={"40px"} fw={500}>
                        titre
                    </Text>
                    <Text>infosperso@email.com</Text>
                    <Text>infosperso@email.com</Text>
                    <Text>infosperso@email.com</Text>
                </Flex>
                <Divider orientation="vertical" />
                <Flex direction={"column"}>
                    <Text fz={"40px"} fw={500}>
                        titre
                    </Text>
                    <Text>infosperso@email.com</Text>
                    <Text>infosperso@email.com</Text>
                    <Text>infosperso@email.com</Text>
                </Flex>
                <Divider orientation="vertical" />
                <Flex direction={"column"}>
                    <Text fz={"40px"} fw={500}>
                        titre
                    </Text>
                    <Text>infosperso@email.com</Text>
                    <Text>infosperso@email.com</Text>
                    <Text>infosperso@email.com</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
