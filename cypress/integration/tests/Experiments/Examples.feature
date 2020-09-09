Feature: Email Example

    This is to test email sending and reading using faker
    
    Scenario: Email sending example
        When I have sent a mail
        Then I should receive it and be able to read it