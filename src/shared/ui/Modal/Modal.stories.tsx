import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit eligendi autem earum praesentium nemo exercitationem rem, nam possimus, porro accusamus enim atque! Odit et fugit unde facilis impedit cupiditate dignissimos?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit eligendi autem earum praesentium nemo exercitationem rem, nam possimus, porro accusamus enim atque! Odit et fugit unde facilis impedit cupiditate dignissimos?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
