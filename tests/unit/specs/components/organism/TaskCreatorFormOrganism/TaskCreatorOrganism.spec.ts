import TaskCreatorOrganismComponent from './TaskCreatorOrganismComponent';

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
    expect(false).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should change description after typing in input', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should change date after selecting the date modal', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
  });

  it('[TaskCreatorOrganism] Should change color after selecting the color modal', async () => {
    taskCreator.mount();
    expect(false).toBeTruthy();
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
