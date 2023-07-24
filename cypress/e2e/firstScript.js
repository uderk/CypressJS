import MyAccountPage from "../POM/MyAccountPage";

describe("My first test", ()=>{
  it('just go to login page', ()=>{
   //definitions
   const myAccountPage = new MyAccountPage();
   const username = "venislav.zdravkov@gmail.com";
   const password = "!77842590!";
   const dashboardLocator = "//a[contains(text(),'Dashboard')]";
   //actions
   myAccountPage.visitLoginPage();
   myAccountPage.fillUsername(username);
   myAccountPage.fillPassword(password);
   myAccountPage.clickLoginButton();
   cy.xpath(dashboardLocator).should("exist");
  })
})