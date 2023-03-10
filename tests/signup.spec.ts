// signup.spec.ts
import { test } from '@playwright/test'
import { SignUpPage } from '../pages/signup-page'
import * as CONSTS from '../utils/user-generator'
import { EmailChecker } from '../utils/email-checker'

test('SignUp flow happy pass', async ({ page }) => {
  const signUpPage = new SignUpPage(page)
  const emailChecker = new EmailChecker(page)
  await signUpPage.gotoSignup()
  await signUpPage.ifAtEmailStep()
  await signUpPage.fillEmail(CONSTS.EMAIL)
  await signUpPage.clickConfirmCheckbox()
  await signUpPage.clickNextButton()
  await signUpPage.ifAtPasswordStep()
  await signUpPage.fillPassword(CONSTS.PASSWORD)
  await signUpPage.fillPasswordConfirmation(CONSTS.PASSWORD)
  await signUpPage.clickNextButton()
  await signUpPage.ifAtNameStep()
  await signUpPage.fillFirstName(CONSTS.FIRST_NAME)
  await signUpPage.fillLastName(CONSTS.LAST_NAME)
  await signUpPage.clickRegisterButton()
  await signUpPage.ifAtConfirmationStep()
  await emailChecker.checkRegistrationEmail()
  await signUpPage.loginAfterRegistration()
})
