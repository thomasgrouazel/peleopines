import { Flex, Image } from "@mantine/core";
import { useElementSize, useHeadroom } from "@mantine/hooks";

const Navbar = () => {
    const { ref } = useElementSize();
    const pinned = useHeadroom({ fixedAt: 120 });
    return (
        <Flex
            px={"40px"}
            pt={"10px"}
            justify={"space-between"}
            ref={ref}
            w={"100%"}
            sx={{
                position: "fixed",
                boxSizing: "border-box",
                zIndex: "1",
                backgroundColor: pinned ? "" : "white",
            }}
        >
            <Flex>
                <Image src="./assets/petitlogo.png" />
            </Flex>
            <Flex gap={"10px"}>
                <Image
                    sx={{ filter: pinned ? "invert(1)" : "" }}
                    src="./assets/icons8-twitter-144.png"
                />
                <Image
                    sx={{ filter: pinned ? "invert(1)" : "" }}
                    src="./assets/icons8-facebook-144.png"
                />
                <Image
                    sx={{ filter: pinned ? "invert(1)" : "" }}
                    src="./assets/icons8-instagram-144.png"
                />
            </Flex>
        </Flex>
    );
};

export default Navbar;
