from setuptools import setup, find_packages

setup(
    name="daytona_sdk",
    version="0.1.0",
    packages=find_packages(where="src"),
    package_dir={"": "src"},
    install_requires=[
        # Add dependencies here
    ],
    # Include both packages
    package_data={
        "daytona_sdk": ["*"],
        "apiclient": ["*"],
    },
)