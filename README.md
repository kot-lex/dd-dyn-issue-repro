# DD-Tracer Dynamic Instrumentation Crash Reproduction

## Prerequisites

- Node.js 
- npm

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

## Reproducing the Crash

To reproduce the dd-tracer crash, run the application with dynamic instrumentation enabled:

```bash
npm start
```

This runs the equivalent of:
```bash
DD_TRACING=true DD_TRACE_DEBUG=true DD_DYNAMIC_INSTRUMENTATION_ENABLED=true node index.js
```

The application crashes when `DD_DYNAMIC_INSTRUMENTATION_ENABLED=true` is set.

## Issue Summary

The crash appears to be related to the dynamic instrumentation feature. Removing or disabling the `DD_DYNAMIC_INSTRUMENTATION_ENABLED` environment variable resolves the issue. 