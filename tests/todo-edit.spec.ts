import { test, expect } from '@playwright/test';
import { createDefaultTodos } from './fixtures/todo-fixtures';

// Test suite to edit todo items
test.describe('Edit TODO Item', () => {
    test.beforeEach(async ({ page }) => {
      await createDefaultTodos(page);
    });
  
     // Define a test for editing a TODO item
    test('should allow me to edit a todo on double-click', async ({ page }) => {
      // Locate the TODO items
      const todoItems = page.getByTestId('todo-item');
      const secondTodo = todoItems.nth(1);
  
      // Double-click the second TODO item
      await secondTodo.dblclick();
  
      // Ensure the input container appears
      const inputContainer = secondTodo.locator('.input-container');
      await expect(inputContainer).toBeVisible();
  
      const inputField = inputContainer.locator('input[type="text"]');
      await inputField.fill('buy some sausages');
      await inputField.press('Enter');
  
      // Ensure the TODO item is updated
      await expect(todoItems).toHaveText([
        'Todo 1',
        'buy some sausages',
        'Todo 3'
      ]);
    });
  });
