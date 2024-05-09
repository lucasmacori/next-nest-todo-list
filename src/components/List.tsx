"use client";
import { Task } from "@/types/task.type";
import { uniqueId } from "lodash";

type ListProps = {
  tasks: Task[];
};

const List: React.FC<ListProps> = ({ tasks }) => (
  <>
    <h1>My todo list</h1>
    <ul>
      {tasks.map((task) => (
        <li key={uniqueId()}>{task.title}</li>
      ))}
    </ul>
  </>
);

export default List;
