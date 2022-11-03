import React from 'react';

import { Languages, ForksCount, Size, StargazersCount, Contributors, PushedAt, WatchersCount, Commits } from '..';
import GithubScraper from '..'

export default {
  title: 'Component/Component',
  component: ForksCount,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (<>
        <div style={{width: '300px'}}>
            <GithubScraper {...args.github}>
                <Commits {...args.component} commitCallback={(commit) => <>{commit.commit.message}</>} />
                <Languages {...args.component} />
                <ForksCount {...args.component} />
                <Size {...args.component} />
                <StargazersCount {...args.component} />
                <Contributors {...args.component} />
                <WatchersCount {...args.component} />
                <PushedAt {...args.component} />
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