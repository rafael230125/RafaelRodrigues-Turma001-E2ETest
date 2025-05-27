import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example - Mercado Livre', async ({ page }) => {
  await page.goto('https://www.mercadolivre.com.br');

  const aiArgs = { page, test };

  // Natural language steps in English for ZeroStep
  await ai('Type "HP" into the search box', aiArgs);
  await ai('Click the search button or press Enter', aiArgs);
  await ai('Wait for the search results to appear', aiArgs);
});
