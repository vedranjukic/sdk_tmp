#!/bin/bash
set -e

# Upgrade basic tools
python3 -m ensurepip --upgrade
python3 -m pip install --upgrade pip setuptools wheel black

# Install dependencies
echo "Installing Python packages..."
python3 -m pip install "aiohttp>=3.8.5" "pydantic>=2.4.2" "python-dateutil>=2.8.2" "typing-extensions>=4.7.1" "urllib3>=1.25.3"
python3 -m pip install environs

# Install the local package in editable mode
python3 -m pip install -e "packages/python"

echo "Post-install completed successfully"

echo "Building and linking @daytona/sdk..."
cd packages/ts
yarn build
yarn link

cd ../../examples/ts/exec-command
yarn link @daytona/sdk
