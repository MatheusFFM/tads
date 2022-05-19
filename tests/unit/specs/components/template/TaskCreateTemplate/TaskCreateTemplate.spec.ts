import TaskCreateTemplateComponent from './TaskCreateTemplateComponent';

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
    expect(false).toBeTruthy();
  });
});
