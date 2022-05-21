import ITaskCardListOrganismProps from '@/models/components/ITaskCardListOrganismProps';
import SeletorService from '../../../SelectorService';

const id = 'list';
const today = new Date();
const yesterday = new Date().setDate(today.getDate() - 1);
const tomorrow = new Date().setDate(today.getDate() + 1);
const defaultTaskProps = {
  color: '#000000',
  description: 'test',
  title: 'Test',
};

export const propsWithTasks = {
  id,
  tasks: [
    {
      ...defaultTaskProps,
      code: 1,
      date: today,
      done: false,
    },
    {
      ...defaultTaskProps,
      code: 2,
      date: tomorrow,
      done: false,
    },
    {
      ...defaultTaskProps,
      code: 3,
      date: yesterday,
      done: false,
    },
  ],
} as ITaskCardListOrganismProps;

export const propsWithTasksSameDay = {
  id,
  tasks: [
    {
      ...defaultTaskProps,
      code: 1,
      date: today,
      done: false,
    },
    {
      ...defaultTaskProps,
      code: 2,
      date: today,
      done: false,
    },
    {
      ...defaultTaskProps,
      code: 3,
      date: today,
      done: false,
    },
  ],
} as ITaskCardListOrganismProps;

export const propsWithoutTasks = {
  id,
  tasks: [],
} as ITaskCardListOrganismProps;

export const selectors = {
  card: (index: number) => SeletorService.getSelector(`card-${index}`),
  group: (index: number) => SeletorService.getSelector(`group-${index}`),
};
