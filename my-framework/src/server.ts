import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Statik dosyalar için 'dist' klasörünü belirleyin
app.use(express.static(path.join(__dirname, 'dist')));

// API rotaları veya diğer backend işlemler için kullanabilirsiniz
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: "Backend API is working!" });
});

// Tüm diğer rotalar için index.html dosyasını gönder (SPA desteği)
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server çalışıyor: http://localhost:${port}`);
});
