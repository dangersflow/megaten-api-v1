import 'dotenv/config';

import application from './application';

const PORT = process.env.PORT || 3001;
 
((): void => {
  application.listen(PORT, (): boolean =>
    process.stdout.write(`Server running at port http://localhost:${PORT}\n`)
  );
})();
