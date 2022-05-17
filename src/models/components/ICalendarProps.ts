import Task from '../class/Task';
import IPropsBase from './IPropsBase';

export default interface ICalendarProps extends IPropsBase {
  tasks: Task[];
}
