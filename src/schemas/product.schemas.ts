import { z } from "zod";

  export  const ProductSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(3),
    price: z.number().min(0.1),
    discountPercentage: z.number().min(1),
    rating: z.number().min(0),
    stock: z.number().min(1),
    brand: z.string().min(1),
    category: z.string().min(1),
    thumbnail: z.string().min(1),
    images: z.array(z.string().min(1)),
  });
