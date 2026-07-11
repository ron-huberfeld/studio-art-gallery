import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1 --port 4327',
    url: 'http://127.0.0.1:4327/studio-art-gallery/he/',
    reuseExistingServer: false,
    timeout: 120_000
  },
  use: {
    baseURL: 'http://127.0.0.1:4327/studio-art-gallery',
    trace: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
