rm -R -f ./migrations &&
pipenv run init &&
psql -U postgres -c "DROP DATABASE IF EXISTS desperdiciocero";
psql -U postgres -c "CREATE DATABASE desperdiciocero";
psql -U postgres -c "CREATE EXTENSION unaccent" -d desperdiciocero;
pipenv run migrate &&
pipenv run upgrade
