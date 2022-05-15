import Task from '../class/Task';
import IPropsBase from './IPropsBase';

export default interface ITaskListTemplateProps extends IPropsBase {
  tasks: Task[];
}
