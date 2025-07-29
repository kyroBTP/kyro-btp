// pages/pro-space.tsx
import Head from "next/head";

export default function ProSpace() {
  return (
    <>
      <Head>
        <title>Espace Pro - Kyro BTP | Gestion de vos équipements</title>
        <meta name="description" content="Espace professionnel Kyro BTP : proposez votre matériel, gérez vos annonces et suivez vos locations." />
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
              <a href="/pro-space" className="text-primary font-medium border-b-2 border-primary pb-1">Espace Pro</a>
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

        <section className="bg-gradient-to-br from-primary to-slate-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Espace Propriétaire / Gestionnaire</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Gérez vos équipements, vos locations et suivez vos revenus en temps réel sur Kyro BTP.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Fonctionnalités de l’Espace Pro</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-lg">
                <i className="fas fa-plus-circle text-3xl text-orange mb-3"></i>
                <h3 className="text-xl font-bold text-primary mb-2">Ajouter un équipement</h3>
                <p className="text-gray-600">Proposez vos machines, containers ou outillages à la location en quelques clics.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-lg">
                <i className="fas fa-clipboard-list text-3xl text-primary mb-3"></i>
                <h3 className="text-xl font-bold text-primary mb-2">Gérer vos annonces</h3>
                <p className="text-gray-600">Modifiez, suspendez ou supprimez vos annonces à tout moment depuis votre tableau de bord.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-lg">
                <i className="fas fa-calendar-check text-3xl text-green-600 mb-3"></i>
                <h3 className="text-xl font-bold text-primary mb-2">Suivre vos locations</h3>
                <p className="text-gray-600">Consultez l’historique et le calendrier de vos locations à venir ou passées.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-lg">
                <i className="fas fa-chart-line text-3xl text-blue-600 mb-3"></i>
                <h3 className="text-xl font-bold text-primary mb-2">Suivi des paiements</h3>
                <p className="text-gray-600">Visualisez vos revenus générés et les paiements en attente ou reçus.</p>
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
