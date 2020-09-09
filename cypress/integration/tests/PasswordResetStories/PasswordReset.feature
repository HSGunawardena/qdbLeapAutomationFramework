Feature: Reset Password
    QDTS-1: As a customer I want the ability to reset my password so that I can login to the portal

    Scenario: Redirecting to reset password page
        Given I have forgotten my login credentials
        When I select Forgot password
        Then I should be directed to reset my password

    Scenario: Sending link to given email
        Given I am on the reset password screen
        When I enter my email address
        # Then a link should be sent a unique recovery link on my email

    # Scenario: Confirming the new password
    #     Given I have successfully received a link on my email to verify myself
    #     When I land on the reset page
    #     Then I should be able to enter a new password
    #     And I should be able to re-confirm the new password

    # Scenario: Loging in successfully with the new password
    #     Given I have successfully reset the password
    #     Then I should be able to login to the portal and get to the landing page

    # QDTS-6: As a customer when I click on an invalid password reset link I want to be aware of the invalidity so that I can re-trigger the process

    # Scenario: Using invalid link to reset password
    #     Given I have triggered the reset password functionality
    #     And Wait for 60 minutes
    #     When I click on an invalid password reset link
    #     Then a prompt should be displayed in the landing link, that informs me of the link’s invalidity (e.g. expired link, or unauthorized link)

    # QDTS-5: As a customer I should be able to resend password reset link again, if first time the link is not received to email
    # Scenario: Resend password reset link when first time it is not received to email
    #     Given I have sent an email to reset my password already
    #     When I do not receive a reset link in my email
    #     Then I should be able to have an option to Resend or Reset Email