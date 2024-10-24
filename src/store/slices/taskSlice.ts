import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  description: string;
}

interface TasksState {
  tasksList: Task[];
}

const initialState: TasksState = {
  tasksList: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        description: action.payload,
      };
      state.tasksList.push(newTask);
    },
  },
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
