import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("../components/Hero/Hero"));
const Services = lazy(() => import("../components/services/Services"));
const Portfolio = lazy(() => import("../components/Portfolio/Portfolio"));
const Contact = lazy(() => import("../components/Contacts/Contacts"));

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Mellstroy | 3D Portfolio & Interactive Projects</title>

        <meta
          name="description"
          content="Mellstroy portfolio: explore interactive 3D projects, services, and creative work built with React and Three.js."
        />

        <meta
          property="og:title"
          content="Mellstroy | 3D Portfolio & Interactive Projects"
        />
        <meta
          property="og:description"
          content="Mellstroy portfolio: explore interactive 3D projects, services, and creative work built with React and Three.js."
        />
        <meta property="og:image" content="/mellstroy-og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mellstroy.game" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mellstroy | 3D Portfolio & Interactive Projects"
        />
        <meta
          name="twitter:description"
          content="Mellstroy portfolio: explore interactive 3D projects, services, and creative work built with React and Three.js."
        />
        <meta name="twitter:image" content="/mellstroy-og-image.png" />
      </Helmet>
      <div className="container">
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#home">
              <Hero />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#services">
              <Services />
            </section>{" "}
          </LazyLoad>
        </Suspense>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"600vh"} offset={-100}>
            <Portfolio />
          </LazyLoad>
        </Suspense>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"} offset={-100}>
            <section id="#contact">
              <Contact />
            </section>{" "}
          </LazyLoad>
        </Suspense>
      </div>
    </>
  );
};

export default MainPage;
