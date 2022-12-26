import express, { Request, Response } from 'express';
import path from 'path';

const _dirname = path.resolve();
const app = express();
const viewsPath = path.resolve(_dirname, 'views');
const buildPath = path.resolve(_dirname, 'client/dist');
app.use(express.json());

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', viewsPath);

// ? API Route
app.get('/api', (req: Request, res: Response) => {
    res.send('API route');
});

app.use(express.static(buildPath));

// ? React App Route
app.use('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(_dirname, 'client/dist', 'index.html'));
});
app.listen(process.env.PORT ?? 3000, () => {
    console.log('Server started on port 3000');
});
