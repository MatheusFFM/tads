import TaskCreateTemplateComponent from './TaskCreateTemplateComponent';
import { selectors } from './TaskCreateTemplateData';

describe('TaskCreateTemplate.vue', () => {
  let taskCreate: TaskCreateTemplateComponent;

  beforeEach(async () => {
    taskCreate = new TaskCreateTemplateComponent();
  });

  it('[TaskCreateTemplate] Renders a vue instance', async () => {
    taskCreate.mount();
    expect(taskCreate.component.vm).toBeTruthy();
  });

  it('[TaskCreateTemplate] Renders task create title', async () => {
    taskCreate.mount();

    const title = taskCreate.component.find(selectors.title);

    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe('Create a new ToDo task');
  });
});
