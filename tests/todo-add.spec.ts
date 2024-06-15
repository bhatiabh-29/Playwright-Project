// Import functions from the Playwright testing library
import { test, expect } from '@playwright/test';

// Test suite for adding todo items
test.describe('Add TODO Item', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the TODO MVC example application
    await page.goto('https://todomvc.com/examples/react/dist/');
  });

  // Define a test for adding a TODO item
  test('should add a TODO item', async ({ page }) => {
    const newItem = 'New TODO Item';
    await page.fill('.new-todo', newItem);
    await page.keyboard.press('Enter');
    const todoItem = await page.locator('.todo-list li');
    await expect(todoItem).toHaveText(newItem);
  });
});
