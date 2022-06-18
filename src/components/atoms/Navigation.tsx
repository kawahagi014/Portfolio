/** @jsxImportSource @emotion/react */
import { FC, memo } from 'react';
import { css } from '@emotion/react';
import { HashLink } from 'react-router-hash-link';
import { List, ListItem } from '@chakra-ui/react';

type Props = {
  isIntersecting: string;
};

export const Navigation: FC<Props> = memo((props) => {
  const { isIntersecting } = props;

  return (
    <nav css={navigation}>
      <List spacing={1} fontSize={{ base: 'md', md: 'xl' }}>
        <ListItem>
          <HashLink
            smooth
            to="#section01"
            css={isIntersecting === 'section01' ? active : nonactive}
          >
            01 Home
          </HashLink>
        </ListItem>
        <ListItem>
          <HashLink
            smooth
            to="#section02"
            css={isIntersecting === 'section02' ? active : nonactive}
          >
            02 Project
          </HashLink>
        </ListItem>
        <ListItem>
          <HashLink
            smooth
            to="#section03"
            css={isIntersecting === 'section03' ? active : nonactive}
          >
            03 About
          </HashLink>
        </ListItem>
        <ListItem>
          <HashLink
            smooth
            to="#section04"
            css={isIntersecting === 'section04' ? active : nonactive}
          >
            04 Contact
          </HashLink>
        </ListItem>
      </List>
    </nav>
  );
});

const navigation = css`
  padding-left: 10px;
  border-left: solid 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 5%;
  right: 5%;
`;

const nonactive = css`
  opacity: 50%;
  transition: opacity 0.3s;
  cursor: pointer;
`;

const active = css`
  opacity: 100%;
  cursor: pointer;
`;
