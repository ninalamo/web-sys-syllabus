// Week 14: E2E Tests — Solution (login.spec.ts)

import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
    test('user can login and see dashboard', async ({ page }) => {
        // Navigate to login page
        await page.goto('http://localhost:5173/login');

        // Fill in credentials
        await page.getByLabel('Username').fill('admin');
        await page.getByLabel('Password').fill('password123');

        // Submit form
        await page.getByRole('button', { name: 'Login' }).click();

        // Wait for navigation to dashboard
        await expect(page).toHaveURL('http://localhost:5173/dashboard');

        // Verify dashboard content
        await expect(page.getByText('Welcome')).toBeVisible();
    });

    test('invalid credentials show error', async ({ page }) => {
        await page.goto('http://localhost:5173/login');

        await page.getByLabel('Username').fill('wrong');
        await page.getByLabel('Password').fill('wrong');
        await page.getByRole('button', { name: 'Login' }).click();

        // Wait for error message
        await expect(page.getByText('Invalid credentials')).toBeVisible();

        // Should stay on login page
        await expect(page).toHaveURL('http://localhost:5173/login');
    });
});
