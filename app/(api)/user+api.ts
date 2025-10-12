import { ensureInitialized, query } from '@/lib/db';

// POST /api/user - Create a new user
export async function POST(request: Request) {
  try {
    // Ensure database is initialized
    await ensureInitialized();

    const body = await request.json();
    const { name, email, clerkId } = body;

    if (!name || !email || !clerkId) {
      return Response.json(
        { error: 'Missing required fields: name, email, clerkId' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await query(
      'SELECT * FROM users WHERE email = $1 OR clerk_id = $2',
      [email, clerkId]
    );

    if (existingUser.rows.length > 0) {
      return Response.json(
        { error: 'User already exists', user: existingUser.rows[0] },
        { status: 409 }
      );
    }

    // Create new user
    const result = await query(
      `INSERT INTO users (name, email, clerk_id, created_at, updated_at) 
       VALUES ($1, $2, $3, NOW(), NOW()) 
       RETURNING *`,
      [name, email, clerkId]
    );

    return Response.json(
      {
        success: true,
        message: 'User created successfully',
        user: result.rows[0],
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating user:', error);
    return Response.json(
      { error: 'Failed to create user', details: error.message },
      { status: 500 }
    );
  }
}

// GET /api/user?clerkId=xxx or /api/user?email=xxx
export async function GET(request: Request) {
  try {
    // Ensure database is initialized
    await ensureInitialized();
    const { searchParams } = new URL(request.url);
    const clerkId = searchParams.get('clerkId');
    const email = searchParams.get('email');

    if (!clerkId && !email) {
      return Response.json(
        { error: 'Missing required query parameter: clerkId or email' },
        { status: 400 }
      );
    }

    let result;
    if (clerkId) {
      result = await query('SELECT * FROM users WHERE clerk_id = $1', [
        clerkId,
      ]);
    } else {
      result = await query('SELECT * FROM users WHERE email = $1', [email]);
    }

    if (result.rows.length === 0) {
      return Response.json({ error: 'User not found' }, { status: 404 });
    }

    return Response.json(
      {
        success: true,
        user: result.rows[0],
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching user:', error);
    return Response.json(
      { error: 'Failed to fetch user', details: error.message },
      { status: 500 }
    );
  }
}
