#!/bin/bash

drive_download () {
  if ! test -f "$2" ; then
    wget --no-check-certificate "https://docs.google.com/uc?export=download&id=$1" -O $2
    return 0
  fi
  return 1
}

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
APP_DATA_DIR="$(dirname "${SCRIPT_DIR}")/app/data"

# Google Drive data id's
ITEM_REVIEW_ZIP_ID='1ZUcImN2zv_sQJQ3m7W6x3qSiJkodqg4R'
ITEM_REVIEW_PANDAS_ID='17khBJSogpqH7tIPRQ0O6Rbvu5V9ju8Z4'
SUMMARY_REVIEW_ID='1Yy4fPmJeckasSR3fgUj21K1nWmK_9MkV'

# Common dir for review artifacts
ITEM_REVIEW_DIR="${APP_DATA_DIR}/review"
mkdir -p "${ITEM_REVIEW_DIR}"

# data.zip - Phone reviews archive
if drive_download ${ITEM_REVIEW_ZIP_ID} "${ITEM_REVIEW_DIR}/data.zip" ; then
  unzip "${ITEM_REVIEW_DIR}/data.zip" -d "${ITEM_REVIEW_DIR}"
fi

# df.parquet - Phone reviews pandas dataframe
drive_download ${ITEM_REVIEW_PANDAS_ID} "${ITEM_REVIEW_DIR}/df.parquet"

# sum_table.csv - Phone reviews ML-based summary
drive_download ${SUMMARY_REVIEW_ID} "${APP_DATA_DIR}/sum_table.csv"
