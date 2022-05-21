import Task from '@/models/class/Task';

describe('Task', () => {
  it('[Task] Should create an active task', async () => {
    const task = new Task();

    expect(task.done).toBeFalsy();
  });
});
