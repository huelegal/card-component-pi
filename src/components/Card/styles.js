import styled from "styled-components";

export const Container = styled.div`
  width: calc(1920px / 8);
  height: calc(1080px / 3);

  display: flex;

  flex-direction: column;
  align-items: center;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  overflow: hidden;
  border-radius: 6px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const Image = styled.img``;

export const Title = styled.h1``;

export const Description = styled.p``;
