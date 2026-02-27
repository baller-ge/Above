import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, ShoppingCart, Heart, Sparkles, Shield, Zap } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle.jsx'
import './App.css'

import W1 from './assets/W1.jpg'
import W2 from './assets/W2.jpg'
import W3 from './assets/W3.jpg'
import W4 from './assets/W4.jpg'
import W5 from './assets/W5.jpg'
import W6 from './assets/W6.jpg'
import W7 from './assets/W7.jpg'

// Import product images
import heroImage from './assets/DFT-4.jpg'
import stylingGel from './assets/DFT-3.jpg'
// import productShowcase1 from './assets/DFT-5.jpg'
// import productShowcase2 from './assets/DFT-7.jpg'
// import productShowcase3 from './assets/DFT-6.jpg'
// import productShowcase4 from './assets/DFT-8.jpg'
// import modelImage1 from './assets/DFT-13.jpg'
// import modelImage2 from './assets/DFT-15.jpg'
// import modelImage3 from './assets/DFT-20.jpg'
import modelImage4 from './assets/DFT-19.jpg'
import productLine1 from './assets/DFT-1.jpg'
import productLine2 from './assets/DFT-2.jpg'
import productImage1 from './assets/IMG_6741.JPG'
import productImage2 from './assets/IMG_6742.JPG'
import productImage3 from './assets/IMG_6739.JPG'
import productImage4 from './assets/IMG_6744.JPG'
import galleryImage1 from './assets/IMG_6721.JPG'
// import galleryImage2 from './assets/IMG_6720.JPG'
// import galleryImage3 from './assets/IMG_6722.JPG'
// import galleryImage4 from './assets/IMG_6724.JPG'
import galleryImage5 from './assets/IMG_6725.JPG'
import galleryImage6 from './assets/IMG_6731.JPG'
import galleryImage7 from './assets/IMG_6736.JPG'
// import galleryImage8 from './assets/IMG_6732.JPG'
import galleryImage9 from './assets/IMG_6733.JPG'

function App() {
  // Shared scroll function for all Shop buttons
  const scrollToProducts = (e) => {
    if (e) e.preventDefault();
    console.log('Shop button clicked');
    const productsSection = document.getElementById('products');
    if (productsSection) {
      const yOffset = -96; // 96px for nav + gap
      const y = productsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const products = [
    {
      id: 1,
      name: "SPRITZ Extra Hold",
      category: "Hair Styling",
      description: "Reversion resistant styling spray for long-lasting hold",
      image: productLine1,
      features: ["Extra Hold", "450ml & 200ml", "Pro-Vitamin B5"]
    },
    {
      id: 2,
      name: "Avocado Nutrients Hair Styling Gel",
      category: "Hair Treatment",
      description: "Makes your hair soft, shiny, and elastic with natural avocado nutrients",
      image: stylingGel,
      features: ["Natural Avocado", "500ml", "Shine & Elasticity"]
    },
    {
      id: 3,
      name: "Hair Color Cream Collection",
      category: "Hair Color",
      description: "Professional hair color cream in multiple shades",
      image: productLine2,
      features: ["Multiple Shades", "Long Lasting", "Professional Quality"]
    },
    {
      id: 4,
      name: "Oil Sheen Hairspray",
      category: "Hair Treatment",
      description: "Lasting sheen with pro-vitamin B5 to nourish and protect",
      image: productLine1,
      features: ["Pro-Vitamin B5", "Lasting Sheen", "Heat Protection"]
    },
    {
      id: 5,
      name: "Curl Define Cream",
      category: "Hair Styling",
      description: "Defines and enhances natural curls with long-lasting hold and frizz control",
      image: productImage1,
      features: ["Curl Definition", "Anti-Frizz", "24hr Hold"]
    },
    {
      id: 6,
      name: "Argan Oil Serum",
      category: "Hair Treatment",
      description: "Luxurious argan oil serum for deep nourishment and brilliant shine",
      image: productImage2,
      features: ["Moroccan Argan Oil", "Instant Shine", "Heat Protection"]
    },
    {
      id: 7,
      name: "Volume Boost Mousse",
      category: "Hair Styling",
      description: "Lightweight mousse that adds incredible volume and body to fine hair",
      image: productImage3,
      features: ["Volume Boost", "Weightless Formula", "All-Day Hold"]
    },
    {
      id: 8,
      name: "Keratin Repair Mask",
      category: "Hair Treatment",
      description: "Intensive keratin treatment mask for damaged hair restoration and strength",
      image: productImage4,
      features: ["Keratin Infused", "Damage Repair", "Deep Conditioning"]
    },
    {
      id: 9,
      name: "SPRITZ Extra Hold",
      category: "Hair Styling",
      description: "Designing and holding spray for extra hold and reversion resistance",
      image: W4,
      features: ["Extra Hold", "473ml", "Reversion Resistant"]
    },
    {
      id: 10,
      name: "Above Nature Black Hair Color Cream",
      category: "Hair Color",
      description: "Long lasting color for softness and lightness",
      image: W1,
      features: ["Long Lasting Color", "Softness & Lightness", "60ml x 2"]
    },
    {
      id: 11,
      name: "Oil Sheen Hairspray",
      category: "Hair Treatment",
      description: "Lasting sheen with pro-vitamin B5 to nourish and protect",
      image: W2,
      features: ["Pro-Vitamin B5", "Hair Shine Conditioner", "200ml"]
    },
    {
      id: 12,
      name: "Hair Colour Spray",
      category: "Hair Color",
      description: "Funky coloured hair spray for groovy styles",
      image: W3,
      features: ["Funky Colour", "200ml", "Groovy Girlz"]
    },
    {
      id: 13,
      name: "Ultra Hold Hair Mousse",
      category: "Hair Styling",
      description: "Lasting sheen with pro-vitamin B5 and extra conditioning",
      image: W7,
      features: ["Ultra Hold", "200ml", "Extra Conditioning"]
    },
    {
      id: 14,
      name: "Avocado Nutrients Hair Styling Gel",
      category: "Hair Treatment",
      description: "Soft, shiny, and elastic hair styling gel with natural avocado nutrients",
      image: W6,
      features: ["Natural Avocado", "500ml", "Shine & Elasticity"]
    },
    {
      id: 15,
      name: "Hair Color Cream",
      category: "Hair Color",
      description: "Long lasting color hair cream",
      image: W5,
      features: ["Long Lasting Color", "30ml x 2"]
    }
  ]

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Professional Quality",
      description: "Salon-grade formulations for professional results at home"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Long-Lasting Hold",
      description: "Advanced formulas that keep your style intact all day"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Heat Protection",
      description: "Pro-vitamin B5 enriched products protect against heat damage"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hair Nourishment",
      description: "Natural ingredients like avocado nutrients for healthy hair"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold above-text-gradient">ABOVE</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors">Home</a>
              <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="above-btn-primary" onClick={scrollToProducts}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="above-hero-bg min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white" style={{ pointerEvents: 'auto', position: 'relative', zIndex: 1000, background: 'rgba(255,0,0,0.1)' }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Elevate Your Hair
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-white">
                  ABOVE Ordinary
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Professional hair care products that deliver salon-quality results. 
                Transform your hair with our premium styling and treatment solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 above-hero-btns">
              <button className="above-btn-primary text-lg px-8 py-4 flex items-center justify-center" onClick={scrollToProducts} tabIndex={0} role="button" type="button">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop Collection
              </button>
                <a href="#lifestyle" className="above-btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-pink-600 flex items-center justify-center rounded-lg transition-colors duration-200" style={{ borderWidth: 1 }}>
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative" style={{ pointerEvents: 'auto' }}>
              <img 
                src={heroImage} 
                alt="ABOVE Hair Care Products" 
                className="w-full h-auto rounded-2xl above-shadow-pink"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 above-text-gradient">
              Why Choose ABOVE?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our professionally formulated hair care products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="above-card text-center">
                <CardContent className="pt-6">
                  <div className="text-pink-600 mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 above-text-gradient">
              Our Product Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of professional hair care products designed to meet all your styling needs
            </p>
          </div>
          <div className="above-product-grid">
            {products.map((product) => (
              <Card key={product.id} className="above-card above-hover-scale">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-pink-600 text-white">
                    {product.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-pink-600 border-pink-600">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section id="lifestyle" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 above-text-gradient">
              Real Results, Real People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how ABOVE products transform hair and boost confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[modelImage4, galleryImage1, galleryImage5, galleryImage6, galleryImage7, galleryImage9].map((image, index) => (
              <div key={index} className="relative group above-hover-scale">
                <img 
                  src={image} 
                  alt={`ABOVE Hair Transformation ${index + 1}`}
                  className="w-full aspect-[4/5] object-cover rounded-2xl above-shadow-pink"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm">"Amazing results!"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 above-text-gradient">
              About ABOVE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Born from a passion for excellence, ABOVE redefines hair care with professional-grade products 
              that celebrate individuality and empower confidence.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="above-glass-card p-12 rounded-3xl">
              <div className="text-pink-600 mb-6">
                <Sparkles className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4 above-text-gradient">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To empower individuals to express their unique beauty through innovative, high-quality 
                hair care solutions that deliver salon-professional results at home.
              </p>
            </div>
            <div className="above-glass-card p-12 rounded-3xl">
              <div className="text-pink-600 mb-6">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4 above-text-gradient">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the global leader in premium hair care, setting new standards for quality, 
                innovation, and customer satisfaction in the beauty industry.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h3 className="text-3xl font-bold text-center mb-12 above-text-gradient">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Shield className="w-8 h-8" />, title: "Quality First", desc: "Uncompromising standards in every product" },
                { icon: <Heart className="w-8 h-8" />, title: "Customer Focus", desc: "Your satisfaction drives everything we do" },
                { icon: <Sparkles className="w-8 h-8" />, title: "Innovation", desc: "Continuously advancing hair care technology" }
              ].map((value, index) => (
                <div key={index} className="above-glass-card p-8 rounded-2xl text-center">
                  <div className="text-pink-600 mb-4 flex justify-center">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 above-text-gradient">Ready to Experience ABOVE?</h3>
            <p className="text-xl text-gray-600 mb-8">Join thousands who trust ABOVE for their hair care needs</p>
            <Button className="above-btn-primary text-lg px-8 py-4" onClick={scrollToProducts}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Explore Products
            </Button>
          </div>
        </div>
      </section>

          {/* Contact Section */}
          <section id="contact" className="py-24 scroll-mt-32 bg-pink-50 relative">
            <div className="absolute inset-0 bg-pink-50 dark:bg-gradient-to-bl from-[#271a27] to-[#221a1e] pointer-events-none"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 above-text-gradient text-center dark:text-pink-200">
                Contact Us
              </h2>
              <div className="max-w-3xl mx-auto text-pink-900 dark:text-pink-200 text-lg space-y-6">
                <div>
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">HEAD OFFICE:</h3>
                  <p>
                    ABOVE PLAZA, International Centre For Commerce, Trade Fair, Complex, Badagry Exp. Way, Lagos Nigeria P.O. Box 2290 Festac Town, Lagos
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">BRANCH:</h3>
                  <p>Plot 2, Assembly Close, Satellite Town, Lagos.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">E-mail:</h3>
                  <p>
                    <a href="mailto:dubasches_above@yahoo.com" className="text-pink-700 dark:text-pink-300 hover:underline">
                      dubasches_above@yahoo.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-pink-700 dark:text-pink-300 mb-1">Tel:</h3>
                  <p>
                    <a href="tel:08033283807" className="hover:underline">08033283807</a> | 
                    <a href="tel:08028899441" className="hover:underline">08028899441</a> | 
                    <a href="tel:08033060892" className="hover:underline">08033060892</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

      {/* Real Results Gallery */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 above-text-gradient">
              Real Results Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how ABOVE products transform hair and boost confidence in real life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: galleryImage1, caption: "Curl Define Cream in action", user: "Sarah M." },
              { image: galleryImage2, caption: "Argan Oil Serum results", user: "Michael T." },
              { image: galleryImage3, caption: "Volume Boost Mousse transformation", user: "Emma L." },
              { image: galleryImage4, caption: "Keratin Repair Mask recovery", user: "David R." },
              { image: galleryImage5, caption: "Before & after styling", user: "Jessica W." },
              { image: galleryImage6, caption: "Professional results at home", user: "Alex K." },
              { image: galleryImage7, caption: "Everyday confidence boost", user: "Lisa P." }
            ].map((item, index) => (
              <div key={index} className="above-glass-card rounded-2xl overflow-hidden above-hover-scale">
                <div className="relative group">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{item.caption}</p>
                      <p className="text-xs opacity-75">- {item.user}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 above-hero-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their hair game with ABOVE products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center above-cta-btns">
              <button className="above-btn-primary text-lg px-8 py-4 bg-white text-pink-600 hover:bg-gray-100 flex items-center justify-center" onClick={scrollToProducts} tabIndex={0} role="button" type="button">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Shop Now
              </button>
              <a href="#products" className="above-btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-pink-600 flex items-center justify-center rounded-lg transition-colors duration-200" style={{ borderWidth: 1 }}>
                Get Exclusive Offers
              </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold above-text-gradient mb-4">ABOVE</h3>
              <p className="text-gray-400 mb-4">
                Premium hair care products for the modern woman. Elevate your hair above ordinary.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#products" className="hover:text-pink-400 transition-colors">Hair Styling</a></li>
                <li><a href="#products" className="hover:text-pink-400 transition-colors">Hair Treatment</a></li>
                <li><a href="#products" className="hover:text-pink-400 transition-colors">Hair Color</a></li>
                <li><a href="#products" className="hover:text-pink-400 transition-colors">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-pink-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-6 text-gray-400">
                <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none" strokeWidth={0}>
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.6a9.06 9.06 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12A12.8 12.8 0 013 4.1a4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.63 4.43 4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9.06 9.06 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.42-.02-.63A9.22 9.22 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-pink-400 transition-colors" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none" strokeWidth={0}>
                    <path d="M10.97 15.5l5.5-3.5-5.5-3.5v7zM21.75 12c0 1.5-.12 2.75-.37 3.75a3.75 3.75 0 01-3.75 3.75c-1.5.25-2.75.37-3.75.37s-2.75-.12-3.75-.37a3.75 3.75 0 01-3.75-3.75c-.25-1.5-.37-2.75-.37-3.75s.12-2.75.37-3.75a3.75 3.75 0 013.75-3.75c1.5-.25 2.75-.37 3.75-.37s2.75.12 3.75.37a3.75 3.75 0 013.75 3.75c.25 1.5.37 2.75.37 3.75z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ABOVE Hair Care. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

