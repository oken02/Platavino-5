import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { modalContext } from "../contexts/modalContext";
import { setActions } from "../store/modalReducer";

export function MyModal({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const modalContext = useContext(modalContext)
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(
    //   setActions({ isOpen, onOpen: () => onOpen(), onClose: () => onClose() })
    // );
    
  }, []);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h2>MY MODAL</h2>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
