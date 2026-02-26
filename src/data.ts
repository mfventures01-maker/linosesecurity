export interface ProductData {
    id: string;
    name: string;
    headline: string;
    description: string;
    priceStr: string;
    photoUrl: string;
    slug: string;
    seoTitle: string;
    metaDescription: string;
    capacity: string;
    specs: string[];
}

export const products: ProductData[] = [
    {
        id: "0",
        name: "Integrated Homes Gadget Pack",
        headline: "1.5KVA Solar Power System – Built for Energy Independence",
        description: "1.5kva 12 v Solar Inverter",
        priceStr: "₦999,999.00",
        photoUrl: "https://i.postimg.cc/QdTMzQvh/5kva_setup.jpg",
        slug: "/solar-inverter-1-5kva-nigeria",
        seoTitle: "1.5KVA Solar Inverter in Nigeria | Linos Security",
        metaDescription: "Upgrade to a 1.5KVA solar inverter built for reliable performance. Explore premium solar power systems in Nigeria. Get expert installation today.",
        capacity: "1.5KVA",
        specs: ["1.5kVA Capacity", "12V Architecture", "Integrated Homes Gadget Pack"]
    },
    {
        id: "1",
        name: "Family Power Security Pack",
        headline: "2.5KVA Solar Power System – Built for Energy Independence",
        description: "2.5kva 12 v Solar Inverter",
        priceStr: "₦1,249,999.00",
        photoUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
        slug: "/solar-inverter-2-5kva-nigeria",
        seoTitle: "2.5KVA Solar Inverter in Nigeria | Linos Security",
        metaDescription: "Upgrade to a 2.5KVA solar inverter built for reliable performance. Explore premium solar power systems in Nigeria. Get expert installation today.",
        capacity: "2.5KVA",
        specs: ["2.5kVA Capacity", "12V Architecture", "Family Power Pack"]
    },
    {
        id: "2",
        name: "INTENSIVE HOME RUSH",
        headline: "2.5KVA HYBRID Solar Power System – Built for Energy Independence",
        description: "2.5kva 24 v Hybride Solar Inverter",
        priceStr: "₦1,449,999.99",
        photoUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
        slug: "/hybrid-solar-inverter-2-5kva-24v-nigeria",
        seoTitle: "2.5KVA HYBRID Solar Inverter in Nigeria | Linos Security",
        metaDescription: "Upgrade to a 2.5KVA HYBRID solar inverter built for reliable performance. Explore premium solar power systems in Nigeria. Get expert installation today.",
        capacity: "2.5KVA",
        specs: ["2.5kVA Capacity", "24V Hybrid System", "Silent Operation"]
    },
    {
        id: "3",
        name: "Essential Premium Power packs",
        headline: "3.5KVA Solar Power System – Built for Energy Independence",
        description: "3.5kva 48 v Hybrid",
        priceStr: "₦2,899,999.99",
        photoUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
        slug: "/solar-inverter-3-5kva-nigeria",
        seoTitle: "3.5KVA Solar Inverter in Nigeria | Linos Security",
        metaDescription: "Upgrade to a 3.5KVA solar inverter built for reliable performance. Explore premium solar power systems in Nigeria. Get expert installation today.",
        capacity: "3.5KVA",
        specs: ["3.5kVA Capacity", "48V Hybrid Architecture", "Premium Capability"]
    },
    {
        id: "4",
        name: "SUPER HOME PREMIUM PACK",
        headline: "5KVA Solar Power System – Built for Energy Independence",
        description: "5kva 48 v Hybrid Solar Inverter",
        priceStr: "₦3,299,999.99",
        photoUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
        slug: "/solar-inverter-5kva-nigeria",
        seoTitle: "5KVA Solar Inverter in Nigeria | Linos Security",
        metaDescription: "Upgrade to a 5KVA solar inverter built for reliable performance. Explore premium solar power systems in Nigeria. Get expert installation today.",
        capacity: "5KVA",
        specs: ["5kVA Capacity", "48V Hybrid System", "Durable Energy Expansion"]
    },
    {
        id: "5",
        name: "CLASSIC BUSINESS PREMIUM INSTALLATION",
        headline: "7.5KVA Solar Power System – Built for Energy Independence",
        description: "7.5kva 48v Hybride Solar Inverter",
        priceStr: "₦3,899,999.99",
        photoUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
        slug: "/solar-inverter-7-5kva-nigeria",
        seoTitle: "7.5KVA Solar Inverter in Nigeria | Linos Security",
        metaDescription: "Upgrade to a 7.5KVA solar inverter built for reliable performance. Explore premium solar power systems in Nigeria. Get expert installation today.",
        capacity: "7.5KVA",
        specs: ["7.5kVA Capacity", "48V Commercial Grade", "Battery-Ready Expansion"]
    },
    {
        id: "6",
        name: "SUPER BUSINESS POWER PACK",
        headline: "10KVA Solar Power System – Built for Energy Independence",
        description: "10kva 48 v Hybride Solar Inverter",
        priceStr: "₦4,499,000.00",
        photoUrl: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80",
        slug: "/solar-inverter-10kva-nigeria",
        seoTitle: "10KVA Solar Inverter in Nigeria | Linos Security",
        metaDescription: "Upgrade to a 10KVA solar inverter built for reliable performance. Explore premium solar power systems in Nigeria. Get expert installation today.",
        capacity: "10KVA",
        specs: ["10kVA Capacity", "48V Architecture", "Enterprise Load Support"]
    }
];
