import { TaskService } from '@/services/TaskService';

describe('TaskService', () => {
  let taskService: TaskService;

  beforeEach(async () => {
    taskService = new TaskService();
  });

  it('[TaskService] Should add a task', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskService] Should get a task', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskService] Should get undefined with there is no task in local storage', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskService] Should get next code 1 without task', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskService] Should get next code 2 with one task', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskService] Should return all tasks', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskService] Should return empty array if there is no local storage setup', async () => {
    expect(false).toBeTruthy();
  });

  it('[TaskService] Should update a task', async () => {
    expect(false).toBeTruthy();
  });
});
