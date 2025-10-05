export const getNewArrival = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MAIN_API}/b/FQ3XS`, {
      cache: "force-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPartner = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MAIN_API}/b/LXPYA`, {
      cache: "force-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// men products

export const menProduct = async () => {
  const MEN_CATEGORIES = ["mens-shirts", "mens-shoes", "mens-watches"];
  try {
    const responses = await Promise.all(
      MEN_CATEGORIES.map((cat) =>
        fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API}/${cat}`, {
          cache: "force-cache",
        })
      )
    );
    const data = await Promise.all(responses.map((res) => res.json()));

    const products = data.flatMap((category) => category.products);
    const randomProducts = products.sort(() => Math.random() - 0.5);

    return randomProducts;
  } catch (error) {
    console.error("Failed to fetch men products:", error);
    return [];
  }
};

// women products

export const getWomanProducts = async () => {
  const WOMEN_CATEGORIES = ["womens-bags", "womens-dresses", "womens-shoes"];
  try {
    const responses = await Promise.all(
      WOMEN_CATEGORIES.map((cat) =>
        fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API}/${cat}`, {
          cache: "force-cache",
        })
      )
    );
    const data = await Promise.all(responses.map((res) => res.json()));
    const womenProduct = data.flatMap((cat) => cat.products);
    const randomProducts = womenProduct.sort(() => Math.random() - 0.5);
    return randomProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};
