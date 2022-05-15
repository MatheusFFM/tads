import Task from '@/models/class/Task';

export class TaskService {
  private localName = 'Tasks';

  private nextCode(): number {
    const tasks = this.getTasks();
    return tasks.sort((t) => t.code)[tasks.length - 1].code + 1;
  }

  public getTasks(): Task[] {
    const tasksString = localStorage.getItem(this.localName);
    return tasksString ? JSON.parse(tasksString) : [];
  }

  public addTask(title: string, description: string, date: Date): void {
    const task: Task = {
      code: this.nextCode(),
      date,
      description,
      done: false,
      title,
    };
    this.postTask(task);
  }

  public postTasks(tasks: Task[]): void {
    localStorage.setItem(this.localName, JSON.stringify(tasks));
  }

  public postTask(task: Task): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.postTasks(tasks);
  }

  public getTask(code: number): Task | undefined {
    const tasks = this.getTasks();
    return tasks.find((t) => t.code === code);
  }

  public updateTask(task: Task): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex((t) => t.code === task.code);
    if (index) {
      tasks[index] = task;
      this.postTasks(tasks);
    }
  }
}
