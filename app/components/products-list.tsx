"use client"

import { Key } from "react";
import { useProducts } from "../hooks/useProducts"
import { ProductCard } from "./product-card";
import { styled } from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;

    margin-top: 32px;
`

export function ProductsList(){
    const { data } = useProducts();
    return(
        <ListContainer>
            {data?.map((product: { id: Key | null | undefined; name: string; price_in_cents: number; image_url: string; }) => 
            <ProductCard
                key={product.id}
                title={product.name}
                price={product.price_in_cents}
                image={product.image_url}
            />
            )}
    </ListContainer>
    )
}