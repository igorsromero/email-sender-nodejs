import App from "./app"

import IndexRoute from "./routes/index.route"
import ProviderRoute from "./routes/provider.route"
import UserRoute from "./routes/user.route"

const app = new App([
  new IndexRoute(),
  new ProviderRoute(),
  new UserRoute(),
])

app.listen()