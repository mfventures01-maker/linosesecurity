import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { products } from '../data';
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

const ProductPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const product = products.find(p => p.slug === `/${slug}`) || products.find(p => p.slug.includes(slug || ''));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="container section text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Product Not Found</h2>
                <Link id="link-back-home" to="/" className="btn btn-accent mt-4">Return Home</Link>
            </div>
        );
    }

    // Generate JSON-LD Schema
    const structuredData = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.seoTitle,
        "image": product.photoUrl,
        "description": product.metaDescription,
        "brand": {
            "@type": "Brand",
            "name": "Linos E' Security Ltd"
        },
        "offers": {
            "@type": "Offer",
            "priceCurrency": "NGN",
            "price": product.priceStr.replace(/[^\d.]/g, ''),
            "availability": "https://schema.org/InStock",
            "url": `https://linosesecurity.com${product.slug}`
        }
    };

    return (
        <div className="font-sans text-gray-800 antialiased overflow-x-hidden">
            <Helmet>
                <title>{product.seoTitle}</title>
                <meta name="description" content={product.metaDescription} />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            {/* Navigation */}
            <div className="container" style={{ paddingTop: '2rem' }}>
                <Link id="link-back" to="/#systems" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--color-text-muted)' }}>
                    <ChevronLeft size={16} /> Back to Systems
                </Link>
            </div>

            <section className="section">
                <div className="container">
                    {/* Main Product Display - 2 Columns */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* Visual Column */}
                        <div className="product-visual animate-up" style={{ position: 'sticky', top: '2rem' }}>
                            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
                                <img src={product.photoUrl} alt={`${product.capacity} hybrid solar inverter system installed in Nigeria`} style={{ width: '100%', height: 'auto', display: 'block' }} />
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
                            <span className="label" style={{ color: 'var(--color-accent)' }}>{product.capacity} Premium System</span>
                            <h1 style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', marginBottom: '1rem', color: 'var(--color-primary)' }}>{product.headline}</h1>

                            <div style={{ background: 'var(--color-dark-surface)', color: 'white', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem' }}>
                                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Full System Value</div>
                                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-accent)' }}>{product.priceStr}</div>
                                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.5rem' }}>
                                    * Flexible installment options available.
                                </div>
                            </div>

                            <div className="prose mb-4">
                                <h3 style={{ marginBottom: '1rem' }}>Ideal For:</h3>
                                <ul className="product-features" style={{ marginBottom: '2rem' }}>
                                    <li><CheckCircle size={18} style={{ color: 'var(--color-accent)' }} /> 2–4 bedroom homes or small offices</li>
                                    <li><CheckCircle size={18} style={{ color: 'var(--color-accent)' }} /> Combating grid instability & power outages</li>
                                    <li><CheckCircle size={18} style={{ color: 'var(--color-accent)' }} /> Reducing fuel generator costs permanently</li>
                                </ul>

                                <h3 style={{ marginBottom: '1rem' }}>Key Specifications:</h3>
                                <ul className="product-features" style={{ marginBottom: '2rem' }}>
                                    {product.specs.map((spec, i) => (
                                        <li key={i}><Zap size={18} style={{ color: 'var(--color-accent)' }} /> {spec}</li>
                                    ))}
                                    <li><Zap size={18} style={{ color: 'var(--color-accent)' }} /> Ultra-Silent Operation</li>
                                    <li><Zap size={18} style={{ color: 'var(--color-accent)' }} /> Battery-ready Expansion Architecture</li>
                                    <li><Zap size={18} style={{ color: 'var(--color-accent)' }} /> Long Lifecycle Durability</li>
                                </ul>
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
                                <a id="btn-request-install" href="#booking-form" className="btn btn-accent" style={{ flexGrow: 1 }}>
                                    Request Installation <Calendar size={18} />
                                </a>
                                <a id="btn-whatsapp" href="https://wa.me/2348000000000" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ flexGrow: 1, backgroundColor: '#25D366', color: 'white' }}>
                                    Quick WhatsApp Chat <MessageCircle size={18} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section id="booking-form" className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="section-header text-center">
                        <h2 style={{ color: 'white' }}>Get a Free Site Inspection</h2>
                        <p style={{ color: 'rgba(255,255,255,0.8)' }}>Provide your details below and our elite engineering team will contact you to schedule.</p>
                    </div>
                    <form className="animate-up" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input type="text" placeholder="Full Name" style={{ flex: 1, padding: '1rem', borderRadius: 'var(--radius-sm)', border: 'none', width: '100%' }} />
                            <input type="tel" placeholder="Phone Number" style={{ flex: 1, padding: '1rem', borderRadius: 'var(--radius-sm)', border: 'none', width: '100%' }} />
                        </div>
                        <input type="email" placeholder="Email Address" style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: 'none', width: '100%' }} />
                        <textarea placeholder="Property Address / Location" rows={3} style={{ padding: '1rem', borderRadius: 'var(--radius-sm)', border: 'none', width: '100%', fontFamily: 'inherit' }}></textarea>
                        <button id="btn-submit-inspection" className="btn btn-accent" style={{ width: '100%', padding: '1.25rem' }}>Submit Request</button>
                    </form>
                </div>
            </section>

            {/* Testimonials Placeholder */}
            <section className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <div className="container text-center">
                    <h2>Client Experiences</h2>
                    <div className="glass-card" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left', fontStyle: 'italic' }}>
                        <p>"{product.capacity} system was cleanly installed within 48 hours. The engineering team from Linos understood our load perfectly. We haven't turned on the generator since."</p>
                        <div style={{ fontWeight: 'bold', marginTop: '1rem', color: 'var(--color-primary)' }}>— Chief Okafor, Verified Residential Client</div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Placeholder */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                    {[
                        "How long does the installation take?",
                        "Can this system run my AC unit?",
                        "What happens on cloudy days?",
                        "Do you offer maintenance?"
                    ].map((q, i) => (
                        <div key={i} style={{ padding: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                            <strong style={{ color: 'var(--color-primary)' }}>{q}</strong>
                            <ChevronDown size={20} style={{ color: 'var(--color-accent)' }} />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default ProductPage;
