import styled from "styled-components";

export const TasksContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  width: 300px;
  padding: 10px;
  text-align: center;
`;

export const AddTaskButton = styled.button`
  margin-top: 20px;
  border: none;
  padding: 10px 20px;
  background-color: #62d3d3;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;
