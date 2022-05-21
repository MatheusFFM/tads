import ITaskListTemplateProps from '@/models/components/ITaskListTemplateProps';
import SeletorService from '../../../SelectorService';

const id = 'template';

export const propsWithTasks = {
  id,
  tasks: [
    {
      code: 1,
      date: new Date(),
      description: 'test',
      title: 'Test',
      done: true,
      color: '#330000',
    },
  ],
} as ITaskListTemplateProps;

export const propsWithoutTasks = {
  id,
  tasks: [],
} as ITaskListTemplateProps;

export const selectors = {
  title: SeletorService.getSelector('title'),
  content: SeletorService.getSelector('content'),
};
