import { drawPhotos } from './thumbail-rendering.js';
import { loadPhotos } from './server-interaction.js';
import { showServerError } from './messages.js';

loadPhotos(drawPhotos,showServerError);
