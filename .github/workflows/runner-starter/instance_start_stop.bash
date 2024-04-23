#!/bin/bash

# Function to print messages in a fancy way
function printMessage {
  local message="$1"
  local type="$2"
  local length=${#message}
  local line=$(printf "%-${length}s" | tr ' ' '-')
  echo ""
  case "$type" in
    "info")
      echo -e "\033[1;34m$line\033[0m"
      echo -e "\033[1;34m$message\033[0m"
      echo -e "\033[1;34m$line\033[0m"
      ;;
    "success")
      echo -e "\033[1;32m$line\033[0m"
      echo -e "\033[1;32m$message\033[0m"
      echo -e "\033[1;32m$line\033[0m"
      ;;
    "error")
      echo -e "\033[1;31m$line\033[0m"
      echo -e "\033[1;31m$message\033[0m"
      echo -e "\033[1;31m$line\033[0m"
      ;;
    *)
      echo -e "\033[1;34m$line\033[0m"
      echo -e "\033[1;34m$message\033[0m"
      echo -e "\033[1;34m$line\033[0m"
      ;;
  esac
  echo ""
}

# Parse command line arguments
while [ $# -gt 0 ]; do
  case "$1" in
    --instance-id=*)
      INSTANCE_ID="${1#*=}"
      ;;
    --action=*)
      ACTION="${1#*=}"
      ;;
    *)
      printMessage "Invalid argument: $1" "error"
      exit 1
      ;;
  esac
  shift
done

# Check if instance ID is null
if [ -z "$INSTANCE_ID" ]; then
  printMessage "--instance-id=XX-XXX is required" "error"
  exit 1
fi

# Check if action is null
if [ -z "$ACTION" ]; then
  printMessage "--action=start|stop is required" "error"
  exit 1
fi

# Check if action is valid
if [ "$ACTION" != "start" ] && [ "$ACTION" != "stop" ]; then
  printMessage "Invalid action: $ACTION" "error"
  exit 1
fi

# Check if instance is stopped or started
INSTANCE_STATE=$(aws ec2 describe-instances --instance-ids "$INSTANCE_ID" --query "Reservations[].Instances[].State.Name" --output text)

if [ "$ACTION" = "start" ]; then
  if [ "$INSTANCE_STATE" = "stopped" ]; then
    INSTANCE_NAME=$(aws ec2 describe-instances --instance-ids "$INSTANCE_ID" --query "Reservations[].Instances[].Tags[?Key=='Name'].Value" --output text)
    printMessage "Starting instance $INSTANCE_NAME ($INSTANCE_ID)..." "info"
    aws ec2 start-instances --instance-ids "$INSTANCE_ID" >/dev/null
    printMessage "Waiting for instance $INSTANCE_ID to start..." "info"
    aws ec2 wait instance-running --instance-ids "$INSTANCE_ID"
    printMessage "Instance $INSTANCE_ID is now running" "success"
  elif [ "$INSTANCE_STATE" = "running" ]; then
    INSTANCE_NAME=$(aws ec2 describe-instances --instance-ids "$INSTANCE_ID" --query "Reservations[].Instances[].Tags[?Key=='Name'].Value" --output text)
    printMessage "Instance $INSTANCE_NAME ($INSTANCE_ID) is already running" "success"
  else
    printMessage "Instance $INSTANCE_ID is in an unknown state: $INSTANCE_STATE" "error"
    exit 1
  fi
elif [ "$ACTION" = "stop" ]; then
  if [ "$INSTANCE_STATE" = "running" ]; then
    INSTANCE_NAME=$(aws ec2 describe-instances --instance-ids "$INSTANCE_ID" --query "Reservations[].Instances[].Tags[?Key=='Name'].Value" --output text)
    printMessage "Stopping instance $INSTANCE_NAME ($INSTANCE_ID)..." "info"
    aws ec2 stop-instances --instance-ids "$INSTANCE_ID" >/dev/null
    printMessage "Waiting for instance $INSTANCE_ID to stop..." "info"
    aws ec2 wait instance-stopped --instance-ids "$INSTANCE_ID"
    printMessage "Instance $INSTANCE_ID is now stopped" "success"
  elif [ "$INSTANCE_STATE" = "stopped" ]; then
    INSTANCE_NAME=$(aws ec2 describe-instances --instance-ids "$INSTANCE_ID" --query "Reservations[].Instances[].Tags[?Key=='Name'].Value" --output text)
    printMessage "Instance $INSTANCE_NAME ($INSTANCE_ID) is already stopped" "success"
  else
    printMessage "Instance $INSTANCE_ID is in an unknown state: $INSTANCE_STATE" "error"
    exit 1
  fi
fi