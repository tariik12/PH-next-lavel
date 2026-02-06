// Granting and Revoking Privileges

// psql -U user1 -d postgres
// conninfo
// select * from test_table;
// \conninfo
// select * from test_table; 
// postgres=# grant all privileges on table test_table to user1;
// GRANT
// postgres=#
// postgres=# revoke select on table test_table from user1;
// REVOKE
// postgres=#

// postgres=# grant all privileges on all tables in schema public to user2;
// GRANT
// postgres=#
// postgres=# grant select on all tables in schema public to role1;
// GRANT
// postgres=#