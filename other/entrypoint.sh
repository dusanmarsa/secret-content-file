#!/bin/sh
set -e

mkdir -p "${INPUT_SECRET_CONTENT}";
cd "${INPUT_SECRET_CONTENT}";

echo "${INPUT_SECRET_CONTENT}" >> ".env";

echo "::set-output file_content=ok"