
import ContactForm from "../components/contact/contactForm"
import ContactSection from "../components/contact/contactsSections" 
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#141414] pt-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <header className="text-center mb-12 max-w-3xl">
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Fale comigo
          </h1>
          <p className="text-xl text-white/70">
            Estou sempre aberto a novas oportunidades, parcerias e conversas sobre tecnologia.
          </p>
        </header>

  
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 items-start">
          
          <ContactSection />
          <ContactForm />

        </div>
      </div>
    </main>
  )
}