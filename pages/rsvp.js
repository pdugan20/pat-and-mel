import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/main';

class RsvpPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: 'RSVP',
            showGuestNameInput: false,
        };
    }

    renderNameField = () => {
        return <StyledInput type='text' name='name' placeholder='Your name' />;
    };

    renderAttendanceDropdown = () => {
        return (
            <StyledDropdown onChange={this.onChange}>
                <option disabled selected>
                    Will you be able to attend?
                </option>
                <option value='yes'>Yes, you bet your ass I will attend</option>
                <option value='no'>No, I will not be able to attend</option>
            </StyledDropdown>
        );
    };

    renderGuestDropdown = () => {
        return (
            <StyledDropdown onChange={this.onGuestChange}>
                <option disabled selected>
                    Will you be bringing a guest?
                </option>
                <option value='yes'>Yes, I am bringing a guest</option>
                <option value='no'>No, I will be flying solo</option>
            </StyledDropdown>
        );
    };

    renderGuestNameField = () => {
        const { showGuestNameInput } = this.state;

        return (
            showGuestNameInput && (
                <StyledInput
                    type='text'
                    name='guestName'
                    placeholder="Your guest's name"
                />
            )
        );
    };

    renderMainColumn = () => {
        return (
            <RootView>
                {this.renderNameField()}
                {this.renderAttendanceDropdown()}
                {this.renderGuestDropdown()}
                {this.renderGuestNameField()}
            </RootView>
        );
    };

    onGuestChange = (event) => {
        const isBringingGuest = event.target.value;
        if (isBringingGuest.includes('yes')) {
            this.setState({ showGuestNameInput: true });
        } else {
            this.setState({ showGuestNameInput: false });
        }
    };

    render() {
        const { showGuestNameInput, title } = this.state;

        return (
            <Page
                singleColumn
                title={title}
                mainColumn={this.renderMainColumn(showGuestNameInput)}
            />
        );
    }
}

export default RsvpPage;

const RootView = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0 auto;

    img {
        margin: 0 auto;
    }
`;

const StyledInput = styled.input`
    border-radius: 3px;
    outline: none;
    border: 1px solid #b4b4b4;
    padding: 6px;
    font-size: 15px;
    box-sizing: border-box;
    width: 350px;
    margin: 0 auto 8px auto;
    color: #333;

    &::-webkit-input-placeholder {
        color: #7a7a7a;
    }

    &::-moz-placeholder {
        color: #7a7a7a;
    }
`;

const StyledDropdown = styled.select`
    border-radius: 3px;
    outline: none;
    border: 1px solid #b4b4b4;
    padding: 6px;
    font-size: 15px;
    box-sizing: border-box;
    width: 350px;
    margin: 0 auto 8px auto;
    color: #333;
    background: url(/icons/arrow.svg) no-repeat #fff;
    background-size: 11px;
    background-position: right 8px center;
    -webkit-appearance: none;
    -moz-appearance: none;

    option {
        padding: 0;
    }

    &::-webkit-input-placeholder {
        color: #7a7a7a;
    }

    &::-moz-placeholder {
        color: #7a7a7a;
    }
`;
