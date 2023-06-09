import PracticeFormPage from "../pageObjects/PracticeForm.page";

describe("DemoQA spec", () => {
  context("Fill out form", () => {
    beforeEach(() => {
      PracticeFormPage.visit();
    });

    it("testcase1", () =>{
      PracticeFormPage.firstNameField.type("Kristers");
      PracticeFormPage.lastNameField.type("Skrebs");
      PracticeFormPage.emailField.type("kristerssskrebs3@gmail.com");
      PracticeFormPage.maleRadioButton.click({force: true});
      PracticeFormPage.phoneNumberField.type("1234567890");
      PracticeFormPage.dateOfBirthField.click();
      PracticeFormPage.yearMenu.select("1930");
      PracticeFormPage.monthMenu.select("1");
      PracticeFormPage.dayButtons.contains("28").click();
      PracticeFormPage.subjectsField.type("Eco");
      PracticeFormPage.economicsButton.click();
      PracticeFormPage.musicCheck.click({force: true});
      PracticeFormPage.pictureUpload.get("input[type=file]").selectFile("files/image.JPG");
      PracticeFormPage.currentAddressField.type("This street 19a");
      PracticeFormPage.stateAndCityArea.contains("Select State").click({force: true});
      PracticeFormPage.nCRButton.click();
      PracticeFormPage.stateAndCityArea.contains("Select City").click({force:true});
      PracticeFormPage.delhiButton.click({force: true});
      PracticeFormPage.submitButton.click({force: true});
      PracticeFormPage.formTable.contains("td", "Kristers Skrebs")
      PracticeFormPage.formTable.contains("td", "kristerssskrebs3@gmail.com")
      PracticeFormPage.formTable.contains("td", "Male")
      PracticeFormPage.formTable.contains("td", "1234567890")
      PracticeFormPage.formTable.contains("td", "28 January,1930")
      PracticeFormPage.formTable.contains("td", "Economics")
      PracticeFormPage.formTable.contains("td", "Music")
      PracticeFormPage.formTable.contains("td", "image.JPG")
      PracticeFormPage.formTable.contains("td", "This street 19a")
      PracticeFormPage.formTable.contains("td", "NCR Delhi")
    });

  });
});