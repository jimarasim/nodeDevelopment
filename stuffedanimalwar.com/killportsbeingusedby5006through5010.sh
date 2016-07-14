#!/usr/bin/env bash
kill $(lsof -t -i:5006) && kill $(lsof -t -i:5007) && kill $(lsof -t -i:5008) && kill $(lsof -t -i:5009) && kill $(lsof -t -i:5010)