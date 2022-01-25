import React from 'react';

import Languages from '../Languages/Languages';
import GsContext from '../GithubScraperContext/GithubScraperContext';

export default {
  title: 'Languages/Languages',
  component: Languages,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
    return (<>
        <GsContext.Provider value={...args}>
            <Languages />
        </GsContext.Provider>
    </>)
};

export const Primary = Template.bind({});
Primary.args = {
    username:'axelmy318',
    repository:'react-weekdays-input' ,
    branch:'master',
};

export const Secondary = Template.bind({});
Secondary.args = {
    username:'axelmy318',
    repository:'react-readme-printer' ,
    branch:'master',
};