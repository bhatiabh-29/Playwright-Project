import { test, expect, type Page } from '@playwright/test';
import { createDefaultTodos } from './fixtures/todo-fixtures';

// Test suite to check active todo items
test.describe('TODO Count', () => {
  test.beforeEach(async ({ page }) => {
    await createDefaultTodos(page);
  });

  // Define a test for checking active number of TODO items
  test('should display the current number of active todo items', async ({ page }) => {
    
    const newTodo = page.getByPlaceholder('What needs to be done?');
    const todoCount = page.locator('.todo-count');

    // Check the initial count
    await expect(todoCount).toContainText('3 items left');
    const firstTodoToggle = page.locator('.todo-list li .toggle').first();
    await firstTodoToggle.check();

    // Verify the count after completing one item
    await expect(todoCount).toContainText('2 items left');
    await newTodo.fill('Todo 4');
    await newTodo.press('Enter');

    // Verify the count after adding another item
    await expect(todoCount).toContainText('3 items left');
  });
});
