Feature: Job Search Test
  As a use I want to Search Job On Cv Library


  Scenario Outline: verify That User Should able To Search Relevant Job
    Given   I am on homepage
    When    I click On More Search Option Tab
    And     I select Job Title"<jobtitle>"
    And     I select Location "<location>"
    And     I select Distance "<distance>"
   # And     I Accept Cookies
    And     I select Salary Min "<salaryMin>"
    And     I select Salary Max "<salaryMax>"
    And     I select Salary Type "<salaryType>"
    And     I select Job Type "<jobType>"
    And     I click on Find Jobs Button
    And     I Can verify "<searchResult>"
    Then    I can Search The Job
    Examples:
      | jobtitle     | location           | distance        | salaryMin | salaryMax | salaryType | jobType    | searchResult                                    |
      | Tester       | London             | up to 10 miles  | 30000     | 50000     | Per annum  | Permanent  | Permanent Tester jobs in London                 |
      | Electrician  | Luton              | up to 35 miles  | 1500      | 3000      | Per month  | Contract   | Contract jobs in Luton                          |
      | Plumber      | Harrow             | up to 15 miles  | 100       | 200       | Per day    | Contract   | Contract Plumber jobs in Harrow on the Hill     |
      | Tester       | Oxford             | up to 50 miles  | 35000     | 50000     | Per annum  | Permanent  | Permanent Tester jobs in Oxford                 |
      | Cook         | Wembley            | up to 35 miles  | 500       | 700       | Per week   | Contract   | Contract Cook jobs in Wembley                   |
      | Driver       | London             | up to 25 miles  | 300       | 500       | Per week   | Part Time  | Part Time Driver jobs in London                 |