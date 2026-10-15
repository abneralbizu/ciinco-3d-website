#!/bin/sh
# Downloads the New York shoreline data used by tools/build_geo.py.
# NYC Borough Boundaries (clipped to shoreline), NYC Open Data, mirrored on GitHub.
set -e
mkdir -p data
curl -fsSL -o data/nyc-boroughs.geojson https://raw.githubusercontent.com/dwillis/nyc-maps/master/boroughs.geojson
echo "saved data/nyc-boroughs.geojson"
