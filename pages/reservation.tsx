// pages/reservation.tsx
import Head from "next/head";

export default function Reservation() {
  return (
    <>
      <Head>
        <title>Réservation - Kyro BTP | Finaliser votre location d’équipement</title>
        <meta name="description" content="Finalisez votre réservation d’équipement BTP sur Kyro BTP. Processus sécurisé, paiement en ligne, confirmation immédiate." />
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

        {/* Reservation Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow border">
              <h2 className="text-2xl font-bold text-primary mb-6">Réserver un équipement</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Équipement</label>
                  <input type="text" placeholder="Nom de l'équipement" className="w-full p-3 border border-gray-300 rounded-md" disabled />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date de début</label>
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date de fin</label>
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom du client</label>
                  <input type="text" placeholder="Votre nom complet" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" placeholder="Votre email" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" placeholder="+253 77 XX XX XX" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <button type="submit" className="w-full bg-orange text-white py-3 rounded-md font-bold hover:bg-orange-600 transition-colors">
                  Valider la réservation
                </button>
              </form>
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
