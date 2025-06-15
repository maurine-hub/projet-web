"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Clock, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactSchema = z.object({
  firstName: z.string().min(1, 'Le prénom est requis'),
  lastName: z.string().min(1, 'Le nom est requis'),
  email: z.string().email('Adresse email invalide'),
  organization: z.string().optional(),
  subject: z.string().min(1, 'Le sujet est requis'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      subject: '',
      message: ''
    }
  });


  return (
    <div className="min-h-screen  py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Informations de contact */}
            <div className="p-8 text-gray-600">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="space-y-6">
                    {/* Adresse Washington DC */}
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Bureau de Washington, DC</h3>
                        <p className="text-gray-500 text-sm md:text-base">
                          Quantified Ventures LLC<br />
                          2519 Connecticut Ave NW, 2nd floor<br />
                          Washington, DC 20008
                        </p>
                      </div>
                    </div>

                    {/* Adresse Vermont */}
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">Bureau du Vermont</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                          Quantified Ventures LLC<br />
                          36 College Street, 4th Floor<br />
                          Montpelier, VT 05602
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-lg">Email</p>
                        <a href="mailto:info@quantifiedventures.com" className="text-blue-600 text-sm md:text-base">
                          info@quantifiedventures.com
                        </a>
                      </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-lg">Téléphone</p>
                        <a href="tel:+12027343712" className="text-gray-600 text-sm md:text-base">
                          (202) 734-3712
                        </a>
                      </div>
                    </div>

                    {/* Horaires */}
                    <div className="flex items-center space-x-4">
                      <Clock className="w-6 h-6 text-gray-500 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-lg">Horaires d'ouverture</p>
                        <p className="text-gray-600 text-sm md:text-base">8:30am - 5:30pm Eastern Time</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Formulaire */}
            <div className="p-8">              
              <Form {...form}>
                <div className="space-y-6">
                  
                  {/* Nom et Prénom */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-lg font-normal text-gray-400">
                            Prénom <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre prénom" 
                              className="px-4 py-6 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm md:text-lg font-normal text-gray-400">
                            Nom <span className="text-red-500">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Votre nom" 
                              className="px-4 py-6 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm md:text-lg font-normal text-gray-400">
                          Email <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="votre.email@example.com" 
                            className="px-4 py-6 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Organisation */}
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm md:text-lg font-normal text-gray-400">
                          Organisation
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Nom de votre organisation (optionnel)" 
                            className="px-4 py-6 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Sujet */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm md:text-lg font-normal text-gray-400">
                          Sujet <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Objet de votre message" 
                            className="px-4 py-6 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm md:text-lg font-normal text-gray-400">
                          Message <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre demande en détail..."
                            className="px-4 py-6 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                            rows={6}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    variant = "cyan"
                    size="lg"
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}