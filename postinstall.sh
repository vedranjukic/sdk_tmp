#!/bin/bash
set -e

echo "Installing Python packages..."

python3 -m pip install aiohttp>=3.8.5 pydantic>=2.4.2 python-dateutil>=2.8.2 typing-extensions>=4.7.1 urllib3>=1.25.3
python3 -mpip install environs

# Create and activate a virtual environment
python3 -m venv .venv
# Use bash to source the virtual environment
bash -c "source .venv/bin/activate"
python3 -m pip install --upgrade pip setuptools wheel
python3 -m pip install -e "packages/python"

echo "Post-install completed successfully"

echo "Building and linking @daytona/sdk..."
cd packages/ts
yarn build
yarn link

cd ../../examples/ts/exec-command
yarn link @daytona/sdk