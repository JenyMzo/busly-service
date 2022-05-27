# busly-service
back end api with endpoints for busly app

## Installation

    $ yarn

## Update database

    Note: whenever you change the database schema, you need to update the migration and seeders files.

## Reset database

    $ yarn db:reset

### Troubleshooting DB connecton issues

    $mysql ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'adminBusly';

    Note: Make sure your environment variables are set correctly in .env file and that you have the right .zshrc profile set.
