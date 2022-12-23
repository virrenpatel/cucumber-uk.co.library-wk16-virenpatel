package uk.co.library.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click On More Search Option Tab$")
    public void iClickOnMoreSearchOptionTab() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I select Job Title\"([^\"]*)\"$")
    public void iSelectJobTitle(String jobTitle)  {
        new HomePage().enterJobTitle(jobTitle);

    }

    @And("^I select Location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
        new HomePage().enterLocation(location);

    }

    @And("^I select Distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance)  {
       new HomePage().selectDistance(distance);
    }

    @And("^I select Salary Min \"([^\"]*)\"$")
    public void iSelectSalaryMin(String salaryMin)  {
       new HomePage().enterMinSalary(salaryMin);
    }

    @And("^I select Salary Max \"([^\"]*)\"$")
    public void iSelectSalaryMax(String salaryMax)  {
        new HomePage().enterMaxSalary(salaryMax);

    }

    @And("^I select Salary Type \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType)  {
        new HomePage().selectSalaryType(salaryType);

    }

    @And("^I select Job Type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType)  {
       new HomePage().selectJobType(jobType);
    }

    @And("^I click on Find Jobs Button$")
    public void iClickOnFindJobsButton()  {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I can Search The Job$")
    public void iCanSearchTheJob() {
    }

    @And("^I Accept Cookies$")
    public void iAcceptCookies() {
        new HomePage().clickAcceptCookies();
    }

    @And("^I click on Find Jobs Buttonone$")
    public void iClickOnFindJobsButtonone() {
        new HomePage().clickOnFindJobsButton();
    }

    @And("^I Can verify \"([^\"]*)\"$")
    public void iCanVerify(String returnMessage)  {
        new ResultPage().verifyTheResult();

    }
}
