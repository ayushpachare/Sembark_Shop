export type Product = {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
    "rating": {
      "rate": number,
      "count": number
    }   
}

export async function getproducts(): Promise<Product[]> {
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok){
        throw new Error("Failed to process")
    }
    const data: Product[] = await response.json() as Product[];
    return data
}