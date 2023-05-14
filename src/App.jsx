import { MantineProvider } from "@mantine/core";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Blog from "./components/blog";
import Vert from "./components/Vert";
import Manege from "./components/Manege";
import Footer from "./components/Footer";

function App() {
    return (
        <MantineProvider
            theme={{ colors: { paleOrange: ["#E98138", "#E98138DD"] } }}
        >
            <Navbar />
            <Landing />
            <Blog />
            <Vert />
            <Manege />
            <Footer />
        </MantineProvider>
    );
}

export default App;
