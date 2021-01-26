import ProductResolver from "./ProductResolver";
import OrderResolver from "./OrderResolver";

export default [...ProductResolver, ...OrderResolver] as any;
