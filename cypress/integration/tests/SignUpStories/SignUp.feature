Feature: Sign Up Scenarios
    # QDTS-157: Sign - Up User Details

    Scenario:  User Credential Registration - Account Details
        Given I am on the Account Details screen
        When I enter my email address
        And I enter a new password
        And I re-confirm the new password
        Then the credentials are saved
        And the about you details section is shown

    #  QDTS-39: SignUp | About You & Business details

    Scenario: Providing About You Details
        Given I have already provided account details
        When I enter full name
        And I am a Qatar National
        And I enter valid Qatar National ID
        And I provide valid phone number
        Then Send OTP button is enabled
        And I receive the OTP when clicked on Send OTP

    #  QDTS-43: SignUp | OTP

    Scenario: Enter OTP and continue to enter business details
        Given I hve already received the OTP
        When I enter correct OTP
        Then about your business section is shown

    Scenario: Enter your business details
        Given I have already verified the OTP
        When I enter my business details
        And I click on create account button
        Then I should be able to create account

    # QDTS-44: SignUp | Email verification not sent

    Scenario: Send verification email for the second time
        Given I am in the check your inbox page
        When I wait for 30 seconds
        Then I am able to send the verification email for the second time
        And I should be able verify account

    # QDTS-45: SignUp | OTP not sent

    Scenario: Send OTP for the second time
        Given I am in the send OTP section
        And I have not received the OTP in the first attempt
        When I wait for 60 seconds
        Then I am able to send OTP for the second time
        And I receive the OTP to continue
