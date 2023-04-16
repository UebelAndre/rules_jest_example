import point from "@rules_jest_example/bar";

import { setupTestPoint } from '../setupTests';

test('show point was mocked', () => {
    setupTestPoint();

    expect(point.x).toBe(1);
    expect(point.y).toBe(1);
});
