import TaskCreatorFormOrganismComponent from './TaskCreatorFormOrganismComponent';
import { selectors } from './TaskCreatorFormOrganismData';

describe('TaskCreatorFormOrganism.vue', () => {
  let taskCreatorForm: TaskCreatorFormOrganismComponent;
  const generateText = (count: number) => {
    const text = '';

    for (let i = 0; i < count; i++) {
      text.concat('a');
    }

    return text;
  };

  beforeEach(async () => {
    taskCreatorForm = new TaskCreatorFormOrganismComponent();
  });

  it('[TaskCreatorFormOrganism] Renders a vue instance', async () => {
    taskCreatorForm.mount();
    expect(taskCreatorForm.component.vm).toBeTruthy();
  });

  it('[TaskCreatorFormOrganism] Should change title after typing in input', async () => {
    taskCreatorForm.mount();
    const title = 'title';

    const input = taskCreatorForm.component.find(selectors.titleInput);
    expect(input.exists()).toBeTruthy();
    input.vm.$emit('input', title);

    expect(taskCreatorForm.component.vm.$data.title).toBe(title);
  });

  it('[TaskCreatorFormOrganism] Should change description after typing in input', async () => {
    taskCreatorForm.mount();
    const description = 'description';

    const input = taskCreatorForm.component.find(selectors.descriptionInput);
    expect(input.exists()).toBeTruthy();
    input.vm.$emit('input', description);

    expect(taskCreatorForm.component.vm.$data.description).toBe(description);
  });

  it('[TaskCreatorFormOrganism] Should change date after selecting the date modal', async () => {
    taskCreatorForm.mount();
    const date = '2020-01-01';

    const picker = taskCreatorForm.component.find(selectors.datePicker);
    expect(picker.exists()).toBeTruthy();
    picker.vm.$emit('input', date);

    expect(
      (taskCreatorForm.component.vm.$data.date as Date).toISOString(),
    ).toMatch(date);
  });

  it('[TaskCreatorFormOrganism] Should change color after selecting the color modal', async () => {
    taskCreatorForm.mount();
    const color = '#000000';

    const picker = taskCreatorForm.component.find(selectors.colorPicker);
    expect(picker.exists()).toBeTruthy();
    picker.vm.$emit('input', color);

    expect(taskCreatorForm.component.vm.$data.color).toBe(color);
  });

  it('[TaskCreatorFormOrganism] Should clear form after clicking the clear button', async () => {
    taskCreatorForm.mount();
    const title = 'title';

    const input = taskCreatorForm.component.find(selectors.titleInput);
    expect(input.exists()).toBeTruthy();
    input.vm.$emit('input', title);

    const clear = taskCreatorForm.component.find(selectors.clear);
    expect(clear.exists()).toBeTruthy();
    clear.vm.$emit('click');
    await taskCreatorForm.component.vm.$nextTick();

    expect(taskCreatorForm.component.vm.$data.title).toBeNull();
  });

  it('[TaskCreatorFormOrganism] Should not clear form after submiting the form with more than 30 characters in title', async () => {
    taskCreatorForm.mount();
    const title = generateText(31);

    const input = taskCreatorForm.component.find(selectors.titleInput);
    expect(input.exists()).toBeTruthy();
    input.vm.$emit('input', title);

    const submit = taskCreatorForm.component.find(selectors.submit);
    expect(submit.exists()).toBeTruthy();
    submit.vm.$emit('click');

    expect(taskCreatorForm.component.vm.$data.title).not.toBeUndefined();
  });

  it('[TaskCreatorFormOrganism] Should not clear form after submiting the form with more than 5000 characters in description', async () => {
    taskCreatorForm.mount();
    const title = 'title';
    const description = generateText(5001);

    const input = taskCreatorForm.component.find(selectors.titleInput);
    expect(input.exists()).toBeTruthy();
    input.vm.$emit('input', title);

    const descriptionInput = taskCreatorForm.component.find(
      selectors.descriptionInput,
    );
    expect(descriptionInput.exists()).toBeTruthy();
    descriptionInput.vm.$emit('input', description);

    const submit = taskCreatorForm.component.find(selectors.submit);
    expect(submit.exists()).toBeTruthy();
    submit.vm.$emit('click');

    expect(taskCreatorForm.component.vm.$data.title).not.toBeUndefined();
  });
});
