
class MyAccountPage
{
// locators 


usernameLogin = "input[name='username']";
passwordLogin = "input#password";
loginButton = "button[name='login']";

//actions
visitLoginPage(){
  cy.visit("http://mydemostore.local/my-account/");
}

fillUsername(username){
  cy.get(this.usernameLogin).type(username);
}

fillPassword(password){
  cy.get(this.passwordLogin).type(password);
}
clickLoginButton(){
  cy.get(this.loginButton).click();
}
}

export default MyAccountPage;