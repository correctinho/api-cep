import { app } from './app'
import 'dotenv/config'

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server running on PORT ${port}`))