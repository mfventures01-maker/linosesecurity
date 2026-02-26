import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
    ChevronLeft,
    CheckCircle,
    MessageCircle,
    Calendar,
    Shield,
    Award,
    ChevronDown,
    Zap
} from 'lucide-react';

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

const ProductPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [product, setProduct] = useState<DynamicProduct | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchProduct() {
            try {
                const res = await fetch('/products.json');
                const data: DynamicProduct[] = await res.json();
                const found = data.find(p => p.product_slug === slug);
                setProduct(found || null);
            } catch (err) {
                console.error("Failed to load product:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [slug]);

    if (loading) {
        return (
            <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Loading Architecture...</h2>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Product Not Found</h2>
                <Link id="link-back-catalog" to="/solar-security-products" className="btn btn-accent mt-4">Browse Catalog</Link>
            </div>
        );
    }

    return (
        <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
            <Helmet>
                <title>{product.meta_title}</title>
                <meta name="description" content={product.meta_description} />
                <meta property="og:title" content={product.meta_title} />
                <meta property="og:description" content={product.meta_description} />
                <meta property="og:image" content={product.photo_url} />
                <script type="application/ld+json">
                    {product.json_ld_schema}
                </script>
            </Helmet>

            {/* Navigation */}
            <div className="container" style={{ paddingTop: '2rem' }}>
                <Link id="link-back" to="/solar-security-products" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-text-muted)' }}>
                    <ChevronLeft size={16} /> Back to Products
                </Link>
            </div>

            <section className="section pb-8">
                <div className="container">
                    {/* Main Product Display - 2 Columns */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* Visual Column */}
                        <div className="product-visual animate-up" style={{ position: 'sticky', top: '2rem' }}>
                            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
                                <img src={product.photo_url} alt={product.product_name} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} />
                            </div>

                            {/* Trust Badges */}
                            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '2rem 0', padding: '1.5rem', background: 'var(--color-glass-bg-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-glass-border-light)' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <Shield size={24} style={{ color: 'var(--color-accent)', margin: '0 auto 0.5rem auto' }} />
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>2-Year Warranty</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <Award size={24} style={{ color: 'var(--color-accent)', margin: '0 auto 0.5rem auto' }} />
                                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Certified Installation</div>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="product-details animate-up delay-1">
                            <span className="label" style={{ color: 'var(--color-accent)' }}>{product.category}</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', marginBottom: '1rem', color: 'var(--color-primary)' }}>{product.product_name}</h1>
                            <p className="subtitle mb-6">{product.seo_description}</p>

                            <div style={{ background: 'var(--color-dark-surface)', color: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
                                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Full System Value</div>
                                <div className="price" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-accent)' }}>₦{product.price}</div>
                                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.5rem' }}>
                                    * Professional deployment included.
                                </div>
                            </div>

                            <div className="prose mb-4">
                                <h3 style={{ marginBottom: '1rem' }}>Premium Inclusion:</h3>
                                <ul className="product-features" style={{ marginBottom: '2rem' }}>
                                    <li><CheckCircle size={18} style={{ color: 'var(--color-accent)' }} /> Combating grid instability & power outages</li>
                                    <li><CheckCircle size={18} style={{ color: 'var(--color-accent)' }} /> Enterprise-Grade Hardware Lifecycle</li>
                                    <li><CheckCircle size={18} style={{ color: 'var(--color-accent)' }} /> Expert Pre-Installation Audit</li>
                                </ul>
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                                <a id="btn-whatsapp" href={product.whatsapp_cta_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flexGrow: 1, backgroundColor: '#25D366', color: 'white', fontSize: '1.1rem', padding: '1rem', justifyContent: 'center' }}>
                                    Order on WhatsApp <MessageCircle size={20} />
                                </a>
                                <a id="btn-request-install" href="#booking-form" className="btn btn-outline" style={{ flexGrow: 1, justifyContent: 'center' }}>
                                    Request Inspection <Calendar size={18} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Testimonials Placeholder */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container text-center">
                    <h2>Client Experiences</h2>
                    <div className="glass-card" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left', fontStyle: 'italic' }}>
                        <p>"{product.product_name} was securely installed within 48 hours. The engineering team from Linos understood our demands perfectly. Highly recommended."</p>
                        <div style={{ fontWeight: 'bold', marginTop: '1rem', color: 'var(--color-primary)' }}>— Chief Okafor, Verified Client</div>
                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section id="booking-form" className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="section-header text-center">
                        <h2 style={{ color: 'white' }}>Schedule an Audit</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Provide your details below and our elite team will secure your installation date.</p>
                    </div>
                    {/* Minimal form mock */}
                    <form className="animate-up" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Full Name" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: 'none', width: '100%' }} />
                        <input type="tel" placeholder="Phone Number" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: 'none', width: '100%' }} />
                        <button id="btn-submit-inspection" className="btn btn-accent" style={{ width: '100%', padding: '1.25rem' }}>Secure Schedule</button>
                    </form>
                </div>
            </section>

        </div>
    );
};

export default ProductPage;
