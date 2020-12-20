#!/bin/bash

case $AWS_PROFILE in
default | "")
  AWS_PROFILE=default
  ;;
esac
DRY_RUN_FLAG=""

if [[ $1 == "prod" ]]; then
  echo "Uploading to prod s3 bucket!"
  HOST=binpack.modulitos.com/
elif [[ $1 == "test-prod" ]]; then
  echo "Uploading to s3 bucket!"
elif [[ $1 == "test" ]]; then
  echo "Dry run of uploading s3 bucket!"
  DRY_RUN_FLAG="--dryrun"
  HOST=binpack.modulitos.com/
elif [[ $1 == "dev" ]]; then
  echo "Uploading to dev s3 bucket!"
  HOST=dev.binpack.modulitos.com/
elif [[ $1 == "test-dev" ]]; then
  echo "Dry run of uploading dev s3 bucket!"
  HOST=dev.binpack.modulitos.com/
  DRY_RUN_FLAG="--dryrun"
else
  echo "You must indicate whether you are running this script in 'prod' or 'test' mode"
  echo "examples:"
  echo ""
  echo "./upload.sh test"
  echo "OR"
  echo "./upload.sh prod"
  echo ""
  echo "OR, to customize AWS_PROFILE:"
  echo "AWS_PROFILE=lucas-lucas ./upload.sh prod"
  echo ""
  echo "Goodbye."
  exit 0
fi

aws s3 sync \
  --profile $AWS_PROFILE \
  $DRY_RUN_FLAG \
  --region us-west-1 \
  --acl public-read \
  --cache-control "no-cache" \
  --delete \
  --exclude '.git/*' \
  --exclude upload.sh \
  dist/ s3://$HOST

# By default, S3 uses a content type header of "binary/octet-stream" for .wasm files, whereas it should be
# "application/wasm":
aws s3 cp \
  --exclude "*" \
  --include "*.wasm" \
  --content-type="application/wasm" \
  --region us-west-1 \
  --acl public-read \
  --cache-control "no-cache" \
  --metadata-directive="REPLACE" \
  --recursive \
  $DRY_RUN_FLAG \
  dist/ s3://$HOST
