
SQL with Sailor Moon: Thinking about JOINs...

Practise some SQL fundamentals by making a simple database on a topic you feel familiar with. Or use mine, populated with a wealth of Sailor Moon trivia.

sailorsenshi schema
id
senshi_name
real_name_jpn
school_id
cat_id
cats schema
id
name
schools schema
id
school
Return a results table - sailor_senshi, real_name, cat and school - of all characters, containing each character's high school, their civilian name and the cat who introduced them to their magical crime-fighting destiny.

Keep in mind some senshi were not initiated by a cat guardian and one is not in high school. The field can be left blank if this is the case.

FUNDAMENTALSSQLDATABASESINFORMATION SYSTEMSDATA















--your code here--
select ss.senshi_name as sailor_senshi,
ss.real_name_jpn as real_name,
c.name as cat,
sc.school as school
from sailorsenshi ss
left join cats c on c.id=ss.cat_id
left join schools sc on sc.id=ss.school_id
where ss.senshi_name is not null or c.name is null or sc.school is null
