# Database Setup Guide

This guide will help you set up PostgreSQL for the Uber Clone app on your local machine.

## Prerequisites

- PostgreSQL installed on your local machine
- Node.js and npm installed

## Installation Steps

### 1. Install PostgreSQL (if not already installed)

**On Ubuntu/Debian:**

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

**On macOS:**

```bash
brew install postgresql
brew services start postgresql
```

**On Windows:**
Download and install from [PostgreSQL official website](https://www.postgresql.org/download/windows/)

### 2. Create a Database

```bash
# Access PostgreSQL as the postgres user
sudo -u postgres psql

# Or on macOS/Windows, just run:
psql postgres

# Create a new database
CREATE DATABASE uberclone;

# Create a user (optional, if you want a separate user)
CREATE USER uberclone_user WITH ENCRYPTED PASSWORD 'your_password';

# Grant privileges
GRANT ALL PRIVILEGES ON DATABASE uberclone TO uberclone_user;

# Exit
\q
```

### 3. Run the Migration

```bash
# Connect to your database
psql -U postgres -d uberclone

# Or if you created a custom user:
psql -U uberclone_user -d uberclone

# Run the migration file
\i database/migrations/001_create_users_table.sql

# Verify the table was created
\dt

# View the table structure
\d users

# Exit
\q
```

### 4. Configure Environment Variables

1. Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

2. Update the `DATABASE_URL` in your `.env` file:

```
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/uberclone
```

Or if you created a custom user:

```
DATABASE_URL=postgresql://uberclone_user:your_password@localhost:5432/uberclone
```

### 5. Test the Connection

You can test your database connection by checking the console logs when you start your Expo server. You should see:

```
✅ Connected to PostgreSQL database
```

## API Endpoints

### Create User

**POST** `/api/user`

**Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "clerkId": "user_clerk_id_here"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "id": 1,
    "clerk_id": "user_clerk_id_here",
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2025-10-12T10:00:00.000Z",
    "updated_at": "2025-10-12T10:00:00.000Z"
  }
}
```

### Get User

**GET** `/api/user?clerkId=user_clerk_id_here`

or

**GET** `/api/user?email=john@example.com`

**Response:**

```json
{
  "success": true,
  "user": {
    "id": 1,
    "clerk_id": "user_clerk_id_here",
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2025-10-12T10:00:00.000Z",
    "updated_at": "2025-10-12T10:00:00.000Z"
  }
}
```

## Troubleshooting

### Connection Refused

If you get "connection refused" errors:

1. Make sure PostgreSQL is running: `sudo service postgresql status` (Linux) or `brew services list` (macOS)
2. Start PostgreSQL if needed: `sudo service postgresql start` (Linux) or `brew services start postgresql` (macOS)

### Authentication Failed

1. Check your username and password in the `DATABASE_URL`
2. Verify the user has proper permissions: `GRANT ALL PRIVILEGES ON DATABASE uberclone TO your_user;`

### Database Does Not Exist

Make sure you created the database: `CREATE DATABASE uberclone;`

### Port Already in Use

If port 5432 is already in use, you can:

1. Find the process: `lsof -i :5432`
2. Kill it: `kill -9 <PID>`
3. Or change the port in your PostgreSQL config

## Useful PostgreSQL Commands

```bash
# List all databases
\l

# Connect to a database
\c database_name

# List all tables
\dt

# Describe a table
\d table_name

# View all users
SELECT * FROM users;

# Delete all data from a table
TRUNCATE users;

# Drop the table
DROP TABLE users;
```

## Next Steps

After setting up the database, you can integrate it with your Clerk authentication flow by:

1. Creating a user in the database after successful Clerk signup
2. Fetching user data from the database using their Clerk ID
3. Updating user profile information

Example usage in your signup flow:

```typescript
// After successful Clerk signup
const response = await fetch(`${API_URL}/api/user`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: form.name,
    email: form.email,
    clerkId: user.id,
  }),
});
```
