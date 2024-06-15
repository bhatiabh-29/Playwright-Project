//This file contains the shared setup functions.

import { Page } from '@playwright/test';

export async function createDefaultTodos(page: Page) {
  await page.goto('https://todomvc.com/examples/react/dist/#/');
  await page.fill('.new-todo', 'Todo 1');
  await page.press('.new-todo', 'Enter');
  await page.fill('.new-todo', 'Todo 2');
  await page.press('.new-todo', 'Enter');
  await page.fill('.new-todo', 'Todo 3');
  await page.press('.new-todo', 'Enter');
}
