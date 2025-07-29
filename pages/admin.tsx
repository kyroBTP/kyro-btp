// pages/admin.tsx
import Head from "next/head";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin - Kyro BTP | Tableau de bord administrateur</title>
        <meta name="description" content="Espace administrateur Kyro BTP : gestion des utilisateurs, des réservations et des équipements. Contrôle total sur la plateforme." />
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
              <a href="/admin" className="text-primary font-medium border-b-2 border-primary pb-1">Admin</a>
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Espace Administrateur</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Gérez l’ensemble des réservations, des utilisateurs et du catalogue de la plateforme Kyro BTP.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Tableau de bord administrateur</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-lg">
                <i className="fas fa-users-cog text-3xl text-blue-600 mb-3"></i>
                <h3 className="text-xl font-bold text-primary mb-2">Gestion des utilisateurs</h3>
                <p className="text-gray-600">Voir, activer, désactiver ou supprimer des comptes.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-lg">
                <i className="fas fa-clipboard-list text-3xl text-primary mb-3"></i>
                <h3 className="text-xl font-bold text-primary mb-2">Gestion des réservations</h3>
                <p className="text-gray-600">Suivi des réservations en cours, confirmées ou annulées.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-lg">
                <i className="fas fa-boxes text-3xl text-orange mb-3"></i>
                <h3 className="text-xl font-bold text-primary mb-2">Gestion du catalogue</h3>
                <p className="text-gray-600">Ajouter, modifier ou supprimer des équipements.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center shadow hover:shadow-lg">
                <i className="fas fa-cogs text-3xl text-green-600 mb-3"></i>
                <h3 className="text-xl font-bold text-primary mb-2">Paramètres avancés</h3>
                <p className="text-gray-600">Modifier les commissions, gérer les accès et exporter des rapports.</p>
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
