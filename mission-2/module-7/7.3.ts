// User, Role & Privilege Management in POSTGRES

// \du to see user

// attributes is collection of privilige
// create user user1 with login encrypted password '123456';
// \du
//postgres=# create table test_table (name varchar(50));
// ERROR:  relation "test_table" already exists
// postgres=# \d
//            List of relations
//  Schema |    Name    | Type  |  Owner
// --------+------------+-------+----------
//  public | test_table | table | postgres
// (1 row)


// postgres=# insert into test_table(name) values('mezba');
// INSERT 0 1
// postgres=#  select * from test_table;
//  name
// -------
//  mezba
// (1 row)
