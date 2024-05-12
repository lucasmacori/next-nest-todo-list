import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.type';
import { DeleteResult } from 'typeorm';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) { }

  @Get()
  async getTasks(): Promise<Task[]> {
    return this.taskService.getTasks();
  }

  @Post()
  async createTask(@Body() task: Task): Promise<Task> {
    return this.taskService.createTask(task);
  }

  @Delete(':taskId')
  async deleteTask(@Param() params: { taskId: number }): Promise<DeleteResult> {
    return this.taskService.deleteTask(params.taskId);
  }
}
