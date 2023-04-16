import * as otherPackage from "@rules_jest_example/bar";

jest.mock("@rules_jest_example/bar");

export const setupTestPoint = async () => {
    const mockPoint = jest.requireActual('@rules_jest_example/bar');

    let point = mockPoint;
    point.x = 1;
    point.y = 1;

    // @ts-ignore
    otherPackage.default = point;
};

export default { setupTestPoint };
