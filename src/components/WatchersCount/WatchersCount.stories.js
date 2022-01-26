import React from 'react';

import { WatchersCount } from '../..';
import GithubScraper from '../..'

export default {
  title: 'WatchersCount/WatchersCount',
  component: WatchersCount,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (<>
        <div style={{width: '300px'}}>
            <GithubScraper {...args.github}>
                <WatchersCount {...args.component} />
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
        label: 'Watchers count',
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