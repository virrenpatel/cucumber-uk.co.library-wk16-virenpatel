$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearchsteps.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "As a use I want to Search Job On Cv Library",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "verify That User Should able To Search Relevant Job",
  "description": "",
  "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On More Search Option Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Job Title\"\u003cjobtitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And     I Accept Cookies"
    }
  ],
  "line": 12,
  "name": "I select Salary Min \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Salary Max \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Salary Type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Can verify \"\u003csearchResult\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can Search The Job",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;",
  "rows": [
    {
      "cells": [
        "jobtitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "searchResult"
      ],
      "line": 20,
      "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;1"
    },
    {
      "cells": [
        "Tester",
        "London",
        "up to 10 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in London"
      ],
      "line": 21,
      "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;2"
    },
    {
      "cells": [
        "Electrician",
        "Luton",
        "up to 35 miles",
        "1500",
        "3000",
        "Per month",
        "Contract",
        "Contract jobs in Luton"
      ],
      "line": 22,
      "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;3"
    },
    {
      "cells": [
        "Plumber",
        "Harrow",
        "up to 15 miles",
        "100",
        "200",
        "Per day",
        "Contract",
        "Contract Plumber jobs in Harrow on the Hill"
      ],
      "line": 23,
      "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;4"
    },
    {
      "cells": [
        "Tester",
        "Oxford",
        "up to 50 miles",
        "35000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Oxford"
      ],
      "line": 24,
      "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;5"
    },
    {
      "cells": [
        "Cook",
        "Wembley",
        "up to 35 miles",
        "500",
        "700",
        "Per week",
        "Contract",
        "Contract Cook jobs in Wembley"
      ],
      "line": 25,
      "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;6"
    },
    {
      "cells": [
        "Driver",
        "London",
        "up to 25 miles",
        "300",
        "500",
        "Per week",
        "Part Time",
        "Part Time Driver jobs in London"
      ],
      "line": 26,
      "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4122296599,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify That User Should able To Search Relevant Job",
  "description": "",
  "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On More Search Option Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Job Title\"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And     I Accept Cookies"
    }
  ],
  "line": 12,
  "name": "I select Salary Min \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Salary Max \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Salary Type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Can verify \"Permanent Tester jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can Search The Job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 90077399,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionTab()"
});
formatter.result({
  "duration": 93231700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobTitle(String)"
});
formatter.result({
  "duration": 123617700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 88548701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 121808900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 68905400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 60113400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 55454700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 85413200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 81720100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iCanVerify(String)"
});
formatter.result({
  "duration": 1398988300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iCanSearchTheJob()"
});
formatter.result({
  "duration": 15200,
  "status": "passed"
});
formatter.after({
  "duration": 645896700,
  "status": "passed"
});
formatter.before({
  "duration": 2269067099,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify That User Should able To Search Relevant Job",
  "description": "",
  "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On More Search Option Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Job Title\"Electrician\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Location \"Luton\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Distance \"up to 35 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And     I Accept Cookies"
    }
  ],
  "line": 12,
  "name": "I select Salary Min \"1500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Salary Max \"3000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Salary Type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Can verify \"Contract jobs in Luton\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can Search The Job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionTab()"
});
formatter.result({
  "duration": 68924400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electrician",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobTitle(String)"
});
formatter.result({
  "duration": 242355000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luton",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 75206601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 112556700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1500",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 76779600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 82112401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 97948001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 87738801,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 1115907700,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1182, 382). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [365115642454d09aa33d1f1eaecba4b7, clickElement {id\u003d5e0485d1-5303-4d0a-80ed-fdbc2e508510}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64618}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64618/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (365115642454d09aa33d1f1eaecba4b7)] -\u003e css selector: #hp-search-btn]\nSession ID: 365115642454d09aa33d1f1eaecba4b7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat uk.co.library.pages.HomePage.clickOnFindJobsButton(HomePage.java:102)\r\n\tat uk.co.library.steps.JobSearchSteps.iClickOnFindJobsButton(JobSearchSteps.java:62)\r\n\tat ✽.And I click on Find Jobs Button(jobsearchsteps.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract jobs in Luton",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iCanVerify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iCanSearchTheJob()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 771921300,
  "status": "passed"
});
formatter.before({
  "duration": 2929059200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify That User Should able To Search Relevant Job",
  "description": "",
  "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On More Search Option Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Job Title\"Plumber\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And     I Accept Cookies"
    }
  ],
  "line": 12,
  "name": "I select Salary Min \"100\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Salary Max \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Salary Type \"Per day\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Can verify \"Contract Plumber jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can Search The Job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27201,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionTab()"
});
formatter.result({
  "duration": 89600599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Plumber",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobTitle(String)"
});
formatter.result({
  "duration": 193929700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 119764700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 97087001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 97401300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 85879201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per day",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 129521899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 114063699,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 1063234300,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1182, 382). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [466b5e118ae57df33170982989f6020e, clickElement {id\u003d3dfa9521-aeb6-4d4d-b257-c76ec7a1ee9b}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64669}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64669/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (466b5e118ae57df33170982989f6020e)] -\u003e css selector: #hp-search-btn]\nSession ID: 466b5e118ae57df33170982989f6020e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat uk.co.library.pages.HomePage.clickOnFindJobsButton(HomePage.java:102)\r\n\tat uk.co.library.steps.JobSearchSteps.iClickOnFindJobsButton(JobSearchSteps.java:62)\r\n\tat ✽.And I click on Find Jobs Button(jobsearchsteps.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Plumber jobs in Harrow on the Hill",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iCanVerify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iCanSearchTheJob()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 849131500,
  "status": "passed"
});
formatter.before({
  "duration": 3308950200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify That User Should able To Search Relevant Job",
  "description": "",
  "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On More Search Option Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Job Title\"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Location \"Oxford\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Distance \"up to 50 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And     I Accept Cookies"
    }
  ],
  "line": 12,
  "name": "I select Salary Min \"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Salary Max \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Salary Type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Can verify \"Permanent Tester jobs in Oxford\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can Search The Job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37999,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionTab()"
});
formatter.result({
  "duration": 153534300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobTitle(String)"
});
formatter.result({
  "duration": 187384000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oxford",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 113960100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 50 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 137820900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 84948600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 74204700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 73204100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 116321701,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 1067444101,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1182, 382). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e004bff01197aa0dea8441349145b16a, clickElement {id\u003d90fe1a66-85d7-42db-acd1-304d30b5b0fa}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64715}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64715/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (e004bff01197aa0dea8441349145b16a)] -\u003e css selector: #hp-search-btn]\nSession ID: e004bff01197aa0dea8441349145b16a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat uk.co.library.pages.HomePage.clickOnFindJobsButton(HomePage.java:102)\r\n\tat uk.co.library.steps.JobSearchSteps.iClickOnFindJobsButton(JobSearchSteps.java:62)\r\n\tat ✽.And I click on Find Jobs Button(jobsearchsteps.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Oxford",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iCanVerify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iCanSearchTheJob()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 896191000,
  "status": "passed"
});
formatter.before({
  "duration": 2770687799,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify That User Should able To Search Relevant Job",
  "description": "",
  "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On More Search Option Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Job Title\"Cook\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Location \"Wembley\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Distance \"up to 35 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And     I Accept Cookies"
    }
  ],
  "line": 12,
  "name": "I select Salary Min \"500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Salary Max \"700\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Salary Type \"Per week\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Can verify \"Contract Cook jobs in Wembley\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can Search The Job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionTab()"
});
formatter.result({
  "duration": 137509401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cook",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobTitle(String)"
});
formatter.result({
  "duration": 184935799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wembley",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 108269100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 35 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 117308401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 127503600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "700",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 81074601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per week",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 109561100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 106868000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 1117727600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1182, 382). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [845f023a1f9ee7443c816724676a7e8a, clickElement {id\u003d2459c1e0-5255-4020-93bc-503a592afe8b}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64786}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64786/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (845f023a1f9ee7443c816724676a7e8a)] -\u003e css selector: #hp-search-btn]\nSession ID: 845f023a1f9ee7443c816724676a7e8a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat uk.co.library.pages.HomePage.clickOnFindJobsButton(HomePage.java:102)\r\n\tat uk.co.library.steps.JobSearchSteps.iClickOnFindJobsButton(JobSearchSteps.java:62)\r\n\tat ✽.And I click on Find Jobs Button(jobsearchsteps.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Cook jobs in Wembley",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iCanVerify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iCanSearchTheJob()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 823975701,
  "status": "passed"
});
formatter.before({
  "duration": 2859962201,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify That User Should able To Search Relevant Job",
  "description": "",
  "id": "job-search-test;verify-that-user-should-able-to-search-relevant-job;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click On More Search Option Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select Job Title\"Driver\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select Distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "# And     I Accept Cookies"
    }
  ],
  "line": 12,
  "name": "I select Salary Min \"300\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select Salary Max \"500\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select Salary Type \"Per week\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select Job Type \"Part Time\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Find Jobs Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Can verify \"Part Time Driver jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can Search The Job",
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23601,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionTab()"
});
formatter.result({
  "duration": 121318801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Driver",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobTitle(String)"
});
formatter.result({
  "duration": 139951799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 99061300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 137258699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMin(String)"
});
formatter.result({
  "duration": 92262300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 21
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryMax(String)"
});
formatter.result({
  "duration": 86699500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per week",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 120046401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 114206000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 1105099600,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput type\u003d\"submit\" id\u003d\"hp-search-btn\" value\u003d\"Find Jobs\" data-gtm-key\u003d\"JobSearch\" data-gtm-label\u003d\"Homepage\" class\u003d\"hps-transition\"\u003e is not clickable at point (1182, 382). Other element would receive the click: \u003ciframe src\u003d\"https://cmp-consent-tool.privacymanager.io/latest/index.html#/notice?theme\u003dfadeToBlackTheme\u0026amp;useSystemFonts\u003dfalse\u0026amp;cmpType\u003dtcf\" id\u003d\"gdpr-consent-notice\" class\u003d\"faktor-iframe-wrapper\" aria-label\u003d\"Privacy Manager window\" role\u003d\"dialog\" aria-modal\u003d\"true\" frameborder\u003d\"0\" scrolling\u003d\"yes\" style\u003d\"width: 100%; left: 0px; bottom: 0px; position: fixed; z-index: 2147483647; box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 30px 5px, rgba(0, 0, 0, 0.14) 0px 16px 24px 2px, rgba(0, 0, 0, 0.2) 0px 8px 10px -5px; height: 343px;\"\u003e\u003c/iframe\u003e\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6a142f6fe43205b28b828f0423cdd6de, clickElement {id\u003d325e1776-01fb-4dda-8c8c-f4330b4f1160}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\viren\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:64835}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:64835/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (6a142f6fe43205b28b828f0423cdd6de)] -\u003e css selector: #hp-search-btn]\nSession ID: 6a142f6fe43205b28b828f0423cdd6de\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat uk.co.library.utility.Utility.clickOnElement(Utility.java:50)\r\n\tat uk.co.library.pages.HomePage.clickOnFindJobsButton(HomePage.java:102)\r\n\tat uk.co.library.steps.JobSearchSteps.iClickOnFindJobsButton(JobSearchSteps.java:62)\r\n\tat ✽.And I click on Find Jobs Button(jobsearchsteps.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Part Time Driver jobs in London",
      "offset": 14
    }
  ],
  "location": "JobSearchSteps.iCanVerify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "JobSearchSteps.iCanSearchTheJob()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 805463200,
  "status": "passed"
});
});