SQL Basics: Simple EXISTS

For this challenge you need to create a SELECT statement that will contain data about departments that had a sale with a price over 98.00 dollars. This SELECT statement will have to use an EXISTS to achieve the task.

departments table schema
id
name
sales table schema
id
department_id (department foreign key)
name
price
card_name
card_number
transaction_date
resultant table schema
id
name
NOTE: Your solution should use pure SQL. Ruby is used within the test cases to do the actual testing. Do not: alias tables as this can cause a failure.

FUNDAMENTALSSQLDATABASESINFORMATION SYSTEMSDATA





-- Create your SELECT statement here
select id,name from departments
where exists(select price ,department_id from sales where departments.id=sales.department_id and price>20)
