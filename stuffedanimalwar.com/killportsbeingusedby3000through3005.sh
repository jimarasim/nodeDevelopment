#!/usr/bin/env bash
kill $(lsof -t -i:3000) && kill $(lsof -t -i:3001) && kill $(lsof -t -i:3002) && kill $(lsof -t -i:3003) && kill $(lsof -t -i:3004) && kill $(lsof -t -i:3005)