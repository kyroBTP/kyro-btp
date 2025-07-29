// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyro BTP - Location de Matériel BTP à Djibouti | Plateforme Professionnelle</title>
        <meta name="description" content="Kyro BTP, la plateforme de référence pour la location de matériel BTP à Djibouti. Engins lourds, outillage, containers. Réservation en ligne sécurisée." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white p-2 rounded-md">
                <i className="fas fa-hard-hat text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-primary">Kyro BTP</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-primary font-medium border-b-2 border-primary pb-1">Accueil</a>
              <a href="/catalog" className="text-gray-600 hover:text-primary transition-colors font-medium">Recherche</a>
              <a href="/how-it-works" className="text-gray-600 hover:text-primary transition-colors font-medium">Comment ça marche</a>
              <a href="/pro-space" className="text-gray-600 hover:text-primary transition-colors font-medium">Espace Pro</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/login" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-slate-700 transition-colors font-medium">
                Connexion
              </a>
              <button className="md:hidden text-gray-700">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-slate-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Location de matériel BTP à <span className="text-orange">Djibouti</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  La plateforme de référence pour louer des équipements de construction professionnels. Réservation en ligne, livraison rapide, support 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a className="bg-orange text-white px-8 py-4 rounded-md font-semibold hover:bg-orange-600 transition-colors text-lg" href="/catalog">
                    Parcourir le catalogue
                  </a>
                  <a className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-primary transition-colors text-lg" href="/how-it-works">
                    Comment ça marche
                  </a>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange">250+</div>
                    <div className="text-slate-300">Équipements</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange">500+</div>
                    <div className="text-slate-300">Clients satisfaits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange">24/7</div>
                    <div className="text-slate-300">Support</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://picsum.photos/600/400?random=1"
                  alt="Équipements BTP Kyro - Bulldozer et engins de chantier"
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-shield-alt text-2xl text-green-500"></i>
                    <div>
                      <div className="font-bold">100% Sécurisé</div>
                      <div className="text-sm text-gray-600">Assurance incluse</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ... Tu peux continuer à coller ici le reste de la page d'accueil : sections recherche, catégories, équipements populaires, comment ça marche, avis clients, etc. ... */}

        <footer className="bg-white mt-12 p-6 border-t border-gray-200 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Kyro BTP – Tous droits réservés.
        </footer>
      </main>
    </>
  );
}
