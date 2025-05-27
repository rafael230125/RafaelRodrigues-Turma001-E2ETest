import { test } from "@playwright/test";
import { ai } from "@zerostep/playwright";


test('zerostep example',async ({ page}) => {
    await page.goto('https://5elementslearning.dev/demosite/index.php');

    const aiArgs = { page, test };
    await ai('Enter HP in the search box', aiArgs);
    await ai('Click in the quick find', aiArgs);
});

