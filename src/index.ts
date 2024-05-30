import 'dotenv/config'

import app from './server'

const PORT = process.env.PORT || 5050

app.listen(PORT, () => {
    console.log('[AUTH SERVER SERVICE]')
    console.log('[SERVER] listening on port ' + PORT);
})