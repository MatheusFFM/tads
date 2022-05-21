import HelperDate from '@/models/class/HelperDate';
import TaskCreatorOrganismComponent from './TaskCreatorOrganismComponent';
import { selectors } from './TaskCreatorOrganismData';

describe('TaskCreatorOrganism.vue', () => {
  let taskCreator: TaskCreatorOrganismComponent;

  beforeEach(async () => {
    taskCreator = new TaskCreatorOrganismComponent();
  });

  it('[TaskCreatorOrganism] Renders a vue instance', async () => {
    taskCreator.mount();
    expect(taskCreator.component.vm).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should change title after typing in input', async () => {
    taskCreator.mount();
    const title = 'title';

    const input = taskCreator.component.find(selectors.titleInput);
    expect(input.exists()).toBeTruthy();
    input.vm.$emit('input', title);

    expect(taskCreator.component.vm.$data.title).toBe(title);
  });

  it('[TaskCreatorOrganism] Should change description after typing in input', async () => {
    taskCreator.mount();
    const description = 'description';

    const input = taskCreator.component.find(selectors.descriptionInput);
    expect(input.exists()).toBeTruthy();
    input.vm.$emit('input', description);

    expect(taskCreator.component.vm.$data.description).toBe(description);
  });

  it('[TaskCreatorOrganism] Should change date after selecting the date modal', async () => {
    taskCreator.mount();
    const helperDate = new HelperDate();
    const date = '2020-01-01';

    const picker = taskCreator.component.find(selectors.datePicker);
    expect(picker.exists()).toBeTruthy();
    picker.vm.$emit('input', date);

    expect(
      helperDate.sameDay(
        new Date(taskCreator.component.vm.$data.date),
        new Date(date),
      ),
    ).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should change color after selecting the color modal', async () => {
    taskCreator.mount();
    const color = '#000000';

    const picker = taskCreator.component.find(selectors.colorPicker);
    expect(picker.exists()).toBeTruthy();
    picker.vm.$emit('input', color);

    expect(taskCreator.component.vm.$data.color).toBe(color);
  });

  it('[TaskCreatorOrganism] Should clear form after clicking the clear button', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should clear form after submiting the form', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should clear form after submiting the form without description', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should not clear form after submiting the form without a title', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should not clear form after submiting the form with more than 30 characters in title', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should not clear form after submiting the form with more than 5000 characters in description', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
  });
});
