import ITaskCardOrganismProps from '@/models/components/ITaskCardOrganismProps';
import SeletorService from '../../../SelectorService';

const id = 'card';
const defaultTaskProps = {
  description: 'test',
  title: 'Test',
  date: new Date(),
};

export const propsWithTask = {
  id,
  task: {
    ...defaultTaskProps,
    code: 1,
    done: false,
    color: '#330000',
  },
} as ITaskCardOrganismProps;

export const propsWithDoneTask = {
  id,
  task: {
    ...defaultTaskProps,
    code: 1,
    done: true,
    color: '#330000',
  },
} as ITaskCardOrganismProps;

export const propsTaskWithoutColor = {
  id,
  task: {
    ...defaultTaskProps,
    code: 1,
    done: false,
  },
} as ITaskCardOrganismProps;

export const propsTaskWithoutDescription = {
  id,
  task: {
    title: 'Test',
    date: new Date(),
    code: 1,
    done: false,
    color: '#330000',
  },
} as ITaskCardOrganismProps;

export const selectors = {
  checkbox: SeletorService.getSelector('checkbox'),
  date: SeletorService.getSelector('date-subtitle'),
  expand: SeletorService.getSelector('description-open'),
  description: SeletorService.getSelector('description'),
  title: SeletorService.getSelector('task-title'),
};
