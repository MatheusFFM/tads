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
    expect(false).toBeTruthy();
  });
});
