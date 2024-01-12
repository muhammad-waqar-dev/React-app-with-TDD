const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs').promises;
const cors = require('cors')
const secret = process.env.HASH_SECRET || "My Secret";
const saltRounds = process.env.HASH_SALT_ROUNDS || 10;
const refreshTokenTime = process.env.REFRESH_TOKEN_TIME || '7d';
const PORT = process.env.PORT || 4000;
const accessTokenTime = process.env.ACCESS_TOKEN_TIME || '1h';

//allow OPTIONS on all resources
app.use(cors());

// parse application/json
app.use(bodyParser.json());

async function myfunc(password){
// Hashing the password
const hashedPassword = await bcrypt.hash(password, saltRounds);
return hashedPassword;
};

let userData = [];

async function loadUserData() {
  try {
    const data = await fs.readFile('users.json', 'utf-8', err => {
      if (err) {
          console.log('Error read file', err)
      } else {
          console.log('Successfully read file')
      }
    });
    userData = data !== '' ? JSON.parse(data): [];
  } catch (error) {
    console.error('Error reading user data:', error);
  }
}

// Save user data to JSON file
async function saveUserData() {
  try {
    const jsonUserData = JSON.stringify(userData, null, 2)

    await fs.writeFile('users.json', jsonUserData, 'utf-8', err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  });
  // fs.writeFileSync('./newCustomer.json', jsonString)

  } catch (error) {
    console.error('Error saving user data:', error);
  }
}

app.get('/', (req, res) => {
    res.send('Hello, TDD Backend!');
});

function generateAccessToken(user) {

    const payload = {
        id: user.id,
        email: user.email
    };

    const options = { expiresIn: accessTokenTime };

    return jwt.sign(payload, secret, options);
};

// Generate a new refresh token
function generateRefreshToken(user) {
  const payload = {
    id: user.id,
    email: user.email
  };

  const options = { expiresIn: refreshTokenTime };

  return jwt.sign(payload, secret, options);
}

function verifyAccessToken(token) {

    try {
        const decoded = jwt.verify(token, secret);
        return { success: true, data: decoded };
    } catch (error) {
        return { success: false, error: error.message };
    }
};

// Verify a refresh token
function verifyRefreshToken(token) {

  try {
    const decoded = jwt.verify(token, secret);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    const result = verifyAccessToken(token);

    if (!result.success) {
        return res.status(403).json({ error: result.error });
    }

    req.user = result.data;
    next();
}

// Generate Access token and Refresh token
app.post('/signup', async (req, res) => {
  const user = req.body;

  if (!user || !user.email || !user.password || !user.username) {
    return res.status(403).json({ error: 'Invalid data' });
  };

  // Check if username already exists
  if (userData.find(u => u.username === user.username)) {
    return res.status(400).json({ error: 'Username already exists' });
  };

    // Check if username already exists
    if (userData.find(u => u.email === user.email)) {
      return res.status(400).json({ error: 'Email already exists' });
    }

  // Hash the password
  const hashedPassword = await myfunc(user.password);

  // Add new user to the data
  userData.push({
    id: userData.length + 1,
    username: user.username,
    email: user.email,
    passwordHash: hashedPassword,
  });

  // Save user data to JSON file
  await saveUserData();

  res.json({ message: 'Signup successful' });

});

// Generate Access token and Refresh token
app.post('/login', async (req, res) => {
  const user = req.body;

  // Find the user by username
  const selectedUser = userData.find(u => u.email === user.email);

  if (!selectedUser) {
    return res.status(403).json({ error: 'User not found!' });
  };

  if(user.email != selectedUser.email){
    return res.status(401).json({ error: "Invalid credentials" });
  };

  // Compare the provided password with the stored hash
  const passwordMatch = await bcrypt.compare(user.password, selectedUser.passwordHash);

  if (passwordMatch) {
    const accessToken = generateAccessToken({...user, id: selectedUser.id});
    const refreshToken = generateRefreshToken({...user, id: selectedUser.id});
    const response = {
      data: {
        accessToken,
        refreshToken,
        user: selectedUser
      },
      status: 200, message: "Login successfully"
    };
    res.json(response);
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }

});
  
// Refresh an access token using a valid refresh token
app.post('/token/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  const result = verifyRefreshToken(refreshToken);

  if (!result.success) {
    return res.status(403).json({ error: result.error });
  }

  const user = result.data;
  const newAccessToken = generateAccessToken(user);
  const response = {
    data: {
      accessToken: newAccessToken, 
      refreshToken,
    }, status: 200, message: " generate access token successfully"
  }
  res.status(200).json(response);
});

app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected route!', user: req.body });//
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost: ${PORT}`);
    loadUserData(); // Load user data on server start
});