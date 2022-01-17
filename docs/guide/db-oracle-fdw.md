# Oracle FDW

PostgreSQL Foreign Data Wrapper for Oracle,
oracle_fdw is a PostgreSQL extension that provides a Foreign Data Wrapper for easy and efficient access to Oracle databases.

**Requirements:**

- PostgreSQL 9.3 or better
- Oracle client 11.2 or better

## Installation

**Download:**

- instantclient-basic-linux.x64-12.2.0.1.0.zip
- instantclient-sdk-linux.x64-12.2.0.1.0.zip
- instantclient-sqlplus-linux.x64-12.2.0.1.0.zip

In Postgres Docker

```bash
apt update
apt upgrade
apt install -y zip build-essential postgresql-server-dev-all libaio1

unzip instantclient-basic-linux.x64-12.2.0.1.0.zip
unzip instantclient-sdk-linux.x64-12.2.0.1.0.zip
unzip instantclient-sqlplus-linux.x64-12.2.0.1.0.zip

cd instantclient_12_2/

ln -s libclntsh.so.12.1 libclntsh.so
ln -s libocci.so.12.1 libocci.so
sh -c "echo /opt/oracle/instantclient_12_2 > /etc/ld.so.conf.d/oracle-instantclient.conf"
ldconfig
export PATH=/opt/oracle/instantclient_12_2:$PATH
export LD_LIBRARY_PATH=/opt/oracle/instantclient_12_2
export ORACLE_HOME=/opt/oracle/instantclient_12_2
```

## Usage

```sql
create extension oracle_fdw;

--drop foreign table datawrap_test2;
--drop user mapping for fanatic server oracle;
--drop server oracle;

create server oracle foreign data wrapper oracle_fdw options (dbserver '//ip_server:port/service_Name');
GRANT USAGE ON FOREIGN SERVER oracle TO fanatic;
create user mapping for fanatic server oracle options (user 'system', password 'oracle');
SELECT srvoptions FROM pg_foreign_server WHERE srvname = 'oracle';

create foreign table datawrap_test2 (
  "JOB_ID" VARCHAR(10),
  "JOB_TITLE" VARCHAR(35),
  "MIN_SALARY" NUMeric(6,0),
  "MAX_SALARY" NUMeric(6,0)
) server oracle options (schema 'HR', table 'JOBS');
select * from datawrap_test2;
```

example

## Preference

- [PostgreSQL Foreign Data Wrapper for Oracle](http://laurenz.github.io/oracle_fdw/)
- [Github Oracle FDW](https://github.com/laurenz/oracle_fdw)
- [Explanation](https://www.postgresql.fastware.com/postgresql-insider-fdw-ora-bas)
- [Tutorial](https://www.enterprisedb.com/postgres-tutorials/using-foreign-data-wrappers-access-remote-postgresql-and-oracle-databases)
