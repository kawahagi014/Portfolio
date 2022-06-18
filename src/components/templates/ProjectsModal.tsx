/* eslint-disable import/no-unresolved */
import {
  Text,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  List,
  ListItem,
  ListIcon,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  UnorderedList,
  Link,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons';

import { projectDataType } from '../../types/projectData';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../theme/swiper.css';

import { Slider } from '../atoms/Slider';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: projectDataType;
};

export const ProjectsModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, project } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay>
        <ModalContent color="blue.800">
          <ModalHeader>
            <Button
              onClick={onClose}
              cursor="pointer"
              bgColor="blue.800"
              color="white"
            >
              Back
            </Button>
          </ModalHeader>
          <ModalBody>
            <Heading as="h2" size="xl">
              {project.title}
            </Heading>
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url}
            </Link>
            <Slider project={project} />
            <Heading as="h3" size="lg" mt="10">
              ABOUT
            </Heading>
            <Text fontSize="sm">{project.about}</Text>
            <Heading as="h3" size="lg" mt="10">
              TOOLS
            </Heading>
            <List fontSize="sm">
              {project.tools.map((tool) => (
                <ListItem key={tool}>
                  <ListIcon as={CheckCircleIcon} color="blue.800" />
                  {tool}
                </ListItem>
              ))}
            </List>
            {project.more !== undefined && (
              <Accordion allowMultiple mt="10">
                <AccordionItem>
                  <Heading as="h4">
                    <AccordionButton>
                      <Box flex="1" fontSize="lg" textAlign="left">
                        more development info…
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </Heading>
                  <AccordionPanel>
                    <Text fontSize="sm" mb="3">
                      {project.more.description}
                    </Text>
                    <UnorderedList fontSize="sm" spacing={3}>
                      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,
                    @typescript-eslint/no-unsafe-call */}
                      {project.more.moreLists.map(
                        (list: { head: string; text: string }) => (
                          <ListItem key={list.head}>
                            <Heading as="h5" size="sm">
                              {list.head}
                            </Heading>
                            <Text whiteSpace="pre-wrap">{list.text}</Text>
                          </ListItem>
                        )
                      )}
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={onClose}
              cursor="pointer"
              bgColor="blue.800"
              color="white"
            >
              Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
});
