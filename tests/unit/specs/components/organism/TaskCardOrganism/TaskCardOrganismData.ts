import ITaskCardOrganismProps from '@/models/components/ITaskCardOrganismProps';
import SeletorService from '../../../SelectorService';

const id = 'card';
const defaultTaskProps = {
  color: '#330000',
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
  },
} as ITaskCardOrganismProps;

export const propsWithDoneTask = {
  id,
  task: {
    ...defaultTaskProps,
    code: 1,
    done: false,
  },
} as ITaskCardOrganismProps;

export const selectors = {};
