import Task from '../class/Task';
import IPropsBase from './IPropsBase';

export default interface ITaskCardListOrganismProps extends IPropsBase {
  tasks: Task[];
}
