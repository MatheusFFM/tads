import ITaskGroup from '../interface/ITaskGroup';
import HelperDate from './HelperDate';
import Task from './Task';

export default class HelperTask {
  public groupTasksByDate(tasks: Task[]): ITaskGroup[] {
    const helperDate = new HelperDate();
    const groups: ITaskGroup[] = [];
    const todayName = 'Today';

    tasks.forEach((task: Task) => {
      const existingGroupIndex = groups.findIndex((g) =>
        g.tasks.some((t) =>
          helperDate.sameDay(new Date(t.date), new Date(task.date)),
        ),
      );

      if (existingGroupIndex < 0) {
        const today = new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000,
        );
        const name = helperDate.sameDay(today, new Date(task.date))
          ? todayName
          : helperDate.getDateFormat(task.date);
        const group: ITaskGroup = {
          name,
          tasks: [task],
        };
        groups.push(group);
      } else {
        groups[existingGroupIndex].tasks.push(task);
      }
    });

    return groups.sort((g) => {
      return new Date(g.tasks[0].date).getTime() * -1;
    });
  }
}
