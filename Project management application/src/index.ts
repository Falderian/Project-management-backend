import mongoose from 'mongoose';
import { PORT } from './constants';

import * as serverService from './services/server.service';

const UserName = 'admin';
const Password = 'admin';
const clasterInfo = 'cluster0.gcgejjl';
const applicationName = 'project-management-backend';

(async () => {
  try {
    await mongoose.connect(`mongodb+srv://${UserName}:${Password}@${clasterInfo}.mongodb.net/${applicationName}`);
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...');
    })
  } catch (error) {
    console.log(error);
  }
})();



process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});
