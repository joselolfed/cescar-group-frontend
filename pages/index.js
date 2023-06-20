import HeroBanner from "@/components/HeroBanner";
import { ProductCard } from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home({products}) {
    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:y-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold
                    leading-tight">
                        Heading
                    </div>
                    <div className="text-md md:text-xl">
                        paragraph
                    </div> 
                </div>
                {/* heading and paragraph end */}

                {/* products grid empieza */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-14
                px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product}/>
                    ))}
                </div>
                {/* products grid termina */}
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: {products}
    }
}
