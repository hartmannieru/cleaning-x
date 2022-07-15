import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, object } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  color: '#516dd0',
  text: 'sdad',
};
