#!/bin/bash

# Exit on any error
set -e

echo "Building and linking @daytona/sdk..."

# Build and link the SDK
cd packages/ts
yarn build
yarn link

# Link the SDK in the example project
cd ../../examples/ts/exec-command
yarn link @daytona/sdk

echo "Post-install completed successfully"