import { createContext, useMemo, useState } from "react";
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

const initialState = {
  // data del contexto
  user: null, // información del usuario
  isAuthenticated: false, // si está o no logueado
  toggleAuth: () => null, // función para actualizar el contexto
};

export const ModalContext = createContext(initialState);

// Provide Component
export const ModalContextProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modal, setModal] = useState({
    onOpen,
    onClose,
    data: {},
  });
  console.log("MODAL RENDER");

  const setData = (data) => {
    setModal({ ...modal, data });
    onOpen();
  };

  // useEffect(() => {

  // }, [modal.data])

  const close = () => {
    console.log("CLOSED");
    setModal({ ...modal, data: {} });

    onClose();
  };

  // const childrenMemo = useMemo(() => children, []);

  return (
    <ModalContext.Provider value={{ ...modal, setData }}>
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal isOpen={isOpen} onClose={close}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{modal.data.title || "MODAL"} </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h2>MY MODAL</h2>
              {modal.data.body}
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="purple" mr={3} onClick={modal.data.onSubmit}>
                Add wine
              </Button>
              <Button variant="ghost">Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      {children}
    </ModalContext.Provider>
  );
};
