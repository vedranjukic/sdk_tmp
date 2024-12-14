from setuptools import setup, find_packages

setup(
    name="daytona",
    version="0.1.0",
    packages=find_packages() + ['daytonasdk', 'daytonasdk.api', 'daytonasdk.models'],
    install_requires=[
        "urllib3>=1.25.3",
        "python-dateutil>=2.8.2",
        "pydantic>=2.4.2",
        "typing-extensions>=4.7.1",
        "aiohttp>=3.8.5",
        "python-dotenv>=1.0.0",
    ],
    python_requires=">=3.7",
    package_dir={
        'daytonasdk': 'daytona/client/daytonasdk',
        'daytonasdk.api': 'daytona/client/daytonasdk/api',
        'daytonasdk.models': 'daytona/client/daytonasdk/models'
    }
)