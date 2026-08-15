import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

app.use(cors());
app.use(express.json());

const apiRouter = express.Router();

// Helper function to generate 9-digit random ID
const generateMatricula = (): string => {
  return Math.floor(100000000 + Math.random() * 900000000).toString();
};

// Route: Register new participant
apiRouter.post('/register', async (req, res) => {
  try {
    const data = req.body;
    let matricula = generateMatricula();
    
    // Ensure uniqueness (simple retry logic)
    let exists = await prisma.registration.findUnique({ where: { matricula } });
    while (exists) {
      matricula = generateMatricula();
      exists = await prisma.registration.findUnique({ where: { matricula } });
    }

    const registration = await prisma.registration.create({
      data: {
        matricula,
        nombre: data.nombre,
        seudonimo: data.seudonimo || null,
        correo: data.correo,
        telefono: data.telefono,
        ubicacion: data.ubicacion,
        rol: data.rol,
        experiencia: Number(data.experiencia),
        otrosEventos: data.otrosEventos,
        cualesEventos: data.cualesEventos || null,
        organizacion: data.organizacion,
        cualOrganizacion: data.cualOrganizacion || null,
        actividades: data.actividades || [],
        matchmaking: data.matchmaking,
        expectativas: data.expectativas,
        area1: data.area1 || null,
        area2: data.area2 || null,
        area3: data.area3 || null,
        importancia: Number(data.importancia),
      }
    });

    res.status(201).json({ success: true, matricula: registration.matricula });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Route: Admin Login
apiRouter.post('/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // TODO: In production, compare hashed passwords.
    // For now, checking against env or basic DB check
    const admin = await prisma.adminUser.findUnique({ where: { username } });
    
    if (!admin || admin.password !== password) {
      return res.status(401).json({ success: false, error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: admin.id, username: admin.username }, JWT_SECRET, { expiresIn: '12h' });
    res.json({ success: true, token });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Middleware: Authenticate JWT
const authenticateJWT = (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err: any, user: any) => {
      if (err) return res.status(403).json({ error: 'Forbidden' });
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Route: Get all registrations (Protected)
apiRouter.get('/admin/registrations', authenticateJWT, async (req, res) => {
  try {
    const registrations = await prisma.registration.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json({ success: true, registrations });
  } catch (error) {
    console.error('Fetch Registrations Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Create initial admin user if not exists (for setup convenience)
const initializeAdmin = async () => {
  try {
    const adminExists = await prisma.adminUser.findUnique({ where: { username: 'admin' } });
    if (!adminExists) {
      await prisma.adminUser.create({
        data: {
          username: 'admin',
          password: 'beatlanpassword' // Hardcoded plain for now, should hash in real app
        }
      });
      console.log('Default admin user created (admin / beatlanpassword)');
    }
  } catch (err) {
    console.log('Waiting for DB to be ready...');
  }
};

app.use(['/api', '/beatlan/api', '/'], apiRouter);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await initializeAdmin();
});
