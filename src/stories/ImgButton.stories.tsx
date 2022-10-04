import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ImgButton from "../components/ImgButton";
import editImg from "../images/pencil.png";
import infoImg from '../images/info.png';
import archiveImg from '../images/archive.png';
import deleteImg from '../images/delete.png';

const images = {editImg, infoImg, archiveImg, deleteImg};

export default {
    title: "Components/Button with Image",
    component: ImgButton,
    argTypes: {
        imgPath: {
            options: Object.keys(images),
            mapping: images,
            control: {
                type: "select",
                labels: {
                    editImg: "Edit",
                    infoImg: "Info",
                    archiveImg: "Archive",
                    deleteImg: "Delete"
                }
            },
        },
        onClick: {
            table: {
                disable: true
            }
        }
    }
} as ComponentMeta<typeof ImgButton>

const Template: ComponentStory<typeof ImgButton> = (args) => <ImgButton {...args}/>

export const DefaultImage = Template.bind({})
DefaultImage.args = {
    imgPath: "editImg",
    alt: "edit",
}