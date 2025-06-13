import { test, expect } from '@playwright/test';

test('Todo E2E flow', async ({ page }) => {
  // Open the app
  await page.goto('http://localhost:5174');
  await page.pause();

  // Wait until the textbox becomes visible
  await page.waitForSelector('input[placeholder="Add a todo"]');

  // Add the first todo item
  await page.fill('input[placeholder="Add a todo"]', 'Buy milk');
  await page.keyboard.press('Enter');
  await page.pause();

  // Add the second todo item
  await page.fill('input[placeholder="Add a todo"]', 'Clean room');
  await page.keyboard.press('Enter');
  await page.pause();

  // Add the third todo item
  await page.fill('input[placeholder="Add a todo"]', 'Go to gym');
  await page.keyboard.press('Enter');
  await page.pause();

  // Check that three todo items is visible
  const todos = await page.locator('li');
  await expect(todos).toHaveCount(3);
  await page.pause();

  // Delete 1 todo
  await page.locator('li:has-text("Buy milk")').getByRole('button', { name: 'Delete' }).click();
  await page.pause();

  // Confirm the deleted todo item has been removed
  await expect(page.locator('li:has-text("Buy milk")')).toHaveCount(0);
  await page.pause();

  // Logout — skip if there's no logout feature
});
