import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, Tag, CheckCircle } from "lucide-react";
import Title from "./Title";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xlgaolkq");

  if (state.succeeded) {
    return (
      <section className="mt-20 pb-20" id="Contact">
        <Title title="Contactez-moi" />
        <div className="mt-10 max-w-2xl mx-auto text-center glass-card p-12 rounded-3xl border border-white/5 shadow-2xl">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex justify-center mb-6 text-accent"
          >
            <CheckCircle className="w-20 h-20" />
          </motion.div>
          <h3 className="text-3xl font-bold mb-4">Message envoyé !</h3>
          <p className="text-base-content/70 mb-8">
            Merci pour votre message. Je vous répondrai dans les plus brefs délais sur votre adresse mail.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn btn-accent btn-outline rounded-xl"
          >
            Envoyer un autre message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-20 pb-20" id="Contact">
      <Title title="Contactez-moi" />
      
      <div className="mt-10 max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
          {/* Décoration d'arrière-plan */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            {/* Infos de contact */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Parlons de votre projet</h3>
              <p className="text-base-content/70 mb-8 leading-relaxed">
                Vous avez une idée de projet complexe ou besoin d'un renfort technique ? 
                N'hésitez pas à m'envoyer un message. Je réponds généralement en moins de 24 heures.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex justify-center items-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-base-content/40">Email</p>
                    <p className="font-semibold">danieldedo182@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex justify-center items-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-base-content/40">Localisation</p>
                    <p className="font-semibold">Abomey-Calavi, Bénin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold flex items-center gap-2"><User className="w-4 h-4"/> Nom complet</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  className="input input-bordered w-full bg-base-200/50 focus:border-accent" 
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold flex items-center gap-2"><Mail className="w-4 h-4"/> Email</span>
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="john@example.com" 
                  className="input input-bordered w-full bg-base-200/50 focus:border-accent" 
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-error text-xs mt-1" />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold flex items-center gap-2"><Tag className="w-4 h-4"/> Objet</span>
                </label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Proposition de projet" 
                  className="input input-bordered w-full bg-base-200/50 focus:border-accent" 
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold flex items-center gap-2"><MessageSquare className="w-4 h-4"/> Message</span>
                </label>
                <textarea 
                  id="message"
                  name="message"
                  className="textarea textarea-bordered h-32 bg-base-200/50 focus:border-accent" 
                  placeholder="Décrivez votre besoin..."
                  required
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-error text-xs mt-1" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={state.submitting}
                className="btn btn-accent w-full mt-4 gap-2"
              >
                {state.submitting ? "Envoi en cours..." : "Envoyer le message"} <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
