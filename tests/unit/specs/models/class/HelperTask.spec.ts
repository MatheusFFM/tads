import HelperTask from '@/models/class/HelperTask';
import Task from '@/models/class/Task';

describe('HelperTask', () => {
  const helperTask = new HelperTask();
  const testDate = new Date(2020, 0, 1);
  const tomorrowTestDate = new Date(
    new Date(testDate).setDate(testDate.getDate() + 1),
  );
  const testDateTask: Task = {
    code: 1,
    date: testDate,
    color: '#000000',
    description: 'test',
    done: false,
    title: 'Rest',
  };

  const tomorrowTestDateTask: Task = {
    code: 1,
    date: tomorrowTestDate,
    color: '#000000',
    description: 'test',
    done: false,
    title: 'Rest',
  };

  it('[HelperTask] Should get one group with every task in the same day', async () => {
    const groups = helperTask.groupTasksByDate([
      testDateTask,
      testDateTask,
      testDateTask,
    ]);

    expect(groups.length).toBe(1);
    expect(groups[0].tasks.length).toBe(3);
  });

  it('[HelperTask] Should get testDate group name with a task for testDate', async () => {
    const groups = helperTask.groupTasksByDate([testDateTask]);

    expect(groups[0].name).toBe('January 1, 2020');
  });

  it('[HelperTask] Should get group count equal to task count with every task in different days', async () => {
    const groups = helperTask.groupTasksByDate([
      testDateTask,
      tomorrowTestDateTask,
    ]);

    expect(groups.length).toBe(2);
  });
});
