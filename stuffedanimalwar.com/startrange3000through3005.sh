#!/usr/bin/env bash
for i in {3000..3005}
do
nohup node . $i > /dev/null 2>&1 &
echo "PORTS LISTENING"
done