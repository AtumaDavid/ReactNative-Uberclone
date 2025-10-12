-- Create users table for the Uber Clone app
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    clerk_id VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    profile_image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on clerk_id for faster lookups
CREATE INDEX idx_users_clerk_id ON users(clerk_id);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to call the function before any UPDATE on the users table
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Add some comments for documentation
COMMENT ON TABLE users IS 'Stores user information synced from Clerk authentication';
COMMENT ON COLUMN users.clerk_id IS 'Unique identifier from Clerk authentication service';
COMMENT ON COLUMN users.email IS 'User email address (must be unique)';
COMMENT ON COLUMN users.profile_image_url IS 'URL to user profile image (optional)';
