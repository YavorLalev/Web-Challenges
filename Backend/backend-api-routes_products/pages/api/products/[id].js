import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  if (request.method === "GET") {
    const { id } = request.query;
    response.status(200).json(getProductById(id));
    return;
  }

  response.status(405).json({ message: "Method Not Allowed" });
}
console.log(getProductById());
