import { Text } from './models/text.js';
import { Count } from './models/count.js';

Text.sync({ force: true });
Count.sync({ force: true });
