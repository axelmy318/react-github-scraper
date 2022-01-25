import React from 'react';

import { Languages } from '../../.';
import { GithubScraperContext as GSContext } from '../../.';

export default {
  title: 'Languages/Languages',
  component: Languages,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (<>
        <GSContext.Provider value={{...args}}>
            <Languages />
        </GSContext.Provider>
    </>)
};

export const Primary = Template.bind({});
Primary.args = {
    username:'axelmy318',
    repository:'react-weekdays-input',
    branch:'master',
};

export const Secondary = Template.bind({});
Secondary.args = {
    username:'axelmy318',
    repository:'react-readme-printer',
    branch:'master',
};