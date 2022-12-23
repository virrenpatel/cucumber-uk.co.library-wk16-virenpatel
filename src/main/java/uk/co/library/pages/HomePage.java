package uk.co.library.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Reporter;
import uk.co.library.utility.Utility;

public class HomePage extends Utility {

    @CacheLookup
    @FindBy(id = "keywords")
    WebElement jobTitle;


    @CacheLookup
    @FindBy(id = "location")
    WebElement location;

    @CacheLookup
    @FindBy(xpath = "//select[@id='distance']")
    WebElement distanceDropDown;

    @CacheLookup
    @FindBy(id = "toggle-hp-search")
    WebElement moreSearchOptionsLink;

    @CacheLookup
    @FindBy(id = "salarymin")
    WebElement salaryMin;

    @CacheLookup
    @FindBy(id = "salarymax")
    WebElement salaryMax;

    @CacheLookup
    @FindBy(id = "salarytype")
    WebElement salaryTypeDropDown;

    @CacheLookup
    @FindBy(id = "tempperm")
    WebElement jobTypeDropDown;

    @CacheLookup
    @FindBy(css = "#hp-search-btn")
    WebElement findJobsearchBtn;

    @FindBy(xpath = "//button[@class = 'mat-focus-indicator solo-button mat-button mat-button-base mat-raised-button']")
    WebElement acceptCookies;

    @FindBy(id ="gdpr-consent-notice")
    WebElement iframe;
    public void switchToIframe(WebElement element){

    }
    public void clickAcceptCookies() {
        switchToIframe(iframe);
        clickOnElement(acceptCookies);
        driver.switchTo().defaultContent();
    }

    public void enterJobTitle(String jobTitle) {
        Reporter.log("Enter job title"+jobTitle.toString());
        sendTextToElement(this.jobTitle, jobTitle);
    }

    public void enterLocation(String location) {
        Reporter.log("Enter location"+location.toString());
        sendTextToElement(this.location, location);
    }

    public void selectDistance(String distance) {
        Reporter.log("Select distance "+distanceDropDown.toString());
        selectByVisibleTextFromDropDown(distanceDropDown, distance);
    }

    public void clickOnMoreSearchOptionLink() {
        Reporter.log("Click on more search option link "+moreSearchOptionsLink.toString());
        clickOnElement(moreSearchOptionsLink);
    }

    public void enterMinSalary(String minSalary) {
        Reporter.log("Enter minimum salary "+salaryMin.toString());
        sendTextToElement(salaryMin, minSalary);
    }

    public void enterMaxSalary(String maxSalary){
        Reporter.log("Enter maximum salary "+salaryMax.toString());
        sendTextToElement(salaryMax,maxSalary);
    }
    public void selectSalaryType(String sType){
        Reporter.log("Select salary Type"+salaryTypeDropDown.toString());
        selectByVisibleTextFromDropDown(salaryTypeDropDown,sType);
    }

    public void selectJobType(String jobType){
        Reporter.log("Select job type"+jobTypeDropDown.toString());
        selectByVisibleTextFromDropDown(jobTypeDropDown,jobType);
    }
    public void  clickOnFindJobsButton(){
        Reporter.log("Click on find job search button");
        clickOnElement(findJobsearchBtn);
    }
}
