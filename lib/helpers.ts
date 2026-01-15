import { connectDB } from '@/lib/database'
import Product from '@/models/product'
import { cacheLife } from 'next/cache'
import { NextRequest } from 'next/server'

export async function getProducts(request: NextRequest) {
  'use cache'
  cacheLife('hours')
 
  await connectDB();
  const id = request.nextUrl.searchParams.get('id');
  if (id) {
    const product = await Product.findById(id).lean();
    return product;
  }
  const products = await Product.find().lean();
  return products;
}

export async function createProduct(request: NextRequest) {
  await connectDB();
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const description = formData.get('description') as string;
  const images = formData.getAll('images') as File[];
  const price = formData.get('price') as string;
  const category = formData.get('category') as string;
  const brand = formData.get('brand') as string;
  const published = formData.get('published') === 'true';
  const sizes = formData.getAll('sizes') as string[];
  const colors = formData.getAll('colors') as string[];
  const amountStr = formData.get('stock') as string;
  const gender = formData.get("gender") as string;
  const stock = amountStr ? parseInt(amountStr, 10) : null;

  if (published) {
    if (!name || !description || !images.length || !price || !category || !brand || !gender) {
      throw new Error('name, description, images, price, category, brand, and gender are required when publishing');
    }
  }

  const newProduct = new Product({ name, description, images, price, category, brand, published, sizes, colors, stock, gender });
  await newProduct.save();
  return newProduct;
}
