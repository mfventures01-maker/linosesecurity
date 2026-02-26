const fs = require('fs');

const raw = [
    {
        "Product": "Integrated Homes Gadget Pack:",
        "Make": "S",
        "Description": "1.5kva 12 v Solar Inverter",
        "Price": "999999",
        "Photo url": "https://i.postimg.cc/QdTMzQvh/5kva_setup.jpg"
    },
    {
        "Product": "Family Power Security Pack:",
        "Make": "",
        "Description": "2.5kva 12 v Solar Inverter",
        "Price": "1249999",
        "Photo url": ""
    },
    {
        "Product": "INTENSIVE HOME RUSH",
        "Make": "",
        "Description": "2.5kva 24 v Hybride Solar Inverter",
        "Price": "1,449,999.99",
        "Photo url": ""
    },
    {
        "Product": "Essential Premium Power packs",
        "Make": "",
        "Description": "3.5kva 48 v Hybrid",
        "Price": "2,899,999.99",
        "Photo url": ""
    },
    {
        "Product": "SUPER HOME PREMIUM PACK",
        "Make": "",
        "Description": "5kva 48 v Hybrid Solar Inverter",
        "Price": "3,299,999.99",
        "Photo url": ""
    },
    {
        "Product": "CLASSIC BUSINESS PREMIUM INSTALLATION",
        "Make": "",
        "Description": "7.5kva 48v Hybride Solar Inverter",
        "Price": "3,899,999.99",
        "Photo url": ""
    },
    {
        "Product": "SUPER BUSINESS POWER PACK",
        "Make": "",
        "Description": "10kva 48 v Hybride Solar Inverter",
        "Price": "4,499,000",
        "Photo url": ""
    }
];

const normalized = raw.map((p, idx) => {
    let name = p.Product.replace(/:$/, "").trim();

    let rawPrice = p.Price.replace(/[^\d.]/g, '');
    let formattedPrice = p.Price;

    let matches = p.Price.match(/[\d,.]+/g);
    if (matches && matches.length > 0) {
        let lastMatch = matches[matches.length - 1];
        let n = parseFloat(lastMatch.replace(/,/g, ''));
        if (!isNaN(n)) {
            formattedPrice = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(n);
        }
    }

    let photoUrl = p['Photo url'] && p['Photo url'].trim() !== "" ? p['Photo url'].trim() : "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=80";

    let productStr = name + " " + (p.Description || "");
    let match = productStr.match(/(\d+(?:\.\d+)?)\s*(kva|kw)/i);
    let capacity = match ? match[1] + match[2].toLowerCase() : "";

    let slug = capacity ? `/solar-inverter-${capacity.replace('.', '-')}-nigeria` : `/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-nigeria`;

    // Deduplicate slashes
    slug = slug.replace(/\/\//g, '/');
    // Ensure uniqueness
    if (idx === 1) slug = '/solar-inverter-2-5kva-12v-nigeria';
    if (idx === 2) slug = '/hybrid-solar-inverter-2-5kva-24v-nigeria';

    let capacityDisplay = capacity ? capacity.toUpperCase() : name;

    let seoTitle = `${capacityDisplay} Solar Inverter in Nigeria | Linos Security`;
    if (seoTitle.length > 60) { seoTitle = seoTitle.substring(0, 56) + "..."; }

    let metaDescription = `Upgrade to a ${capacityDisplay} solar inverter built for reliable performance. Explore premium solar power systems in Nigeria. Get expert installation today.`;

    let headline = capacityDisplay + " Solar Power System – Built for Energy Independence";

    let voltageMatch = productStr.match(/(\d+)\s*v/i);
    let voltage = voltageMatch ? voltageMatch[1] + "V" : "Standard V";

    let hybrid = productStr.toLowerCase().includes("hybrid");

    return {
        id: idx.toString(),
        name,
        headline,
        description: p.Description,
        priceStr: formattedPrice,
        photoUrl,
        slug,
        seoTitle,
        metaDescription,
        capacity: capacityDisplay,
        voltage,
        hybrid
    };
});

fs.writeFileSync('data.ts', 'export const products = ' + JSON.stringify(normalized, null, 2) + ';\n');
