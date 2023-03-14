import app from './app';
import ProductsRoutes from './routes/products.routes';

const PORT = 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

app.use(ProductsRoutes);

export default server;
