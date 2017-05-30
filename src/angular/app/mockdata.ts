
import { Story } from './story';
import { Team} from './team';

export const userStory: Story[] = [
    {story: 1,description: 'story number 1',progress:'notComplete'},
    {story: 2,description: 'story number 2',progress:'notComplete'},
    {story: 3,description: 'story number 3',progress:'notComplete'},
    {story: 4,description: 'story number 4',progress:'notComplete'}
];

export const team: Team[] = [
    {id:1, name: 'enimga', story:userStory},
    {id:2, name: 'eureka', story:userStory},
    {id:3, name: 'orion', story:userStory}
];
