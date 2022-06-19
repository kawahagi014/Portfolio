/** @jsxImportSource @emotion/react */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FC, memo } from "react";
import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";

import { Home } from "../templates/Home";
import { Projects } from "../templates/Projects";
import { About } from "../templates/About";
import { Contact } from "../templates/Contact";
import { Navigation } from "../atoms/Navigation";
import { useScrollObserver } from "../hooks/useScrollObserver";

export const Main: FC = memo(() => {
  const { intersecting, fullpageRef } = useScrollObserver();

  return (
    <>
      <Box css={fullPageScrollCss} ref={fullpageRef}>
        <section id="section01" css={sectionCss}>
          <Home isIntersecting={intersecting!} />
        </section>
        <section id="section02" css={sectionCss}>
          <Projects />
        </section>
        <section id="section03" css={sectionCss}>
          <About />
        </section>
        <section id="section04" css={sectionCss}>
          <Contact />
        </section>
      </Box>
      <Navigation isIntersecting={intersecting!} />
    </>
  );
});

const fullPageScrollCss = css`
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const sectionCss = css`
  width: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  padding: 10%;
  scroll-margin-top: 7rem;
  scroll-snap-align: start;
`;
