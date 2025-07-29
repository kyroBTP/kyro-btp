// pages/catalog.tsx
import Head from "next/head";

export default function Catalog() {
  return (
    <>
      <Head>
        <title>Catalogue - Kyro BTP | Location d’équipement BTP à Djibouti</title>
        <meta name="description" content="Découvrez notre catalogue d’engins, outillage, containers, et matériel BTP à louer à Djibouti. Réservation en ligne, livraison rapide." />
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
              <a href="/" className="text-gray-600 hover:text-primary transition-colors font-medium">Accueil</a>
              <a href="/catalog" className="text-primary font-medium border-b-2 border-primary pb-1">Recherche</a>
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

        {/* Hero / Search Bar */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Trouvez l'équipement parfait</h2>
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Que cherchez-vous ?</label>
                  <input type="text" placeholder="Bulldozer, excavatrice..." className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Toutes les villes</option>
                    <option value="djibouti-ville">Djibouti Ville</option>
                    <option value="ali-sabieh">Ali Sabieh</option>
                    <option value="tadjourah">Tadjourah</option>
                    <option value="obock">Obock</option>
                    <option value="dikhil">Dikhil</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date de début</label>
                  <input type="date" className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-primary text-white p-3 rounded-md font-medium hover:bg-slate-700 transition-colors">
                    <i className="fas fa-search mr-2"></i>
                    Rechercher
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Categories */}
        <section className="py-4 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              <span className="text-sm text-gray-600">Catégories populaires :</span>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors">
                Engins lourds
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors">
                Outillage
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-primary hover:text-white hover:border-primary transition-colors">
                Containers
              </button>
            </div>
          </div>
        </section>

        {/* Equipment list (statique pour l’instant, version Supabase possible plus tard) */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12">Nos catégories d'équipements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <img src="https://picsum.photos/300/200?random=10" alt="Engins lourds" className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Engins lourds</h3>
                  <p className="text-gray-600 mb-4">Bulldozers, excavatrices, chargeuses, grues mobiles</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">45+ équipements</span>
                    <span className="text-primary font-medium">À partir de 650 DJF/jour</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <img src="https://picsum.photos/300/200?random=11" alt="Outillage" className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Outillage</h3>
                  <p className="text-gray-600 mb-4">Marteaux-piqueurs, perceuses, scies, compresseurs</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">120+ équipements</span>
                    <span className="text-primary font-medium">À partir de 50 DJF/jour</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <img src="https://picsum.photos/300/200?random=12" alt="Containers" className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Containers</h3>
                  <p className="text-gray-600 mb-4">Bureaux mobiles, stockage, sanitaires</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">35+ équipements</span>
                    <span className="text-primary font-medium">À partir de 200 DJF/jour</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                <img src="https://picsum.photos/300/200?random=13" alt="Matériel spécialisé" className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Matériel spécialisé</h3>
                  <p className="text-gray-600 mb-4">Nacelles, compacteurs, pompes, générateurs</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">50+ équipements</span>
                    <span className="text-primary font-medium">À partir de 150 DJF/jour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-white mt-12 p-6 border-t border-gray-200 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Kyro BTP – Tous droits réservés.
        </footer>
      </main>
    </>
  );
}
