const getPrice = (price, discountType, discountValue, cartCount = 1) => {
    if (discountValue === 0) {
        return (price / 100) * cartCount
    } else {
        if (discountType === 'percentage') {
            return (((price * (100 - discountValue)) / 100) / 100) * cartCount
        } else {
            return (price - discountValue) / 100 * cartCount
        }
    }
}

const getDiscountSign = (discountType, discountValue) => {
    if (discountType === 'percentage') {
        return `(- ${discountValue} %)`
    } else {
        return `(- ${discountValue / 100} AZN)`
    }
}

const calculateTotalPrice = (products) => {
    return products?.reduce((total, product) => {
        return (total + (product.selectedOption?.price / 100) * product.cartCount);
    }, 0);
};

const calculateTotalDiscount = (products) => {
    let totalOriginalPrice = 0;
    let totalDiscountedPrice = 0;

    products?.forEach(product => {
        const { selectedOption, discountType, discount, cartCount } = product;
        const { price } = selectedOption
        const originalPrice = (price / 100) * cartCount;
        const discountedPrice = getPrice(price, discountType, discount, cartCount);

        totalOriginalPrice += originalPrice;
        totalDiscountedPrice += discountedPrice;
    });

    return totalOriginalPrice - totalDiscountedPrice;
};

export { getPrice, getDiscountSign, calculateTotalPrice, calculateTotalDiscount }