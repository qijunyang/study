import { storiesOf } from '@storybook/vue';
import MyButton from "../../src/components/MyButton";
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
    title: "demo/XButton",
    decorators: [withKnobs]
}

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyButton },
    template: '<my-button v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    title: "Confirm"
};

export const exampleWithKnobs = () => ({
    components: { MyButton },
    props: {
      title: {default: text('title', 'Hello Storybook')},
    },
    template: `<MyButton :title="title"></MyButton>`,
  });