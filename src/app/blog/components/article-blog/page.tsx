"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Share2,
  Heart,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Données d'exemple pour la démonstration
const sampleArticle = {
  id: 1,
  title: "Les Meilleures Pratiques pour l'Apprentissage en Ligne",
  subtitle:
    "Comment maximiser votre potentiel d'apprentissage dans un environnement numérique",
  content: `
    <p>L'apprentissage en ligne est devenu une composante essentielle de l'éducation moderne. Avec l'évolution technologique, les méthodes d'enseignement se sont transformées pour offrir plus de flexibilité et d'accessibilité aux apprenants du monde entier.</p>
    
    <h2>1. Créer un environnement d'apprentissage optimal</h2>
    <p>Un espace de travail dédié est crucial pour maintenir la concentration. Assurez-vous d'avoir un éclairage adéquat, une chaise confortable et tous les outils nécessaires à portée de main.</p>
    
    <h2>2. Établir une routine d'étude</h2>
    <p>La régularité est la clé du succès. Définissez des horaires fixes pour vos sessions d'apprentissage et respectez-les scrupuleusement. Cette discipline vous aidera à développer de bonnes habitudes d'étude.</p>
    
    <h2>3. Utiliser les outils technologiques</h2>
    <p>Profitez des nombreux outils disponibles : applications de prise de notes, calendriers numériques, plateformes de collaboration, et bien d'autres. Ces outils peuvent considérablement améliorer votre productivité.</p>
    
    <h2>4. Participer activement aux discussions</h2>
    <p>N'hésitez pas à participer aux forums de discussion, aux sessions de chat en direct et aux groupes d'étude virtuels. L'interaction avec d'autres apprenants enrichit votre expérience d'apprentissage.</p>
    
    <h2>5. Prendre des pauses régulières</h2>
    <p>Le cerveau a besoin de temps pour assimiler les informations. Planifiez des pauses régulières pour éviter la fatigue mentale et maintenir un niveau de concentration optimal.</p>
    
    <p>En conclusion, l'apprentissage en ligne offre de nombreuses opportunités, mais il nécessite une approche structurée et disciplinée. En appliquant ces conseils, vous maximiserez vos chances de réussite dans votre parcours éducatif.</p>
  `,
  author: {
    name: "Dr. Marie Dubois",
    avatar:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    bio: "Experte en pédagogie numérique et formatrice certifiée",
  },
  publishedAt: "2024-03-15",
  readTime: 8,
  tags: ["Éducation", "Apprentissage", "Technologie", "Conseils"],
  likes: 142,
  comments: 23,
  category: "Éducation",
  featuredImage:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop",
};

const relatedArticles = [
  {
    id: 2,
    title: "Comment organiser son temps d'étude",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
    readTime: 5,
    publishedAt: "2024-03-10",
  },
  {
    id: 3,
    title: "Les outils indispensables pour étudier",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
    readTime: 6,
    publishedAt: "2024-03-08",
  },
  {
    id: 4,
    title: "Motivation et apprentissage : les clés du succès",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop",
    readTime: 7,
    publishedAt: "2024-03-05",
  },
];

export default function ArticlePage() {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(sampleArticle.likes);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: sampleArticle.title,
        text: sampleArticle.subtitle,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papiers !");
    }
  };

  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen md:mt-40 w-full">
      {/* Barre de progression de lecture */}
      <div className="fixed top-0 left-0 w-full h-1 bg-cyan-500  ">
        <div
          className="h-full bg-blue-600 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="  shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button className="flex items-center text-gray-600  hover:text-gray-900 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Retour aux articles
          </button>
        </div>
      </nav>

      {/* Contenu principal */}
      <main className="w-full md:max-w-10/12 mx-auto px-4 py-8">
        {/* En-tête de l'article */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-10 rounded-full">
              {sampleArticle.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-90 mb-4 leading-tight">
            {sampleArticle.title}
          </h1>

          <p className="text-xl text-gray-60 mb-6 leading-relaxed">
            {sampleArticle.subtitle}
          </p>

          {/* Métadonnées de l'article */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-50 mb-8">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {formatDate(sampleArticle.publishedAt)}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {sampleArticle.readTime} min de lecture
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {sampleArticle.author.name}
            </div>
          </div>

          {/* Image mise en avant */}
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
            <img
              src={sampleArticle.featuredImage || "github.com/shadcn.png"}
              alt={sampleArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Contenu de l'article */}
          <article className="lg:col-span-3">
            <div className="bg-white  rounded-xl shadow-sm border border-gray-20 p-8">
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: sampleArticle.content }}
              />

              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {sampleArticle.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-10 text-gray-70 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  < Button
                    onClick={handleLike}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      isLiked
                        ? "bg-red-100 text-red-60"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                    />
                    {likesCount}
                  </Button>

                  <Button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600  rounded-lg hover:bg-gray-20 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    {sampleArticle.comments}
                  </Button>
                </div>

                <Button
                variant="cyan"
                  onClick={handleShare}
                >
                  <Share2 className="w-5 h-5" />
                  Partager
                </Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Profil de l'auteur */}
            <Card className=" py-6 px-1">
              <h3 className="text-lg text-center font-semibold text-gray-900  mb-4">
                À propos de l'auteur
              </h3>
              <CardContent className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-2">
                  <img
                    src={sampleArticle.author.avatar}
                    alt={sampleArticle.author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <h4 className="font-medium text-gray-90">
                    {sampleArticle.author.name}
                  </h4>
                </div>
                <p className="text-sm text-gray-60 mt-1">
                  {sampleArticle.author.bio}
                </p>
              </CardContent>
            </Card>

            {/* Articles connexes */}
            <Card className="py-6 px-1">
              <h3 className="text-lg text-center font-semibold text-gray-900 mb-2">
                Articles connexes
              </h3>
              <CardContent className="space-y-4">
                {relatedArticles.map((article) => (
                  <div key={article.id} className="group cursor-pointer">
                    <div className="flex gap-3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-90 group-hover:text-blue-60 transition-colors line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-50">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
