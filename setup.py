from setuptools import setup, find_packages


setup(
    name='narnia',
    version='0.1',
    packages=find_packages(),
    package_data={'narnia': ['py.typed']},
)
