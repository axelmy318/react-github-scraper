import React from 'react';

import { ForksCount } from '../..';
import GithubScraper from '../..'

export default {
  title: 'ForksCount/ForksCount',
  component: ForksCount,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (<>
        <div style={{width: '300px'}}>
            <GithubScraper {...args.github}>
                <ForksCount {...args.component} />
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
        label: 'Forks count',
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
        prefix: null,
    }
};