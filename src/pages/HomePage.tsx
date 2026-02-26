import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Zap,
    ShieldCheck,
    ChevronRight,
    Map,
    Users,
    Award,
    BatteryCharging,
    Eye,
    Briefcase,
    Lock,
    PhoneCall,
    Activity,
    Fingerprint,
    Video
} from 'lucide-react';
import { products } from '../data';

const HomePage: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const featuredSolar = products.slice(0, 3); // Top 3 items

    return (
        <div className="font-sans text-gray-800 antialiased overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="hero">
                <div className="hero-bg">
                    <img
                        src="https://images.unsplash.com/photo-1549488344-c78bce581896?w=1600&q=80"
                        alt="Solar Installation Nigeria"
                    />
                </div>
                <div className="hero-glow"></div>

                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="hero-content animate-up">
                        <span className="label text-accent" style={{ color: '#C6A75E' }}>Nigeria's Elite Security & Solar Provider</span>
                        <h1 style={{ color: '#FFFFFF' }}>
                            Power Your World.<br />
                            <span className="text-accent" style={{ color: '#C6A75E' }}>Protect What Matters.</span>
                        </h1>
                        <p>
                            Engineered for performance. Designed for resilience.
                            Deploy enterprise-grade solar V-power systems and intelligent security infrastructure across Nigeria.
                        </p>

                        <div className="hero-actions mt-4">
                            <a id="btn-hero-consultation" href="#book" className="btn btn-accent">
                                Book a Site Inspection <Zap size={18} />
                            </a>
                            <Link id="btn-hero-explore" to="/solar-security-products" className="btn btn-outline">
                                Explore Our Solutions <ChevronRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. AUTHORITY STRIP */}
            <section className="authority-strip">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item animate-up delay-1">
                            <div className="stat-num">10+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat-item animate-up delay-2">
                            <div className="stat-num">2.5k+</div>
                            <div className="stat-label">Systems Installed</div>
                        </div>
                        <div className="stat-item animate-up delay-1">
                            <div className="stat-num">500+</div>
                            <div className="stat-label">Enterprise Clients</div>
                        </div>
                        <div className="stat-item animate-up delay-2">
                            <div className="stat-num">36</div>
                            <div className="stat-label">States Covered</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DYNAMIC SOLAR V-POWER BUNDLES */}
            <section id="systems" className="section">
                <div className="container">
                    <div className="section-header text-center animate-up">
                        <span className="label" style={{ color: '#C6A75E' }}>Clean Energy Mastery</span>
                        <h2 className="h2-title" style={{ color: '#0B1C2D' }}>Premium Solar Power Systems in Nigeria</h2>
                        <p className="subtitle">Engineered for Stability. Designed for Performance.</p>
                    </div>

                    <div className="product-grid mt-4">
                        {featuredSolar.map((product) => (
                            <div key={product.id} className="glass-card product-card animate-up">
                                <div className="product-img-wrapper" style={{ margin: '-2.5rem -2.5rem 1.5rem -2.5rem', borderRadius: '12px 12px 0 0' }}>
                                    <img src={product.photoUrl} alt={product.name} />
                                </div>
                                <div className="product-content p-0" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <h3 style={{ fontSize: '1.25rem', color: '#0B1C2D', textTransform: 'uppercase' }}>{product.name}</h3>
                                    <div className="product-price" style={{ opacity: 0, animation: 'fadeInUp 1s ease forwards 0.5s', flexGrow: 1 }}>{product.priceStr}</div>
                                    <ul className="product-features mt-2">
                                        <li key="cap"><BatteryCharging size={16} /> {product.capacity} System</li>
                                        <li key="desc"><Zap size={16} /> {product.headline.split("–")[1] || "Built for Energy Independence"}</li>
                                    </ul>
                                    <Link id={`btn-solar-${product.id}`} to={`/products${product.slug}`} className="btn btn-accent w-full" style={{ width: '100%', marginTop: 'auto' }}>
                                        View Full Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 animate-up delay-2">
                        <Link to="/solar-security-products" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#0B1C2D' }}>
                            View Complete Catalog <ChevronRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. SMART SECURITY SECTION */}
            <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
                <div className="container">
                    <div className="split-layout">
                        <div className="split-image animate-up">
                            <img
                                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
                                alt="Smart Security Installation"
                            />
                        </div>

                        <div className="split-content animate-up delay-1">
                            <span className="label" style={{ color: '#C6A75E' }}>Intelligent Surveillance</span>
                            <h2 className="h2-title" style={{ color: '#0B1C2D' }}>See Everything. Miss Nothing.</h2>
                            <p className="subtitle mb-4">
                                We deploy AI-enabled surveillance and smart alarm systems that seamlessly integrate with your solar infrastructure.
                            </p>

                            <div className="feature-list mt-4">
                                <div className="feature-item">
                                    <div className="feature-icon"><Video size={24} /></div>
                                    <div className="feature-text">
                                        <h4 style={{ color: '#0B1C2D' }}>Solar-Powered CCTV</h4>
                                        <p>Continuous recording even during grid failure with 4G dual-lens integrated cameras.</p>
                                    </div>
                                </div>

                                <div className="feature-item mt-2">
                                    <div className="feature-icon"><Eye size={24} /></div>
                                    <div className="feature-text">
                                        <h4 style={{ color: '#0B1C2D' }}>Motion AI Tracking</h4>
                                        <p>Receive instant mobile alerts triggered by human shape detection algorithms.</p>
                                    </div>
                                </div>

                                <div className="mt-4 pt-2">
                                    <a id="btn-smart-security" href="#security" className="btn btn-outline" style={{ color: '#0B1C2D', borderColor: '#0B1C2D' }}>
                                        Request Security Audit
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ENTERPRISE INSTITUTIONAL */}
            <section className="section section-dark">
                <div className="container">
                    <div className="section-header text-center animate-up">
                        <span className="label text-accent">Corporate Infrastructure</span>
                        <h2>Enterprise Access Control</h2>
                        <p className="subtitle">Infrastructure-level protection for financial institutions, estates, and restrictive zones.</p>
                    </div>

                    <div className="spotlight-grid mt-4">
                        <div className="glass-card spotlight-card animate-up">
                            <Fingerprint className="spotlight-icon" size={32} />
                            <h4>Biometric Authentication</h4>
                            <p className="text-muted mt-2">Hikvision Face and Palm recognition systems with anti-spoofing technology and time attendance integration.</p>
                            <a id="btn-biometric" href="#enterprise" className="label mt-4" style={{ display: 'inline-flex', alignItems: 'center' }}>Explore Scanners <ChevronRight size={14} /></a>
                        </div>

                        <div className="glass-card spotlight-card animate-up delay-1">
                            <Users className="spotlight-icon" size={32} />
                            <h4>Turnstiles & Bollards</h4>
                            <p className="text-muted mt-2">Industrial full-height turnstiles and retractable bollards to forcefully manage pedestrian and vehicular flow.</p>
                            <a id="btn-turnstiles" href="#enterprise" className="label mt-4" style={{ display: 'inline-flex', alignItems: 'center' }}>View Bollards <ChevronRight size={14} /></a>
                        </div>

                        <div className="glass-card spotlight-card animate-up delay-2">
                            <Lock className="spotlight-icon" size={32} />
                            <h4>Gate Automation</h4>
                            <p className="text-muted mt-2">Centurion D10 Turbo SMART motors delivering unrivalled gate speed and anti-crush diagnostics.</p>
                            <a id="btn-gate-automation" href="#enterprise" className="label mt-4" style={{ display: 'inline-flex', alignItems: 'center' }}>View Motors <ChevronRight size={14} /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. WHY CHOOSE US */}
            <section className="section">
                <div className="container">
                    <div className="icon-grid">
                        <div className="icon-box animate-up">
                            <Activity size={40} />
                            <h4 style={{ color: '#0B1C2D' }}>Engineered Systems</h4>
                            <p className="text-muted">Load-calculated architectures tailored strictly to your power demands.</p>
                        </div>

                        <div className="icon-box animate-up delay-1">
                            <Award size={40} />
                            <h4 style={{ color: '#0B1C2D' }}>Certified Installers</h4>
                            <p className="text-muted">Deployed by a team of certified electrical and security engineers.</p>
                        </div>

                        <div className="icon-box animate-up delay-2">
                            <ShieldCheck size={40} />
                            <h4 style={{ color: '#0B1C2D' }}>Warranty Protection</h4>
                            <p className="text-muted">Secure your investment with comprehensive multi-year hardware guarantees.</p>
                        </div>

                        <div className="icon-box animate-up delay-1">
                            <Briefcase size={40} />
                            <h4 style={{ color: '#0B1C2D' }}>Ongoing Support</h4>
                            <p className="text-muted">Rapid-response SLAs for enterprise maintenance and system scaling.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <section className="section pt-0">
                <div className="container">
                    <div className="final-cta-block animate-up">
                        <div className="final-cta-content">
                            <h2>Take Control of Your Power & Protection Today</h2>
                            <p className="subtitle mb-4">
                                The future belongs to those who are prepared. Speak to our elite engineering team and secure your residential or commercial property.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
                                <a id="btn-final-consult" href="#consultation" className="btn btn-accent">
                                    Book Free Consultation <Zap size={18} />
                                </a>
                                <a id="btn-final-call" href="tel:+234" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center' }}>
                                    <PhoneCall size={18} style={{ marginRight: '0.5rem' }} /> Speak to an Engineer
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. SEO FOOTER */}
            <footer className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontFamily: 'Montserrat', fontWeight: 800 }}>Linos E' Security Ltd</h3>
                            <p className="text-muted" style={{ fontSize: '0.875rem', maxWidth: '250px' }}>
                                Nigeria’s elite authority in Solar V-Power Systems and Intelligent Security Infrastructure.
                            </p>
                        </div>

                        <div className="footer-col">
                            <h4>Solutions</h4>
                            <ul className="text-muted" style={{ fontSize: '0.875rem' }}>
                                <li><Link id="link-solar" to="/#systems">Solar Power Systems</Link></li>
                                <li><Link id="link-cctv" to="/cctv-surveillance">Smart CCTV Surveillance</Link></li>
                                <li><Link id="link-biometric" to="/biometric-access-control">Biometric Access Control</Link></li>
                                <li><Link id="link-turnstiles" to="/turnstiles-bollards">Turnstiles & Bollards</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul className="text-muted" style={{ fontSize: '0.875rem' }}>
                                <li><Link id="link-about" to="/about">About Us</Link></li>
                                <li><Link id="link-projects" to="/projects">Enterprise Projects</Link></li>
                                <li><Link id="link-blog" to="/knowledge-hub">Knowledge Hub</Link></li>
                                <li><Link id="link-contact" to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <ul className="text-muted" style={{ fontSize: '0.875rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Map size={14} /> Lagos, Nigeria</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><PhoneCall size={14} /> +234-806-942-3078</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div>
                            &copy; {new Date().getFullYear()} Linos E' Security Ltd. All Rights Reserved.
                        </div>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <Link id="link-privacy" to="/privacy">Privacy Policy</Link>
                            <Link id="link-terms" to="/terms">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
