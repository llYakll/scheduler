import { app, BrowserWindow } from 'electron';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Equivalent to __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const createWindow = () => {
    const win = new BrowserWindow({
      width: 1920,
      height: 1080,
      webPreferences: {
        preload: join(__dirname, 'preload.js'),
      },
    });
  
    
    setTimeout(() => {
      win.loadURL('http://localhost:5173');
    }, 100);  
  };

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
