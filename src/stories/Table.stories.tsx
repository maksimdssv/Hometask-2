import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Table from "../components/Table";

export default {
    title: "Components/Table",
    component: Table,
    argTypes: {
        numberOfNotes: {type: "number", defaultValue: 1},
        id: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = ({...args}) => (<Table {...args}>
    {/*@ts-ignore*/}
    {[...Array(args.numberOfNotes).keys()].map((note, index) => <tr
        style={{backgroundColor: "#CCC"}}>{args.headers.map(str => <td>{str}</td>)}</tr>)}
</Table>)

export const Default = Template.bind({})
Default.args = {
    headers: ['Name', "Last Name"]
}

export const Empty = Template.bind({})
Empty.args = {
    headers: []
}

export const Project = Template.bind({})
Project.args = {
    headers: ["Name", "Created", "Category", "Content", "Dates", ""],
    // @ts-ignore
    numberOfNotes: 7
}
