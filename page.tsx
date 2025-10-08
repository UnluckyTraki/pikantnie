import Link from "next/link"
import { Heart, Flame, MapPin, Users, Shield, Clock } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  const profiles = [
    {
      name: "Anna",
      age: 26,
      location: "Warszawa",
      bio: "Uwielbiam podróże, dobrą kawę i długie spacery. Szukam kogoś do wspólnych przygód.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop&crop=faces",
    },
    {
      name: "Kasia",
      age: 24,
      location: "Kraków",
      bio: "Miłośniczka sztuki i dobrego jedzenia. Chcę poznać kogoś wyjątkowego.",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=300&fit=crop&crop=faces",
    },
    {
      name: "Magda",
      age: 28,
      location: "Wrocław",
      bio: "Aktywna, pełna energii i zawsze uśmiechnięta. Szukam partnera do życia.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=faces",
    },
    {
      name: "Ola",
      age: 25,
      location: "Gdańsk",
      bio: "Romantyczna dusza z pasją do muzyki. Chcę znaleźć prawdziwą miłość.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=faces",
    },
    {
      name: "Natalia",
      age: 27,
      location: "Poznań",
      bio: "Spontaniczna i otwarta na nowe doświadczenia. Poznajmy się!",
      image: "https://images.unsplash.com/photo-1529626455594-472988babdf9?w=400&h=300&fit=crop&crop=faces",
    },
    {
      name: "Julia",
      age: 23,
      location: "Łódź",
      bio: "Młoda, energiczna i gotowa na przygodę. Może to będziesz Ty?",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop&crop=faces",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/30">
              <Flame className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Pikantnie<span className="text-rose-600">24</span>
            </h1>
          </div>

          {/* Hero Content */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Znajdź swoją <span className="text-rose-600">drugą połówkę</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Poznaj nowych ludzi i zacznij swoją przygodę z miłością. Dołącz do tysięcy szczęśliwych par!
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Link
                href="https://radarkobiet.pl/link/2821/31651691"
                className="px-8 py-4 bg-gradient-to-r from-rose-600 to-red-700 text-white rounded-full font-semibold shadow-lg shadow-rose-500/40 hover:shadow-xl hover:shadow-rose-500/60 hover:-translate-y-0.5 transition-all"
              >
                Zarejestruj się
              </Link>
              <Link
                href="https://radarkobiet.pl/link/2821/31651691"
                className="px-8 py-4 bg-white text-rose-600 border-2 border-rose-600 rounded-full font-semibold hover:bg-rose-600 hover:text-white transition-all"
              >
                Dołącz teraz
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-600 mb-2">2M+</div>
                <div className="text-gray-600">Użytkowników</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-600 mb-2">500K+</div>
                <div className="text-gray-600">Dopasowań</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-rose-600 mb-2">98%</div>
                <div className="text-gray-600">Zadowolenia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Poznaj nowych ludzi</h2>
            <p className="text-lg text-gray-600">
              Setki atrakcyjnych osób czeka na Ciebie. Rozpocznij rozmowę już teraz!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative w-full h-80">
                  <Image src={profile.image || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {profile.name}
                      <span className="text-gray-600">, {profile.age}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-sm mb-4">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>{profile.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">{profile.bio}</p>
                  <Link
                    href="https://radarkobiet.pl/link/2821/31651691"
                    className="block w-full py-3 bg-gradient-to-r from-rose-600 to-red-700 text-white text-center rounded-full font-semibold shadow-md hover:shadow-lg transition-all"
                  >
                    Wyślij wiadomość
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://radarkobiet.pl/link/2821/31651691"
              className="inline-block px-8 py-4 bg-gradient-to-r from-rose-600 to-red-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Zobacz więcej profili
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-pink-50 to-rose-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dlaczego Pikantnie24?</h2>
            <p className="text-lg text-gray-600">Dołącz do najlepszego portalu randkowego w Polsce</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tysiące profili</h3>
              <p className="text-gray-600 text-sm">
                Znajdź kogoś idealnego dla Ciebie spośród tysięcy zweryfikowanych użytkowników
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bezpieczeństwo</h3>
              <p className="text-gray-600 text-sm">Twoje dane są chronione najwyższymi standardami bezpieczeństwa</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prawdziwe dopasowania</h3>
              <p className="text-gray-600 text-sm">Nasz algorytm pomoże Ci znaleźć idealnego partnera</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dostępne 24/7</h3>
              <p className="text-gray-600 text-sm">Poznawaj nowych ludzi o każdej porze dnia i nocy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-rose-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Gotowy na nową przygodę?</h2>
          <p className="text-xl mb-8 opacity-95">
            Dołącz do tysięcy szczęśliwych par. Rejestracja jest całkowicie darmowa!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="https://radarkobiet.pl/link/2821/31651691"
              className="px-8 py-4 bg-white text-rose-600 rounded-full font-semibold hover:bg-gray-50 transition-all"
            >
              Zarejestruj się teraz
            </Link>
            <Link
              href="https://radarkobiet.pl/link/2821/31651691"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-rose-600 transition-all"
            >
              Znajdź dopasowanie
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white text-center text-gray-600 text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-rose-600" aria-hidden="true" />
            <span className="font-semibold text-gray-900">
              Pikantnie<span className="text-rose-600">24</span>
            </span>
          </div>
          <p>&copy; 2025 Pikantnie24. Wszystkie prawa zastrzeżone.</p>
          <p className="mt-2">Tylko dla osób pełnoletnich (18+)</p>
        </div>
      </footer>
    </div>
  )
}
