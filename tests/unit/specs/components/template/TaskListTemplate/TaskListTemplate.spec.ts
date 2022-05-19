import TaskListTemplateComponent from './TaskListTemplateComponent';

describe('TaskListTemplate.vue', () => {
  let taskList: TaskListTemplateComponent;

  beforeEach(async () => {
    taskList = new TaskListTemplateComponent();
  });

  it('[TaskListTemplate] Renders a vue instance', async () => {
    taskList.mount();
    expect(taskList.component.vm).toBeTruthy();
  });

  it('[TaskListTemplate] Renders task list title with 0 tasks', async () => {
    taskList.mount();
    expect(false).toBeTruthy();
  });

  it('[TaskListTemplate] Renders task list with more than tasks', async () => {
    taskList.mount();
    expect(false).toBeTruthy();
  });
});
