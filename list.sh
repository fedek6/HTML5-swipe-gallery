#!/bin/sh

echo "Copy this contents into div with slider id in index.html:\n"

tput setaf 1
for entry in img/gallery/*
do
  echo "<div style=\"background-image: url('$entry')\"></div>";
done
