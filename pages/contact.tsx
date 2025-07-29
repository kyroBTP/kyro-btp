// pages/contact.tsx
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact et Support - Kyro BTP | Aide et assistance 24/7</title>
        <meta name="description" content="Contactez l'équipe Kyro BTP pour toute question sur la location d'équipement BTP. Support 24/7, chat en direct, centre d'aide et FAQ." />
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

        {/* Hero Contact */}
        <section className="bg-gradient-to-br from-primary to-slate-700 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Comment pouvons-nous vous aider ?</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Notre équipe est disponible 24/7 pour répondre à toutes vos questions sur la location d'équipement BTP
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Choisissez votre mode de contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Téléphone */}
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Téléphone</h3>
                <p className="text-gray-600 mb-4">Support immédiat 24/7</p>
                <div className="font-bold text-primary">+253 77 12 34 56</div>
                <div className="text-sm text-gray-500 mt-2">Gratuit depuis Djibouti</div>
              </div>
              {/* Live Chat */}
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Chat en direct</h3>
                <p className="text-gray-600 mb-4">Réponse en moins de 2 minutes</p>
                <div className="font-bold text-green-600">En ligne</div>
                <div className="text-sm text-gray-500 mt-2">Disponible maintenant</div>
              </div>
              {/* Email */}
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-orange text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Réponse sous 2h</p>
                <div className="font-bold text-primary">contact@kyrobtp.dj</div>
                <div className="text-sm text-gray-500 mt-2">Support technique</div>
              </div>
              {/* WhatsApp */}
              <div className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fab fa-whatsapp text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Messages et photos</p>
                <div className="font-bold text-primary">+253 77 12 34 57</div>
                <div className="text-sm text-gray-500 mt-2">Business WhatsApp</div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulaire de contact */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Envoyez-nous un message</h2>
                <p className="text-gray-600">Notre équipe vous répondra dans les plus brefs délais</p>
              </div>
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                    <input type="text" required className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                    <input type="text" required className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" required className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input type="tel" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                  <select required className="w-full p-3 border border-gray-300 rounded-md">
                    <option value="">Sélectionnez un sujet</option>
                    <option value="reservation">Question sur une réservation</option>
                    <option value="equipment">Information sur un équipement</option>
                    <option value="technical">Support technique</option>
                    <option value="billing">Facturation et paiement</option>
                    <option value="partnership">Devenir partenaire</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea rows={6} required className="w-full p-3 border border-gray-300 rounded-md"></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-3 rounded-md font-bold hover:bg-slate-700 transition-colors">
                  Envoyer le message
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
