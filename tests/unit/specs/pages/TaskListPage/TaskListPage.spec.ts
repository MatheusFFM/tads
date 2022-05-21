import Task from '@/models/class/Task';
import { Colors } from '@/models/constants/Colors';
import LocalStorageMock from '../../LocalStorageMock';
import TaskListPageComponent from './TaskListPageComponent';

describe('TaskListPage.vue', () => {
  let taskList: TaskListPageComponent;
  const localStorageMock = new LocalStorageMock();

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

    localStorageMock.setLocalStorageTask([task]);
    taskList.mount();
    await taskList.component.vm.$nextTick();

    const tasks = (taskList.component.vm as any).tasks;

    expect(tasks.length).toBeGreaterThan(0);
  });
});
