#!/usr/bin/env bash
for i in {5006..5010}
do
nohup node . $i > /dev/null 2>&1 &
echo "PORTS LISTENING"
done
