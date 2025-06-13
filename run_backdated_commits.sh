#!/bin/bash
set -e

echo "Running Backdated Commit Generator for portfolio..."
chmod +x execute_backdated_commits.py
python3 execute_backdated_commits.py
