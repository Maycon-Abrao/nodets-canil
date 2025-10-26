import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.engine('mustache', mustache());                    
server.set('view engine', 'mustache');                      
server.set('views', path.join(__dirname, 'views'));        

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res) => {
  res.render('pages/404');
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
