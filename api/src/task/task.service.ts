import { Injectable } from '@nestjs/common';
import { Task } from './task.type';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async getTasks(): Promise<Task[]> {
    const entities = await this.taskRepository.find();
    return entities.map((entity) => ({
      title: entity.title,
      description: entity.description,
      done: entity.done,
    }));
  }
}
