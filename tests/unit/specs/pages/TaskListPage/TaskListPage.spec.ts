import Task from '@/models/class/Task';
import { Colors } from '@/models/constants/Colors';
import TaskListPageComponent from './TaskListPageComponent';

describe('TaskListPage.vue', () => {
  let taskList: TaskListPageComponent;

  beforeEach(async () => {
    taskList = new TaskListPageComponent();
  });

  it('[TaskListPage] Renders a vue instance', async () => {
    taskList.mount();
    expect(taskList.component.vm).toBeTruthy();
  });

  it('[TaskListPage] Should get tasks on mount', async () => {
    const task: Task = {
      code: 1,
      color: Colors.Active,
      date: new Date(),
      description: 'mock',
      done: false,
      title: 'Mock',
    };

    taskList.setLocalStorage([task]);
    taskList.mount();
    await taskList.component.vm.$nextTick();

    const tasks = (taskList.component.vm as any).tasks;

    expect(tasks.length).toBeGreaterThan(0);
  });
});
