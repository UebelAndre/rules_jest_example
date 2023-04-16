# rules_jest_example

This repo demonstrates how jest can successfully mock modules outside of Bazel but fails within Bazel

## PNPM

```
~/Code/rules_jest_example/foo (main ✗) pnpm run test

> @rules_jest_example/foo@1.0.0 test /Users/user/Code/rules_jest_example/foo
> jest

 PASS  src/index.test.ts
  ✓ show point was mocked (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.338 s, estimated 1 s
Ran all test suites.
```

## Bazel

```
~/Code/rules_jest_example/foo (main ✔) bazel test //...
INFO: Analyzed 14 targets (0 packages loaded, 0 targets configured).
INFO: Found 13 targets and 1 test target...
FAIL: //foo:foo_tests (see /private/var/tmp/_bazel_user/e187ae0f02551085cd56d499814ad066/execroot/rules_jest_example/bazel-out/darwin_arm64-fastbuild/testlogs/foo/foo_tests/test.log)
INFO: From Testing //foo:foo_tests:
==================== Test output for //foo:foo_tests:
 FAIL  src/index.test.js
  ✕ show point was mocked (2 ms)

  ● show point was mocked

    expect(received).toBe(expected) // Object.is equality

    Expected: 1
    Received: -1

      at Object.<anonymous> (src/index.test.ts:8:21)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.211 s
Ran all test suites.
================================================================================
INFO: Elapsed time: 1.989s, Critical Path: 1.83s
INFO: 4 processes: 1 internal, 2 darwin-sandbox, 1 local.
INFO: Build completed, 1 test FAILED, 4 total actions
//foo:foo_tests                                                          FAILED in 0.6s
  /private/var/tmp/_bazel_user/e187ae0f02551085cd56d499814ad066/execroot/rules_jest_example/bazel-out/darwin_arm64-fastbuild/testlogs/foo/foo_tests/test.log

Executed 1 out of 1 test: 1 fails locally.
```
