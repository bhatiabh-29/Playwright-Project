
# Automation with Playwright and TypeScript

I conducted an automation testing project for the TodoMVC application, specifically the React implementation available at TodoMVC React. The testing suite was developed using Playwright with TypeScript, focusing on key functionalities such as adding, editing, completing, and removing todo items. This project ensures the robustness and reliability of the application's core features through automated end-to-end tests.



## 🚀 About Me
Software QA Engineer with experience, adept at deploying cutting-edge testing frameworks and automation to enhance software reliability and performance. Proven track record of reducing post-release defects by 90% and achieving a 95% defect detection rate. Committed to advancing software quality through innovative testing strategies and continuous improvement processes




## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/bhatiabh-29)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bhatiabhavin)


## Project Overview
This project contains a Playwright test suite written in TypeScript. The tests are designed to verify the functionality of the TodoMVC application implemented in React. The test suite covers 3-5 entries, ensuring that various functionalities of the TodoMVC app work as expected.
## System requirements
Node.js 18+

npm (version 6.x or later)

Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).

MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.

Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

## Setup Instructions

## 1. Clone the Repository
First, clone the repository to your local machine using the following command:
``` 
git clone <repository-url>
cd <repository-directory>
```
## 2. Install Dependencies
Navigate to the project directory and install the necessary dependencies by running:
```
npm install
```
## 3. Install Playwright
Get started by installing Playwright using npm. Alternatively you can also get started and run your tests using the VS Code Extension.
```
npm init playwright@latest
```
## Project Structure

The project directory contains the following key files and folders:

tests/: Contains the Playwright test files.

test-results/: Contains screenshots 

playwright.config.ts: Configuration file for Playwright.

package.json: Node.js project file containing scripts and dependencies.

tsconfig.json: TypeScript configuration file.
## Running the Tests
to run the tests, use the following command:
```
npx playwright test

```
## HTML Test Reports
After your test completes, an HTML Reporter will be generated, which shows you a full report of your tests.
```
npx playwright show-report
```


## Usage/Examples

If you need to add more tests or modify existing ones, you can find the test files in the tests/ directory. Each test file should be a TypeScript file (.ts) and should follow the Playwright testing framework conventions.

Example Test Structure Below is an example of what a test file might look like:

```javascript
import { test, expect } from '@playwright/test';

test.describe('Add TODO Item', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');
  });

  test('should add a TODO item', async ({ page }) => {
    const newItem = 'New TODO Item';
    await page.fill('.new-todo', newItem);
    await page.keyboard.press('Enter');
    const todoItem = await page.locator('.todo-list li');
    await expect(todoItem).toHaveText(newItem);
  });
});

```


## Configuration

The playwright.config.ts file contains configuration settings for the Playwright tests, such as test directory, timeout settings, and browser options. You can modify this file to customize the test execution environment.
## Documentation

[Playwright Documentation](https://playwright.dev/docs/intro)


