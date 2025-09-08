import styled from "styled-components";

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  width: ${({ size }) => (size === "large" ? "400px" : "250px")};
  transition: width 0.3s ease;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const Name = styled.h2`
  margin: 10px 0;
`;

export const Bio = styled.p`
  font-size: 14px;
`;

export const ToggleButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.btnHover};
  }
`;
