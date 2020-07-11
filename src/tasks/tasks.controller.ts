import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get('tasks')
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }
}
