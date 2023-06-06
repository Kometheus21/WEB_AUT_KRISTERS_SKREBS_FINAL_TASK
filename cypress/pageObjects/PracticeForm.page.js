import BasePage from "./Base.page";

class PracticeFormPage extends BasePage{

    static get url(){
        return "/automation-practice-form";
    }

    static get firstNameField(){
        return cy.get("#firstName");
    }

    static get lastNameField(){
        return cy.get("#lastName");
    }

    static get emailField(){
        return cy.get("#userEmail");
    }

    static get maleRadioButton(){
        return cy.get("#gender-radio-1");
    }

    static get phoneNumberField(){
        return cy.get("#userNumber");
    }

    static get dateOfBirthField(){
        return cy.get("#dateOfBirthInput");
    }

    static get yearMenu(){
        return cy.get(".react-datepicker__year-select");
    }

    static get monthMenu(){
        return cy.get(".react-datepicker__month-select");
    }

    static get dayButtons(){
        return cy.get(".react-datepicker__day");
    }

    static get subjectsField(){
        return cy.get(".subjects-auto-complete__value-container");
    }

    static get economicsButton(){
        return cy.get(".subjects-auto-complete__menu");
    }

    static get musicCheck(){
        return cy.get("#hobbies-checkbox-3");
    }

    static get pictureUpload(){
        return cy.get("#uploadPicture");
    }

    static get currentAddressField(){
        return cy.get("#currentAddress");
    }

    static get stateAndCityArea(){
        return cy.get("#stateCity-wrapper");
    }

    static get nCRButton(){
        return cy.get("#react-select-3-option-0")
    }

    static get delhiButton(){
        return cy.get("#react-select-4-option-0")
    }

    static get submitButton(){
        return cy.get("#submit")
    }
}

export default PracticeFormPage;