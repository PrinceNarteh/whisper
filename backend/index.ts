import app from "./src/app.ts";
import { connectDB } from "./src/config/database.ts";

const PORT = process.env.PORT || 3000;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Failed to start the server: ", error);
    process.exit(1);
  });
