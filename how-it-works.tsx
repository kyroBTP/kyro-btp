// pages/how-it-works.tsx
import Head from "next/head";

export default function HowItWorks() {
  return (
    <>
      <Head>
        <title>Comment ça marche - Kyro BTP | Guide de location d'équipement BTP</title>
        <meta name="description" content="Découvrez comment louer facilement du matériel BTP sur Kyro BTP. Guide étape par étape, conseils pratiques et FAQ pour vos projets de construction." />
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
              <a href="/how-it-works" className="text-primary font-medium border-b-2 border-primary pb-1">Comment ça marche</a>
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
        <section className="bg-gradient-to-br from-primary to-slate-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Comment ça marche</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Louer du matériel BTP n'a jamais été aussi simple. Suivez notre guide en 4 étapes 
              pour démarrer votre projet en toute sérénité.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 bg-white" id="steps">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Le processus en 4 étapes simples</h2>
            <div className="space-y-16">
              {/* Étape 1 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Recherchez et comparez</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Utilisez notre moteur de recherche avancé pour trouver l'équipement parfait. 
                    Filtrez par catégorie, localisation, prix et disponibilité. Comparez les 
                    caractéristiques techniques et les avis clients.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Plus de 250 équipements disponibles
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Filtres avancés pour affiner votre recherche
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Photos détaillées et fiches techniques complètes
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Avis et notes des utilisateurs précédents
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <img 
                    src="https://picsum.photos/600/400?random=50" 
                    alt="Interface de recherche Kyro BTP" 
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Étape 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://picsum.photos/600/400?random=51" 
                    alt="Processus de réservation en ligne" 
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Réservez en ligne</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Sélectionnez vos dates, choisissez vos options et finalisez votre réservation 
                    en quelques clics. Notre système de paiement sécurisé accepte les cartes 
                    bancaires et le Mobile Money.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Réservation instantanée 24/7
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Paiement sécurisé SSL
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Confirmation immédiate par SMS et email
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Modification possible jusqu'à 24h avant
                    </li>
                  </ul>
                </div>
              </div>
              {/* Étape 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Livraison et formation</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Nous livrons l'équipement directement sur votre chantier à l'heure convenue. 
                    Notre équipe technique assure la formation de vos opérateurs et vérifie 
                    le bon fonctionnement de l'équipement.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Livraison ponctuelle garantie
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Formation opérateur incluse
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Vérification sécurité et fonctionnement
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Documentation technique fournie
                    </li>
                  </ul>
                </div>
                <div className="order-1 lg:order-2">
                  <img 
                    src="https://picsum.photos/600/400?random=52" 
                    alt="Livraison d'équipement BTP sur chantier" 
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Étape 4 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src="https://picsum.photos/600/400?random=53" 
                    alt="Support technique 24/7" 
                    className="rounded-lg shadow-lg w-full"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mr-6">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Support et récupération</h3>
                  </div>
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    Bénéficiez de notre support technique 24/7 pendant toute la durée de location. 
                    À la fin de votre projet, nous récupérons l'équipement et effectuons 
                    l'état des lieux final.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Support technique 24/7
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Intervention rapide en cas de panne
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      Récupération planifiée
                    </li>
                    <li className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-3"></i>
                      État des lieux transparent
                    </li>
                  </ul>
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
