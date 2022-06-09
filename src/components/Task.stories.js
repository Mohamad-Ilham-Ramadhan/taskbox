import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task'
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  }
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED'
  }
}

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED'
  }
}

const longTitleString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni incidunt, voluptate, consectetur optio ipsum sunt libero eum labore nam maiores commodi sint possimus quaerat consequatur adipisci enim repudiandae. Eaque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem sint veniam pariatur nostrum commodi? Ea dolore corrupti iusto esse quisquam quam est labore recusandae nam, adipisci cumque ab facilis aperiam.';
export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString
  }
}
