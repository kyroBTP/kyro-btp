// pages/product/[id].tsx
import Head from "next/head";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  // Plus tard, tu pourras charger les infos réelles de Supabase ici selon l'id
  // Pour l'instant on affiche une fiche exemple

  return (
    <>
      <Head>
        <title>Fiche produit | Kyro BTP</title>
        <meta name="description" content="Détails de l'équipement à louer - Kyro BTP Djibouti" />
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

        {/* Product details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://picsum.photos/600/400?random=21"
                  alt="Image de l'équipement"
                  className="rounded-lg w-full h-80 object-cover mb-6"
                  loading="lazy"
                />
                {/* Si tu veux une galerie, tu pourras ajouter plusieurs images ici plus tard */}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Nom de l'équipement (ex : Bulldozer CAT D6)</h2>
                <p className="text-lg text-gray-600 mb-2">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Localisation : Djibouti Ville
                </p>
                <p className="mb-6 text-gray-700">
                  Description détaillée de l'équipement, ses avantages, caractéristiques techniques, etc.
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary">850 DJF</span>
                  <span className="text-gray-600 ml-2">/jour</span>
                </div>
                <button
                  className="bg-orange text-white px-6 py-3 rounded-md font-bold hover:bg-orange-600 transition-colors"
                  onClick={() => router.push('/reservation')}
                >
                  Réserver cet équipement
                </button>
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
