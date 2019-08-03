import { element, by, ElementFinder } from 'protractor';

export default class RegisterMemberUpdatePage {
  pageTitle: ElementFinder = element(by.id('newRegisterFormApp.registerMember.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  previousRegisterInput: ElementFinder = element(by.css('input#register-member-previousRegister'));
  korNameInput: ElementFinder = element(by.css('input#register-member-korName'));
  engNameInput: ElementFinder = element(by.css('input#register-member-engName'));
  birthdayInput: ElementFinder = element(by.css('input#register-member-birthday'));
  genderSelect: ElementFinder = element(by.css('select#register-member-gender'));
  firstStreetInput: ElementFinder = element(by.css('input#register-member-firstStreet'));
  secondStreetInput: ElementFinder = element(by.css('input#register-member-secondStreet'));
  cityInput: ElementFinder = element(by.css('input#register-member-city'));
  provinceSelect: ElementFinder = element(by.css('select#register-member-province'));
  postalCodeInput: ElementFinder = element(by.css('input#register-member-postalCode'));
  cellPhoneInput: ElementFinder = element(by.css('input#register-member-cellPhone'));
  residentialPhoneInput: ElementFinder = element(by.css('input#register-member-residentialPhone'));
  emailAddressInput: ElementFinder = element(by.css('input#register-member-emailAddress'));
  professionInput: ElementFinder = element(by.css('input#register-member-profession'));
  companyNameInput: ElementFinder = element(by.css('input#register-member-companyName'));
  firstLicenseplateInput: ElementFinder = element(by.css('input#register-member-firstLicenseplate'));
  secondLicenseplateInput: ElementFinder = element(by.css('input#register-member-secondLicenseplate'));
  immigrationStatusSelect: ElementFinder = element(by.css('select#register-member-immigrationStatus'));
  baptismTypeSelect: ElementFinder = element(by.css('select#register-member-baptismType'));
  baptismYearInput: ElementFinder = element(by.css('input#register-member-baptismYear'));
  baptismChurchInput: ElementFinder = element(by.css('input#register-member-baptismChurch'));
  dutyStatusSelect: ElementFinder = element(by.css('select#register-member-dutyStatus'));
  prevChurchInput: ElementFinder = element(by.css('input#register-member-prevChurch'));
  instructorInput: ElementFinder = element(by.css('input#register-member-instructor'));
  volunteerSelect: ElementFinder = element(by.css('select#register-member-volunteer'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setPreviousRegisterInput(previousRegister) {
    await this.previousRegisterInput.sendKeys(previousRegister);
  }

  async getPreviousRegisterInput() {
    return this.previousRegisterInput.getAttribute('value');
  }

  async setKorNameInput(korName) {
    await this.korNameInput.sendKeys(korName);
  }

  async getKorNameInput() {
    return this.korNameInput.getAttribute('value');
  }

  async setEngNameInput(engName) {
    await this.engNameInput.sendKeys(engName);
  }

  async getEngNameInput() {
    return this.engNameInput.getAttribute('value');
  }

  async setBirthdayInput(birthday) {
    await this.birthdayInput.sendKeys(birthday);
  }

  async getBirthdayInput() {
    return this.birthdayInput.getAttribute('value');
  }

  async setGenderSelect(gender) {
    await this.genderSelect.sendKeys(gender);
  }

  async getGenderSelect() {
    return this.genderSelect.element(by.css('option:checked')).getText();
  }

  async genderSelectLastOption() {
    await this.genderSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setFirstStreetInput(firstStreet) {
    await this.firstStreetInput.sendKeys(firstStreet);
  }

  async getFirstStreetInput() {
    return this.firstStreetInput.getAttribute('value');
  }

  async setSecondStreetInput(secondStreet) {
    await this.secondStreetInput.sendKeys(secondStreet);
  }

  async getSecondStreetInput() {
    return this.secondStreetInput.getAttribute('value');
  }

  async setCityInput(city) {
    await this.cityInput.sendKeys(city);
  }

  async getCityInput() {
    return this.cityInput.getAttribute('value');
  }

  async setProvinceSelect(province) {
    await this.provinceSelect.sendKeys(province);
  }

  async getProvinceSelect() {
    return this.provinceSelect.element(by.css('option:checked')).getText();
  }

  async provinceSelectLastOption() {
    await this.provinceSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setPostalCodeInput(postalCode) {
    await this.postalCodeInput.sendKeys(postalCode);
  }

  async getPostalCodeInput() {
    return this.postalCodeInput.getAttribute('value');
  }

  async setCellPhoneInput(cellPhone) {
    await this.cellPhoneInput.sendKeys(cellPhone);
  }

  async getCellPhoneInput() {
    return this.cellPhoneInput.getAttribute('value');
  }

  async setResidentialPhoneInput(residentialPhone) {
    await this.residentialPhoneInput.sendKeys(residentialPhone);
  }

  async getResidentialPhoneInput() {
    return this.residentialPhoneInput.getAttribute('value');
  }

  async setEmailAddressInput(emailAddress) {
    await this.emailAddressInput.sendKeys(emailAddress);
  }

  async getEmailAddressInput() {
    return this.emailAddressInput.getAttribute('value');
  }

  async setProfessionInput(profession) {
    await this.professionInput.sendKeys(profession);
  }

  async getProfessionInput() {
    return this.professionInput.getAttribute('value');
  }

  async setCompanyNameInput(companyName) {
    await this.companyNameInput.sendKeys(companyName);
  }

  async getCompanyNameInput() {
    return this.companyNameInput.getAttribute('value');
  }

  async setFirstLicenseplateInput(firstLicenseplate) {
    await this.firstLicenseplateInput.sendKeys(firstLicenseplate);
  }

  async getFirstLicenseplateInput() {
    return this.firstLicenseplateInput.getAttribute('value');
  }

  async setSecondLicenseplateInput(secondLicenseplate) {
    await this.secondLicenseplateInput.sendKeys(secondLicenseplate);
  }

  async getSecondLicenseplateInput() {
    return this.secondLicenseplateInput.getAttribute('value');
  }

  async setImmigrationStatusSelect(immigrationStatus) {
    await this.immigrationStatusSelect.sendKeys(immigrationStatus);
  }

  async getImmigrationStatusSelect() {
    return this.immigrationStatusSelect.element(by.css('option:checked')).getText();
  }

  async immigrationStatusSelectLastOption() {
    await this.immigrationStatusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setBaptismTypeSelect(baptismType) {
    await this.baptismTypeSelect.sendKeys(baptismType);
  }

  async getBaptismTypeSelect() {
    return this.baptismTypeSelect.element(by.css('option:checked')).getText();
  }

  async baptismTypeSelectLastOption() {
    await this.baptismTypeSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setBaptismYearInput(baptismYear) {
    await this.baptismYearInput.sendKeys(baptismYear);
  }

  async getBaptismYearInput() {
    return this.baptismYearInput.getAttribute('value');
  }

  async setBaptismChurchInput(baptismChurch) {
    await this.baptismChurchInput.sendKeys(baptismChurch);
  }

  async getBaptismChurchInput() {
    return this.baptismChurchInput.getAttribute('value');
  }

  async setDutyStatusSelect(dutyStatus) {
    await this.dutyStatusSelect.sendKeys(dutyStatus);
  }

  async getDutyStatusSelect() {
    return this.dutyStatusSelect.element(by.css('option:checked')).getText();
  }

  async dutyStatusSelectLastOption() {
    await this.dutyStatusSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async setPrevChurchInput(prevChurch) {
    await this.prevChurchInput.sendKeys(prevChurch);
  }

  async getPrevChurchInput() {
    return this.prevChurchInput.getAttribute('value');
  }

  async setInstructorInput(instructor) {
    await this.instructorInput.sendKeys(instructor);
  }

  async getInstructorInput() {
    return this.instructorInput.getAttribute('value');
  }

  async setVolunteerSelect(volunteer) {
    await this.volunteerSelect.sendKeys(volunteer);
  }

  async getVolunteerSelect() {
    return this.volunteerSelect.element(by.css('option:checked')).getText();
  }

  async volunteerSelectLastOption() {
    await this.volunteerSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }
  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }
}
