import App from "./app"

import IndexRoute from "./routes/index.route"
import ProviderRoute from "./routes/provider.route"

const app = new App([
  new IndexRoute(),
  new ProviderRoute()
])

app.listen()