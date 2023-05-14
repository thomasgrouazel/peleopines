import {
    BackgroundImage,
    Box,
    Button,
    Flex,
    Image,
    Overlay,
    Text,
} from "@mantine/core";

const Landing = () => {
    return (
        <Box>
            <BackgroundImage
                h={"100vh"}
                w={"100%"}
                src="./assets/BackgroundImage.png"
            >
                <Flex direction={"column"} h={"100%"}>
                    <Flex sx={{ flex: 1 }} align={"center"}>
                        <Image
                            src="./assets/LogoBigLogo.png"
                            fit="contain"
                            height={"200px"}
                        />
                    </Flex>
                    <Flex justify={"space-between"} align={"baseline"} m={"sm"}>
                        <Text color="white" size={"xl"}>
                            Your prehistoric adventure awaits
                        </Text>
                        <Button
                            color="paleOrange.0"
                            size="lg"
                            sx={{
                                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                            }}
                        >
                            Download
                        </Button>
                    </Flex>
                </Flex>
            </BackgroundImage>
        </Box>
    );
};

export default Landing;
