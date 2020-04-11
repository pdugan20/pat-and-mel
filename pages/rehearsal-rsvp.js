import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Page from '../layouts/main';
import { RootView } from '../styles/page';
import { StyledInput, StyledDropdown, StyledButton } from '../styles/forms';
import ConfirmationImage from '../components/ConfirmationImage';
import { lineHeight } from '../constants/type';
import { writeRsvpData } from '../utils/rsvp';

class RsvpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Rehearsal RSVP',
            showGuestFields: false,
            showSuccessMessage: false,
            attendance: '',
            name: '',
            guestName: '',
            dietaryRestriction: '',
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
                <option value='yes'>Yes, you bet I will attend</option>
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

    renderSubmitButton = () => {
        return (
            <StyledButton type='submit' value='submit'>
                Send It!
            </StyledButton>
        );
    };

    redirectToHome = () => {
        this.timeout = setTimeout(() => {
            Router.push('/');
        }, 5000);
    };

    renderSuccessMessage = () => {
        const { attendance } = this.state;

        let confirmationMessage =
            "We've got your RSVP and we are pumped to have you join us at our rehearsal dinner!";
        if (attendance === 'no') {
            confirmationMessage =
                "We're bummed you won't be able to attend the rehearsal dinner but we'll see you at the wedding!";
        }
        this.redirectToHome();

        return (
            <>
                <ConfirmationImage />
                <ConfirmationMessage>{confirmationMessage}</ConfirmationMessage>
            </>
        );
    };

    renderMainColumn = () => {
        const { showSuccessMessage } = this.state;

        return (
            <RsvpRootView>
                {!showSuccessMessage && this.renderRsvpForm()}
                {showSuccessMessage && this.renderSuccessMessage()}
            </RsvpRootView>
        );
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        const {
            name,
            attendance,
            guestName,
            dietaryRestriction,
            showGuestFields,
        } = this.state;

        const formData = {
            name,
            attendance,
            dietaryRestriction,
        };

        if (showGuestFields) {
            formData.guestName = guestName;
        }

        writeRsvpData(formData, 'rehearsal-rsvp-2021');
        this.setState({ showSuccessMessage: true });
        event.preventDefault();
    };

    renderRsvpForm = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderNameField()}
                {this.renderAttendanceDropdown()}
                {this.renderGuestDropdown()}
                {this.renderGuestNameField()}
                {this.renderDietaryRestrictionField()}
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
        const { title } = this.state;

        return (
            <Page
                singleColumn
                title={title}
                mainColumn={this.renderMainColumn()}
            />
        );
    }
}

export default RsvpPage;

const RsvpRootView = styled(RootView)`
    height: 100vh;
    text-align: center;
    line-height: ${lineHeight.lh_13};
`;

const ConfirmationMessage = styled.div`
    width: 350px;
    margin: 0 auto;
`;
