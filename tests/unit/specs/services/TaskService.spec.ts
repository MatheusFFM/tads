import { TaskService } from '@/services/TaskService';

describe('TaskService', () => {
  let taskService: TaskService;
  const today = new Date();

  beforeEach(async () => {
    taskService = new TaskService();
  });

  it('[TaskService] Should get empty array when there is no task in local storage', async () => {
    expect(taskService.getTasks().length).toBe(0);
  });

  it('[TaskService] Should add a task with code 1 without task', async () => {
    expect(taskService.addTask('test-1', 'test', today, '#000000')).toBe(1);
  });

  it('[TaskService] Should add a task with code code 2 with one task at localstoage', async () => {
    expect(taskService.addTask('test-2', 'test', today, '#000000')).toBe(2);
  });

  it('[TaskService] Should get a task', async () => {
    const task = taskService.getTask(1);
    expect(task?.code).toBe(1);
    expect(task?.title).toBe('test-1');
    expect(task?.description).toBe('test');
    expect(task?.done).toBeFalsy();
  });

  it('[TaskService] Should return all tasks', async () => {
    expect(taskService.getTasks().length).toBe(2);
  });

  it('[TaskService] Should update a task', async () => {
    taskService.updateTask({
      code: 1,
      color: '#000000',
      date: today,
      description: 'updated',
      done: true,
      title: 'test-1',
    });

    const task = taskService.getTask(1);
    expect(task?.code).toBe(1);
    expect(task?.title).toBe('test-1');
    expect(task?.description).toBe('updated');
    expect(task?.done).toBeTruthy();
  });
});
