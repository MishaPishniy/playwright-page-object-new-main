import { mergeTests } from '@playwright/test';
import { test as GarageFixtures } from '../fixtures/garageFixtures'
import { screenSettings } from '../fixtures/viewPortSettingsFixtures';

export const test = mergeTests(GarageFixtures, screenSettings);