import React from "react";

import { Story, Meta } from '@storybook/react';

import   SigninButton,{SigninButtonProps}  from './signinButton';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'SigninButton',
  component: SigninButton,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<SigninButtonProps> = () => <SigninButton />;

export const FirstStory = Template.bind({});
