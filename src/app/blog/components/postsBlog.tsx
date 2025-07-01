"use client";

import { useState, useMemo } from "react";
import { Search, Calendar, User, Tag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

// Données statiques des posts
const blogPosts = [
  {
    id: 1,
    title: "Les tendances du développement web en 2024",
    description:
      "Découvrez les dernières innovations et technologies qui façonnent l'avenir du développement web cette année.",
    date: "2024-01-15",
    author: "Marie Dubois",
    category: "Développement",
    readTime: "5 min",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
    popular: true,
  },
  {
    id: 2,
    title: "Guide complet pour débuter avec React",
    description:
      "Un tutoriel détaillé pour apprendre React depuis les bases jusqu'aux concepts avancés.",
    date: "2024-01-12",
    author: "Pierre Martin",
    category: "React",
    readTime: "8 min",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
    popular: true,
  },
  {
    id: 3,
    title: "L'intelligence artificielle dans le design UI/UX",
    description:
      "Comment l'IA révolutionne la création d'interfaces utilisateur et l'expérience utilisateur moderne.",
    date: "2024-01-10",
    author: "Sophie Laurent",
    category: "Design",
    readTime: "6 min",
    image:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    popular: true,
  },
  {
    id: 4,
    title: "Optimisation des performances avec Next.js",
    description:
      "Techniques avancées pour améliorer les performances de vos applications Next.js en production.",
    date: "2024-01-08",
    author: "Thomas Bernard",
    category: "Next.js",
    readTime: "7 min",
    image:
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
    popular: false,
  },
  {
    id: 5,
    title: "Sécurité des applications web modernes",
    description:
      "Les meilleures pratiques pour sécuriser vos applications web contre les vulnérabilités courantes.",
    date: "2024-01-05",
    author: "Anna Rousseau",
    category: "Sécurité",
    readTime: "9 min",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
    popular: false,
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox : Quand utiliser quoi ?",
    description:
      "Un guide pratique pour choisir entre CSS Grid et Flexbox selon vos besoins de mise en page.",
    date: "2024-01-03",
    author: "Julien Moreau",
    category: "CSS",
    readTime: "4 min",
    image:
      "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800",
    popular: false,
  },
];

const categories = [
  "Tous",
  "Développement",
  "React",
  "Design",
  "Next.js",
  "Sécurité",
  "CSS",
];

export const PostsBlog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Filtrer et trier les posts
  const filteredPosts = useMemo(() => {
    let filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "Tous" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Trier du plus récent au plus ancien
    return filtered.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, [searchTerm, selectedCategory]);

  const popularPosts = blogPosts.filter((post) => post.popular).slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles principaux */}
          <div className="lg:col-span-3">
            {/* <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#035987' }}>
                Derniers articles
              </h2>
              <p className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} trouvé{filteredPosts.length !== 1 ? 's' : ''}
              </p>
            </div> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow  group"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      // fill
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 rounded-tl-3xl rounded-br-3xl"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-gray-800 hover:bg-white">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="p-6 bg-white rounded-b-lg">
                    <h3 className="text-xl font-bold mb-3 text-[#035987]">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-cyan-600 mb-4 ">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Tag className="h-4 w-4" />
                        <span>{post.readTime} de lecture</span>
                      </div>
                    </div>
                    <p className=" line-clamp-3 text-base md:text-xl text-gray-600 mt-6 mb-2" >
                      {post.description}
                    </p>
                    <Link
                      href="/blog/components/article-blog"
                      className="text-base uppercase text-cyan-600"
                    >
                      Lire plus
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Aucun article trouvé
                </h3>
                <p className="text-gray-600">
                  Essayez de modifier vos critères de recherche.
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recherche */}
            <Card>
              <CardHeader>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#035987" }}
                >
                  Rechercher
                </h3>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Rechercher un article..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Catégories */}
            <Card>
              <CardHeader>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#035987" }}
                >
                  Catégories
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? "bg-cyan-50 text-cyan-600 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Posts populaires */}
            <Card>
              <CardHeader>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#035987" }}
                >
                  Articles populaires
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex space-x-3 group cursor-pointer"
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md group-hover:opacity-80 transition-opacity"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-cyan-600 mt-1">
                          {formatDate(post.date)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
