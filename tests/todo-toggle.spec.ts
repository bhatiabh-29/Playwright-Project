// Import functions from the Playwright testing library
import { test, expect } from '@playwright/test';
// Import a fixture function to create default TODO items
import { createDefaultTodos } from './fixtures/todo-fixtures';

// Describe a test suite for toggling TODO item
test.describe('Toggle TODO Items', () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
  });

   // Define a test to mark all items as completed
  test('should allow me to mark all items as completed', async ({ page }) => {
    await page.check('.toggle-all');
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(3);
    await todoItems.evaluateAll(items => items.every(item => item.classList.contains('completed')));
  });

  // Define a test to unmark all items as not completed
  test('should allow me to unmark all items as not completed', async ({ page }) => {
    await page.check('.toggle-all');
    await page.uncheck('.toggle-all');
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(3);
    await todoItems.evaluateAll(items => items.every(item => !item.classList.contains('completed')));
  });

  // Define a test to toggle the completion state of a single TODO item
  test('Toggle TODO completion', async ({ page }) => {
    const newItem = 'New TODO Item';
    await page.fill('.new-todo', newItem);
    await page.keyboard.press('Enter');
    const newTodoToggle = page.locator('.todo-list li', { hasText: newItem }).locator('.toggle');
    await newTodoToggle.click();
    const completedItem = page.locator('.todo-list li.completed', { hasText: newItem });
    await expect(completedItem).toHaveText(newItem);
  });
});
