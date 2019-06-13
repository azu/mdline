#!/bin/bash
cd "$(dirname $0)"
docker run  -v $(pwd)/example.md:/example.md mdline /example.md