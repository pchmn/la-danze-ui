#!/bin/sh

trim() {
  local s2 s="$*"
  until s2="${s#[[:space:]]}"; [ "$s2" = "$s" ]; do s="$s2"; done
  until s2="${s%[[:space:]]}"; [ "$s2" = "$s" ]; do s="$s2"; done
  echo "$s"
}

getLaDanzeUiVersion() {
  local laDanzeUiVersion=''
  while IFS= read -r line; do
      trimmedLine=$(trim "$line")
      if [[ $trimmedLine =~ \"version\" ]]; then
        versionString=${trimmedLine##*'"version": "'}
        laDanzeUiVersion=${versionString%'",'}
        break
      fi
  done < ./package.json
  echo $laDanzeUiVersion
}

getConfigVersion() {
  local laDanzeUiVersion=''
  while IFS= read -r line; do
      trimmedLine=$(trim "$line")
      if [[ $trimmedLine =~ LA_DANZE_UI_VERSION ]]; then
        versionString=${trimmedLine##*"LA_DANZE_UI_VERSION: '"}
        laDanzeUiVersion=${versionString%"'"}
        break
      fi
  done < ./config.js
  echo $laDanzeUiVersion
}

newVersion=$(getLaDanzeUiVersion)
oldVersion=$(getConfigVersion)

node ./version.js $oldVersion $newVersion

git add ./version.js
git commit -m "Update version in config.js"
