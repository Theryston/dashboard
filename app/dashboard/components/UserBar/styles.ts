import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled(motion.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  height: 100%;
  width: 100%;
  background: rgba(7, 10, 26, 0.8);
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled(motion.div)`
  color: #fff;
  background: #000000;
  box-sizing: border-box;
  height: 100%;
  width: 474px;
  z-index: 101;

  @media (max-width: 1440px) {
    width: 356px;
  }
`;
