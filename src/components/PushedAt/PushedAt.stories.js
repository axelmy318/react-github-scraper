import React, { useState } from 'react';

import { PushedAt } from '../..';
import GithubScraper from '../..'

export default {
  title: 'PushedAt/PushedAt',
  component: PushedAt,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    const [lang, setLang] = useState('en')
    return (<>
        <div style={{width: '300px'}}>
            <button onClick={() => setLang('en')}>en</button>
            <button onClick={() => setLang('fr')}>fr</button>
            <GithubScraper {...args.github} lang={lang}>
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