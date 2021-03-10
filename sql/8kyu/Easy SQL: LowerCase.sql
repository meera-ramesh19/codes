



Easy SQL: LowerCase

Instructions
Output
Given a demographics table in the following format:

** demographics table schema **

id
name
birthday
race
you need to return the same table where all letters are lowercase in the race column.

FUNDAMENTALSSTRINGSSQLDATABASESINFORMATION SYSTEMSDATA/*  SQL  */
select id, name ,birthday,LOWER(race) as race from demographics
