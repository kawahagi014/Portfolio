/** @jsxImportSource @emotion/react */
import { Heading, Image, Text, Link } from '@chakra-ui/react';
import { FC, memo } from 'react';

export const About: FC = memo(() => (
  <>
    <Heading as="h2" size="lg">
      Profile
    </Heading>
    <Text>
      大手Sierに新卒で入社、SEとして5年間在籍。
      2年目より大規模PJのリーダーに抜擢され、上流工程・保守・マネジメントを主領域としていた。
      <br />
      webデザイナーに興味を持ち、スクールを就学・卒業。
      <br />
      在学中にコーディングに趣向が移り、webエンジニアを志す。
    </Text>
    <br />
    <Heading as="h2" size="lg">
      Skils
    </Heading>
    <Text mb={7}>
      HTML / CSS・Sass / JavaScript / TypeScript / React / jQuery / SQL
    </Text>
    <Link
      href="https://github.com/kawahagi014"
      target="_blank"
      rel="noopener noreferrer"
      cursor="pointer"
    >
      <Image src={`${String(process.env.PUBLIC_URL)}/images/GitHub-logo.png`} />
    </Link>
  </>
));
