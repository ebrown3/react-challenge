import React, { useEffect, useState } from 'react';
import { logosApi } from '../api/logos-service';
import "../css/logos-page.css"

export const LogosPage = () => {
    const [brands, setBrands] = useState([]);
    const brandSort = (aBrand, bBrand) => {
        const getAudienceSize = ({ source_items }) => source_items.audience_size;
        return (getAudienceSize(aBrand) < getAudienceSize(bBrand)) * -1;
    }
    const loadBrands = async () => {
        const brands = await logosApi.getInterviewData();
        brands.sort(brandSort);
        console.log(brands.map(({ source_items }) => source_items.audience_size).sort());
        setBrands(brands);
    }
    useEffect(() => {
        loadBrands()
    }, []);

    return <div className='brands-page'>
        <div className='brands-page-title'>Choose a Condé Nast brand's audience</div>
        <div className='brands-container'>
            {brands.map((brand) => {
                return <div
                    className='brand'
                >
                    <img className='brand-image'
                        src={brand.social_media_pages.picture}
                        onError={() => {
                            setBrands(brands.filter((aBrand) => aBrand.name !== brand.name))
                        }}
                        height="auto" width="auto" alt="img" />
                </div>
            })}
        </div>
    </div>;

}