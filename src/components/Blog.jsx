import { Button, Card, CardSection, Flex, Image, Text } from "@mantine/core";

const Blog = () => {
    return (
        <Flex
            direction={"column"}
            sx={{ backgroundColor: "white" }}
            px={"150px"}
            gap={"md"}
            pt={"25px"}
        >
            <Flex justify={"center"}>
                <Text color="black" fz={"40px"} fw={500}>
                    Development Blog
                </Text>
            </Flex>
            <Flex px={"lg"} gap={"lg"} wrap={"wrap"} justify={"center"}>
                <Card
                    sx={{
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    }}
                    bg="paleOrange.0"
                    maw={"500px"}
                >
                    <Card.Section>
                        <Image src={"./assets/devblogauche.png"} />
                    </Card.Section>
                    <Flex direction={"column"} wrap={"wrap"}>
                        <Text fz={"xl"}>Collaboration Announce</Text>
                        <Text fz={"lg"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                    </Flex>
                </Card>
                <Card
                    sx={{
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    }}
                    bg="paleOrange.0"
                    maw={"500px"}
                >
                    <Card.Section>
                        <Image
                            src={"./assets/devblogdroite.png"}
                            sx={{
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </Card.Section>
                    <Flex
                        direction={"column"}
                        wrap={"wrap"}

                        //sx={{ backgroundColor: "orange" }}
                    >
                        <Text fz={"xl"}>Collaboration Announce</Text>
                        <Text fz={"lg"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </Text>
                    </Flex>
                </Card>
            </Flex>
            <Flex px={"50px"} justify={"flex-end"}>
                <Button
                    sx={{
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                    }}
                    color="paleOrange.0"
                >
                    Browse news
                </Button>
            </Flex>
        </Flex>
    );
};

export default Blog;
