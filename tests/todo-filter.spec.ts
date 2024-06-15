// Import functions from the Playwright testing library
import { test, expect } from '@playwright/test';
// Import a fixture function to create default TODO items
import { createDefaultTodos } from './fixtures/todo-fixtures';

// Describe a test suite for filtering TODO items
test.describe('Filter TODO Items', () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
    const secondTodoToggle = await page.locator('.todo-list li .toggle').nth(1);
    await secondTodoToggle.check();
  });

// Define a test to check the "All" filter functionality
  test('should display all items correctly when "All" filter is selected', async ({ page }) => {
    await page.click('a[href="#/"]');
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(3);
  });

   // Define a test to check the "Active" filter functionality
  test('should display only active items correctly when "Active" filter is selected', async ({ page }) => {
    await page.click('text=Active');
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(2);
    // Loop through each item and assert it does not have the 'completed' class
    for (let i = 0; i < 2; i++) {
      await expect(todoItems.nth(i)).not.toHaveClass('completed');
    }
  });

  // Define a test to check the "Completed" filter functionality
  test('should display only completed items correctly when "Completed" filter is selected', async ({ page }) => {
    await page.click('text=Completed');
    const todoItems = page.locator('.todo-list li');
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems.first()).toHaveClass('completed');
  });

  // Define a test to check that the currently applied filter is highlighted
  test('should highlight the currently applied filter', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'All' })).toHaveClass('selected');
    await page.click('a[href="#/active"]');
    await expect(page.getByRole('link', { name: 'Active' })).toHaveClass('selected');
    await page.click('a[href="#/completed"]');
    await expect(page.getByRole('link', { name: 'Completed' })).toHaveClass('selected');
  });
});
