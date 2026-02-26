import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';

interface DynamicProduct {
    product_name: string;
    product_slug: string;
    category: string;
    price: string;
    photo_url: string;
    seo_description: string;
    meta_title: string;
    meta_description: string;
    whatsapp_cta_link: string;
    json_ld_schema: string;
}

const ProductListingPage: React.FC = () => {
    const [products, setProducts] = useState<DynamicProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Solar Power Systems', 'CCTV & Surveillance', 'Access Control', 'Perimeter Security'];

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load products:", err);
                setLoading(false);
            });
    }, []);

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <div className="font-sans text-gray-800 antialiased overflow-x-hidden bg-gray-50 min-h-screen">
            <Helmet>
                <title>Solar & Security Products in Nigeria | Linos E' Security</title>
                <meta name="description" content="Browse our catalog of premium Solar Power Systems, CCTV surveillance, and Access Control equipment in Nigeria." />
            </Helmet>

            <section className="section section-dark pt-12 pb-12 text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="container">
                    <h1 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Energy & Security Architecture</h1>
                    <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto' }}>
                        Premium infrastructure built for uncompromised performance and total independence.
                    </p>
                </div>
            </section>

            <section className="products-overview section pt-8">
                <div className="container">
                    {/* Category Filter Navigation */}
                    <nav className="product-categories" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                data-cat={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '30px',
                                    border: activeCategory === cat ? 'none' : '1px solid #CBD5E1',
                                    backgroundColor: activeCategory === cat ? 'var(--color-accent)' : 'white',
                                    color: activeCategory === cat ? 'white' : 'var(--color-primary)',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {cat === 'Solar Power Systems' ? 'Solar Inverters' : cat}
                            </button>
                        ))}
                    </nav>

                    {/* Products Grid */}
                    {loading ? (
                        <div className="text-center py-12"><p>Loading catalog...</p></div>
                    ) : (
                        <div className="products-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                            gap: '2.5rem'
                        }}>
                            {filteredProducts.map(product => (
                                <div key={product.product_slug} className="product-card glass-card" style={{
                                    display: 'flex', flexDirection: 'column', padding: '0', overflow: 'hidden',
                                    backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '12px',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                                >
                                    <div style={{ position: 'relative', width: '100%', paddingTop: '75%' }}>
                                        <img
                                            src={product.photo_url}
                                            alt={product.product_name}
                                            loading="lazy"
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-primary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                                            {product.category.split(' ')[0]}
                                        </div>
                                    </div>

                                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>{product.product_name}</h3>
                                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                                            {product.seo_description}
                                        </p>

                                        <div style={{ marginTop: 'auto' }}>
                                            <div className="price" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-accent)', marginBottom: '1.5rem' }}>
                                                ₦{product.price}
                                            </div>

                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                <a
                                                    href={product.whatsapp_cta_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="btn btn-primary cta-button"
                                                    style={{ width: '100%', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}
                                                >
                                                    Order on WhatsApp
                                                </a>
                                                <Link
                                                    to={`/products/${product.product_slug}`}
                                                    className="details-link"
                                                    style={{ width: '100%', textAlign: 'center', padding: '0.75rem', border: '1px solid #E2E8F0', borderRadius: 'var(--radius-sm)', color: 'var(--color-primary)', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                                >
                                                    View Details <ChevronRight size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProductListingPage;
