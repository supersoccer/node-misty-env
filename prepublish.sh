#!/bin/bash
BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $BASEDIR
yarn upgrade
node ./node_modules/@supersoccer/semver/index.js
