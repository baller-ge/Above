import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, ShoppingCart, Heart, Sparkles, Shield, Zap } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle.jsx'
import './App.css'

// Import product images
import heroImage from './assets/DFT-4.jpg'
import stylingGel from './assets/DFT-3.jpg'
import productShowcase1 from './assets/DFT-5.jpg'
import productShowcase2 from './assets/DFT-7.jpg'
import productShowcase3 from './assets/DFT-6.jpg'
import productShowcase4 from './assets/DFT-8.jpg'
import modelImage1 from './assets/DFT-13.jpg'
import modelImage2 from './assets/DFT-15.jpg'
import modelImage3 from './assets/DFT-20.jpg'
import modelImage4 from './assets/DFT-19.jpg'
import productLine1 from './assets/DFT-1.jpg'
import productLine2 from './assets/DFT-2.jpg'

function App() {
  const products = [
    {
      id: 1,
      name: "SPRITZ Extra Hold",
      category: "Hair Styling",
      description: "Reversion resistant styling spray for long-lasting hold",
      image: productLine1,
      features: ["Extra Hold", "450ml & 200ml", "Pro-Vitamin B5"],
      price: "$24.99"
    },
    {
      id: 2,
      name: "Avocado Nutrients Hair Styling Gel",
      category: "Hair Treatment",
      description: "Makes your hair soft, shiny, and elastic with natural avocado nutrients",
      image: stylingGel,
      features: ["Natural Avocado", "500ml", "Shine & Elasticity"],
      price: "$19.99"
    },
    {
      id: 3,
      name: "Hair Color Cream Collection",
      category: "Hair Color",
      description: "Professional hair color cream in multiple shades",
      image: productLine2,
      features: ["Multiple Shades", "Long Lasting", "Professional Quality"],
      price: "$29.99"
    },
    {
      id: 4,
      name: "Oil Sheen Hairspray",
      category: "Hair Treatment",
      description: "Lasting sheen with pro-vitamin B5 to nourish and protect",
      image: productLine1,
      features: ["Pro-Vitamin B5", "Lasting Sheen", "Heat Protection"],
      price: "$22.99"
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
              <Button className="above-btn-primary">
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
            <div className="text-white above-fade-in-up">
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
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="above-btn-primary text-lg px-8 py-4">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop Collection
                </Button>
                <Button size="lg" variant="outline" className="above-btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-pink-600">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative above-float">
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
      <section id="products" className="py-20 bg-white">
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
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-600">{product.price}</span>
                    <Button className="above-btn-primary">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 above-text-gradient">
              Real Results, Real People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how ABOVE products transform hair and boost confidence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[modelImage1, modelImage2, modelImage3, modelImage4].map((image, index) => (
              <div key={index} className="relative group above-hover-scale">
                <img 
                  src={image} 
                  alt={`ABOVE Hair Transformation ${index + 1}`}
                  className="w-full h-80 object-cover rounded-2xl above-shadow-pink"
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

      {/* CTA Section */}
      <section className="py-20 above-hero-bg">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their hair game with ABOVE products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="above-btn-primary text-lg px-8 py-4 bg-white text-pink-600 hover:bg-gray-100">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="above-btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-pink-600">
              Get Exclusive Offers
            </Button>
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
                <li><a href="#" className="hover:text-pink-400 transition-colors">Hair Styling</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Hair Treatment</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Hair Color</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">YouTube</a></li>
              </ul>
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

