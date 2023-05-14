import { Box, Flex, Image, Text } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import React from "react";

const Vert = () => {
    return (
        <Box pt={"25px"} bg={"white"}>
            <Flex
                justify={"center"}
                align={"center"}
                bg={"green.9"}
                direction={"column"}
                px={"170px"}
                gap={"lg"}
                sx={{ "div:nth-child(odd)": { flexDirection: "row-reverse" } }}
            >
                <Text fz={"50px"}>Lorem Ipsum dolor sit ame</Text>
                <Flex gap={"xl"}>
                    <Image src={"./assets/lorem1.png"} />
                    <Flex direction={"column"}>
                        <Text fz={"35px"}>Lorem Ipsum</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text>
                    </Flex>
                </Flex>
                <Flex gap={"xl"}>
                    <Image src={"./assets/lorem2.png"} />
                    <Flex direction={"column"}>
                        <Text fz={"35px"}>Lorem Ipsum</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text>
                    </Flex>
                </Flex>
                <Flex gap={"xl"} pb={"15px"}>
                    <Image src={"./assets/lorem3.png"} />
                    <Flex direction={"column"}>
                        <Text fz={"35px"}>Lorem Ipsum</Text>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Vert;
