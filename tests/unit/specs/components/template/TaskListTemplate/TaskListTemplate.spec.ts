import TaskListTemplateComponent from './TaskListTemplateComponent';
import { propsWithoutTasks, selectors } from './TaskListTemplateData';

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
    taskList.mount(propsWithoutTasks);

    const title = taskList.component.find(selectors.title);
    const content = taskList.component.find(selectors.content);

    expect(title.exists()).toBeTruthy();
    expect(content.exists()).toBeFalsy();
  });

  it('[TaskListTemplate] Renders task list with tasks', async () => {
    taskList.mount();

    const title = taskList.component.find(selectors.title);
    const content = taskList.component.find(selectors.content);

    expect(title.exists()).toBeFalsy();
    expect(content.exists()).toBeTruthy();
  });
});
