"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 4040;
app_1.default.listen(port, () => {
    console.log(`Server up on ${port}!`);
});
//# sourceMappingURL=server.js.map