// Import functions from the Playwright testing library
import { test, expect } from '@playwright/test';

// Test suite for deleting todo items
test.describe('Delete TODO Item', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the TODO MVC example application
    await page.goto('https://todomvc.com/examples/react/dist/');
  });

  // Define a test for deleting a TODO item
  test('should delete a TODO item', async ({ page }) => {
    const newItem = 'New TODO Item';
    await page.fill('.new-todo', newItem);
    await page.keyboard.press('Enter');

    // Locate the delete button for the newly added TODO item
    const deleteButton = page.locator('.todo-list li .destroy');
    
    // Hover over the TODO item to reveal the delete button (it may be hidden initially)
    await page.hover('.todo-list li');
    await deleteButton.click();
    const todoItem = page.locator('.todo-list li');
    await expect(todoItem).toHaveCount(0);
  });
});
