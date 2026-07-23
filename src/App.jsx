import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="relative">
                    <div className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center" />
                    <div className="relative">
                        <Navbar />
                        <Hero />
                    </div>
                    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary to-transparent" />
                </div>
                <About />
                <Works />
                <Experience />
                <Tech />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
                <footer className="w-full pb-6 pt-2">
                    <p className="text-xs text-secondary text-center px-4">
                        Modelo 3D "Gaming Desktop PC" por{" "}
                        <a
                            href="https://sketchfab.com/Yolala1232"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            Yolala1232
                        </a>
                        , licencia{" "}
                        <a
                            href="http://creativecommons.org/licenses/by/4.0/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                        >
                            CC-BY-4.0
                        </a>
                        .
                    </p>
                </footer>
            </div>
        </BrowserRouter>
    );
};

export default App;