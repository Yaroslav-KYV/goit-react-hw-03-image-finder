import styled from 'styled-components';

import styledVar from '../../variableStyle/styled-variables';

export const ImgGalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  :hover .fullscreen-button,
  :focus .fullscreen-button {
    opacity: 1;
  }

  :hover,
  :focus {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const StatsSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  user-select: none;
  color: #414141;
  padding: 4px;
`;

export const StatsItem = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const FullScreenBtn = styled(styledVar.RoundBtn)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`;
