import { Carousel } from "@mantine/carousel";
import { Box, Flex, Image, Text } from "@mantine/core";
import {
    IconColumnInsertRight,
    IconColumnInsertLeft,
} from "@tabler/icons-react";

const Manege = () => {
    return (
        <Box bg={"white"} pt={"25px"}>
            <Flex justify={"center"}>
                <Text color="black" size={"40px"} fw={500}>
                    Art Gallery
                </Text>
            </Flex>
            <Carousel
                pt={"25px"}
                slideSize="70%"
                //height={600}
                slideGap="md"
                loop
                withIndicators
                nextControlIcon={<IconColumnInsertRight size={40} />}
                previousControlIcon={<IconColumnInsertLeft size={40} />}
                sx={{
                    ".mantine-Carousel-control": {
                        background: "none",
                        border: "none",
                        color: "white",
                    },
                }}
            >
                <Carousel.Slide sx={{ borderRadius: 15 }}>
                    <Image src={"./assets/carousel.png"} />
                </Carousel.Slide>
                <Carousel.Slide sx={{ borderRadius: 15 }}>
                    <Image src={"./assets/carousel.png"} />
                </Carousel.Slide>
                <Carousel.Slide sx={{ borderRadius: 15 }}>
                    <Image src={"./assets/carousel.png"} />
                </Carousel.Slide>
            </Carousel>
        </Box>
    );
};

export default Manege;
