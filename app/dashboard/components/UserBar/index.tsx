"use client";

import * as S from "./styles";
import { AnimatePresence } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function UserBar({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <S.Container
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose()}
        >
          <S.Content
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            exit={{ x: 500 }}
            transition={{
              duration: 0.2,
            }}
          ></S.Content>
        </S.Container>
      )}
    </AnimatePresence>
  );
}
