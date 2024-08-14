import styled from "styled-components";

export const Icon = styled.i`
  display: flex;
  align-items: center;
  text-align: center;

  cursor: pointer;

  color: var(--icon-color);

  &:hover {
    color: var(--icon-colored);
  }
`;

export const Bar = styled.div`
  width: 100%;
  min-height: 2px;

  margin: 0.5rem 0;
  border-radius: 25px;

  background-color: var(--icon-colored);
`;
