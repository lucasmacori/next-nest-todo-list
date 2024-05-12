import { Injectable } from '@nestjs/common';
import { Task } from './task.type';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) { }

  async getTasks(): Promise<Task[]> {
    const entities = await this.taskRepository.find();
    return entities.map((entity) => ({
      id: entity.id,
      title: entity.title,
      description: entity.description,
      done: entity.done,
    }));
  }

  async createTask(task: Task): Promise<Task> {
    const entity = this.taskRepository.create({
      title: task.title,
      description: task.description,
      done: task.done,
    });

    const savedEntity = await this.taskRepository.save(entity);
    return {
      id: savedEntity.id,
      title: savedEntity.title,
      description: savedEntity.description,
      done: savedEntity.done,
    };
  }

  async patchTask(taskId: number, task: Task): Promise<Task> {
    const entity = await this.taskRepository.findOneBy({ id: taskId });

    if (!!task.title) entity.title = task.title;
    if (!!task.description) entity.description = task.description;
    if (task.done !== undefined) entity.done = task.done;

    const savedEntity = await this.taskRepository.save(entity);
    return {
      id: savedEntity.id,
      title: savedEntity.title,
      description: savedEntity.description,
      done: savedEntity.done,
    };
  }

  async deleteTask(taskId: number): Promise<DeleteResult> {
    return this.taskRepository.delete({ id: taskId });
  }
}
