import React from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Page from '../layouts/main';
import { RootView } from '../styles/page';
import {
    StyledInput,
    StyledDropdown,
    StyledTextArea,
    StyledButton,
} from '../styles/forms';
import ConfirmationImage from '../components/ConfirmationImage';
import { lineHeight } from '../constants/type';
import { writeRsvpData } from '../utils/rsvp';

class RsvpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'RSVP',
            showGuestFields: false,
            showSuccessMessage: false,
            attendance: '',
            name: '',
            guestName: '',
            dietaryRestriction: '',
            vaccinated: '',
            shuttle: '',
            song: '',
            note: '',
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

    renderAttendanceDropdown = () => (
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

    renderGuestDropdown = () => (
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

    renderVaccinationDropdown = () => (
        <StyledDropdown
            name='vaccinated'
            defaultValue='default'
            onChange={this.handleChange}
        >
            <option value='default' disabled>
                Are you and your guest vaccinated?
            </option>
            <option value='boosted'>Vaccinated and boosted</option>
            <option value='vaccinated'>Vaccinated and will be boosted</option>
            <option value='no'>My guest or I are not vaccinated</option>
        </StyledDropdown>
    );

    renderShuttleDropdown = () => (
        <StyledDropdown
            name='shuttle'
            defaultValue='default'
            onChange={this.handleChange}
        >
            <option value='default' disabled>
                Which shuttle location do you prefer?
            </option>
            <option value='aurora'>Aurora</option>
            <option value='auburn'>Auburn</option>
            <option value='skaneateles'>Skaneateles</option>
        </StyledDropdown>
    );

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

    renderSubmitButton = () => (
        <StyledButton type='submit' value='submit'>
            Send It!
        </StyledButton>
    );

    redirectToHome = () => {
        this.timeout = setTimeout(() => {
            Router.push('/');
        }, 5000);
    };

    renderSuccessMessage = () => {
        const { attendance } = this.state;

        let confirmationMessage =
            "We've got your RSVP and we're so excited for you to join us in June!";
        if (attendance === 'no') {
            confirmationMessage =
                "We're bummed you won't be able to attend but we obviously still love you.";
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
            vaccinated,
            shuttle,
            dietaryRestriction,
            song,
            note,
            showGuestFields,
        } = this.state;

        const formData = {
            name,
            attendance,
            vaccinated,
            shuttle,
            dietaryRestriction,
            song,
            note,
        };

        if (showGuestFields) {
            formData.guestName = guestName;
        }

        writeRsvpData(formData, 'rsvp-2022');
        this.setState({ showSuccessMessage: true });
        event.preventDefault();
    };

    renderRsvpForm = () => (
        <form onSubmit={this.handleSubmit}>
            {this.renderNameField()}
            {this.renderAttendanceDropdown()}
            {this.renderGuestDropdown()}
            {this.renderGuestNameField()}
            {this.renderDietaryRestrictionField()}
            {this.renderVaccinationDropdown()}
            {this.renderShuttleDropdown()}
            {this.renderSongField()}
            {this.renderNoteField()}
            {this.renderSubmitButton()}
        </form>
    );

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
