import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  try {
    // Определяем путь к файлу статьи
    const filePath = path.join(process.cwd(), `src/pages/articles/${slug}.tsx`);

    // Читаем содержимое файла
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Отправляем содержимое в ответе
    res.status(200).json({ content: fileContent });
  } catch (error) {
    res.status(500).json({ error: 'Failed to load article' });
  }
}
