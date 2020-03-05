import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/main';
import { RootView } from '../styles/page';
import {
    StyledInput,
    StyledDropdown,
    StyledTextArea,
    StyledButton,
} from '../styles/forms';

class RsvpPage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: 'RSVP',
            showGuestFields: false,
            name: '',
            guestName: '',
            dietaryRestriction: '',
            song: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderNameField = () => {
        const { name } = this.state;

        return (
            <StyledInput
                type='text'
                onChange={this.handleChange}
                name='name'
                value={name}
                placeholder='Your name'
            />
        );
    };

    renderAttendanceDropdown = () => {
        return (
            <StyledDropdown
                name='attendance'
                defaultValue='default'
                onChange={this.handleChange}
            >
                <option value='default' disabled>
                    Will you be able to attend?
                </option>
                <option value='yes'>Yes, you bet your ass I will attend</option>
                <option value='no'>No, I will not be able to attend</option>
            </StyledDropdown>
        );
    };

    renderGuestDropdown = () => {
        return (
            <StyledDropdown
                name='guestAttendance'
                defaultValue='default'
                onChange={this.onGuestChange}
            >
                <option value='default' disabled>
                    Will you be bringing a guest?
                </option>
                <option value='yes'>Yes, I am bringing a guest</option>
                <option value='no'>No, I will be flying solo</option>
            </StyledDropdown>
        );
    };

    renderGuestNameField = () => {
        const { showGuestFields, guestName } = this.state;

        return (
            showGuestFields && (
                <StyledInput
                    type='text'
                    name='guestName'
                    value={guestName}
                    onChange={this.handleChange}
                    placeholder="Your guest's name"
                />
            )
        );
    };

    renderDietaryRestrictionField = () => {
        const { dietaryRestriction } = this.state;

        return (
            <StyledInput
                type='text'
                name='dietaryRestriction'
                value={dietaryRestriction}
                onChange={this.handleChange}
                placeholder='Any dietary restrictions?'
            />
        );
    };

    renderMealOptions = () => {
        return (
            <>
                <option value='salmon'>Seared salmon</option>
                <option value='chicken'>Honey roasted garlic chicken</option>
                <option value='beef'>Beef tenderloin & gulf shrimp</option>
                <option value='vegetarian'>Vegetarian</option>
            </>
        );
    };

    renderMealDropdown = () => {
        return (
            <StyledDropdown
                name='meal'
                defaultValue='default'
                onChange={this.handleChange}
            >
                <option value='default' disabled>
                    What meal would you like?
                </option>
                {this.renderMealOptions()}
            </StyledDropdown>
        );
    };

    renderGuestMealDropdown = () => {
        const { showGuestFields } = this.state;

        return (
            showGuestFields && (
                <StyledDropdown
                    name='guestMeal'
                    defaultValue='default'
                    onChange={this.handleChange}
                >
                    <option value='default' disabled>
                        What meal would your guest like?
                    </option>
                    {this.renderMealOptions()}
                </StyledDropdown>
            )
        );
    };

    renderSongField = () => {
        const { song } = this.state;

        return (
            <StyledInput
                type='text'
                name='song'
                value={song}
                onChange={this.handleChange}
                placeholder="Any songs you'd like to hear?"
            />
        );
    };

    renderNoteField = () => {
        const { note } = this.state;

        return (
            <StyledTextArea
                name='note'
                value={note}
                onChange={this.handleChange}
                placeholder="Anything you'd like to say to Mel & Pat?"
            />
        );
    };

    renderSubmitButton = () => {
        return (
            <StyledButton type='submit' value='submit'>
                Send It!
            </StyledButton>
        );
    };

    renderMainColumn = () => {
        return <RsvpRootView>{this.renderRsvpForm()}</RsvpRootView>;
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        // console.log(this.state);
        event.preventDefault();
    };

    renderRsvpForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderNameField()}
                {this.renderAttendanceDropdown()}
                {this.renderGuestDropdown()}
                {this.renderMealDropdown()}
                {this.renderGuestNameField()}
                {this.renderGuestMealDropdown()}
                {this.renderDietaryRestrictionField()}
                {this.renderSongField()}
                {this.renderNoteField()}
                {this.renderSubmitButton()}
            </form>
        );
    };

    onGuestChange = (event) => {
        const isBringingGuest = event.target.value;

        if (isBringingGuest.includes('yes')) {
            this.setState({ showGuestFields: true });
        } else {
            this.setState({ showGuestFields: false });
        }

        this.handleChange(event);
    };

    render() {
        const { showGuestFields, title } = this.state;

        return (
            <Page
                singleColumn
                title={title}
                mainColumn={this.renderMainColumn(showGuestFields)}
            />
        );
    }
}

export default RsvpPage;

const RsvpRootView = styled(RootView)`
    height: 100vh;
    text-align: center;
`;
