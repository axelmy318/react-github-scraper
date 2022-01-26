import React from 'react';

import { Contributors } from '../../.';
import GithubScraper from '../../.'

export default {
  title: 'Contributors/Contributors',
  component: Contributors,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (<>
        <div style={{width: '30%'}}>
            <GithubScraper {...args.github}>
                <Contributors {...args.component} />
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
        maxDisplayed: 9
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