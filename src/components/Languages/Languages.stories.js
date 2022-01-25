import React from 'react';

import { Languages } from '../../.';
import GithubScraper from '../../.'

export default {
  title: 'Languages/Languages',
  component: Languages,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (<>
        <GithubScraper {...args}>
            <Languages />
        </GithubScraper>
    </>)
};

export const Primary = Template.bind({});
Primary.args = {
    username:'grpc',
    repository:'grpc',
    branch:'master',
};

export const Secondary = Template.bind({});
Secondary.args = {
    username:'axelmy318',
    repository:'react-readme-printer',
    branch:'master',
};