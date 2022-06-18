/** @jsxImportSource @emotion/react */
import { FC, memo, useState } from 'react';
import {
  Center,
  Image,
  Wrap,
  WrapItem,
  Text,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { ProjectsModal } from './ProjectsModal';

import { projectDataType } from '../../types/projectData';
import data from '../../utils/modalcontents.json';

export const Projects: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState<projectDataType>();
  const projectData: Array<projectDataType> = data;

  const openModal = (project: projectDataType) => {
    setModalData(project);
    onOpen();
  };

  return (
    <Wrap justify="center">
      {projectData.map((project) => (
        <div key={project.id}>
          <WrapItem cursor="pointer">
            <Center
              m={{ base: 3, md: 10 }}
              fontSize={{ base: 'lg', md: '2xl' }}
              filter="drop-shadow(2px 4px 6px black);"
              onClick={() => {
                openModal(project);
              }}
            >
              <Stack align="center">
                <Image
                  boxSize={{ base: 110, md: 160 }}
                  src={`${String(process.env.PUBLIC_URL)}${String(
                    project.img
                  )}`}
                />
                <Text>{project.title}</Text>
              </Stack>
            </Center>
          </WrapItem>
          {modalData !== undefined && (
            <ProjectsModal
              isOpen={isOpen}
              onClose={onClose}
              project={modalData}
            />
          )}
        </div>
      ))}
    </Wrap>
  );
});
