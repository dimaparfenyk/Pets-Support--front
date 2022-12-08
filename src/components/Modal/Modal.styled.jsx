import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.gray};
  backdrop-filter: blur(5px);
  overflow: scroll;
  z-index: 999;
`;

export const ModalWindow = styled.div`
  overflow: auto;
  width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.white};
  &::-webkit-scrollbar {
    width: 0;
  }

  @media ${p => p.theme.media.tablet} {
    width: 608px;
    border-radius: ${p => p.theme.radii.normal};
  }
`;
