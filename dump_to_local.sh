#!/bin/bash


# Local Docker Postgres container
LOCAL_CONTAINER="id-bug"
LOCAL_DB="postgres"
LOCAL_USER="postgres"


# Dump file details
DUMP_FILE="dump.sql"
LOCAL_DUMP_PATH="./$DUMP_FILE"
CONTAINER_DUMP_PATH="/tmp/$DUMP_FILE"

# ===================================


echo "▶ Copying dump into container '$LOCAL_CONTAINER'..."
docker cp "$LOCAL_DUMP_PATH" "$LOCAL_CONTAINER:$CONTAINER_DUMP_PATH"

echo "▶ Restoring into local DB..."
docker exec -u postgres "$LOCAL_CONTAINER" bash -c \
  "psql -U $LOCAL_USER -d $LOCAL_DB -f $CONTAINER_DUMP_PATH"

if [ $? -eq 0 ]; then
  echo "✅ Restore completed successfully."
else
  echo "❌ Restore failed."
  exit 1
fi



