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
        <div style={{width: '300px'}}>
            <GithubScraper {...args.github}>
                <Languages {...args.component} />
            </GithubScraper>
        </div>
    </>)
};

export const Primary = Template.bind({});
Primary.args = {
    github: {
        username:'grpc',
        repository:'grpc',
        branch:'master',
    },
    component: {
        label: 'Test',
        gradientColors: ["#03c9d7", "#fb9678"]
    }
};

export const Secondary = Template.bind({});
Secondary.args = {
    github: {
        username:'axelmy318',
        repository:'react-github-scraper',
        branch:'master',
    },
    component: {
    }
};