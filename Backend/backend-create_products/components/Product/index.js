import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  const { name, description, price, currency, reviews, origin } = data;
  return (
    <ProductCard>
      <h2>{name}</h2>
      <p>Description: {description}</p>
      <p>
        Price: {price} {currency}
        {origin}
      </p>
      {reviews.length > 0 && <Comments reviews={reviews} />}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
