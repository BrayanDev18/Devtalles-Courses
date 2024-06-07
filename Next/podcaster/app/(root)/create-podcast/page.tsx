'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { CreatePodcastVoice } from './Voice';
import { PodcastInput } from '@/components/podcast/input';
import { GeneratePodcast } from '@/components/podcast/generate';
import { GenerateThumbnail } from '@/components/podcast/thumbnail';
import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import { Id } from '@/convex/_generated/dataModel';

const formSchema = z.object({
  podcastTitle: z.string().min(2, {
    message: 'El título del podcast debe tener al menos 2 caracteres.',
  }),
  podcastDescription: z.string().min(2, {
    message: 'La descripción del podcast debe tener al menos 2 caracteres.',
  })
});

export default function CreatePodcast() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePromt, setImagePromt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(null);

  const [audioUrl, setAudioUrl] = useState('');
  const [audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(null);
  const [audioDuration, setAudioDuration] = useState(0);

  const [voiceType, setVoiceType] = useState('');
  const [voicePrompt, setVoicePrompt] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: '',
      podcastDescription: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="mt-10 flex flex-col">
      <h1 className="text-20 font-bold text-white-1">Crear Podcast</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-12 flex w-full flex-col"
        >
          <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10">
            <PodcastInput
              label="Title"
              name="podcastTitle"
              control={form.control}
              placeholder="BRD Pro Podcast"
            />
            
            <CreatePodcastVoice
              voiceType={voiceType}
              setVoiceType={setVoiceType}
            />

            <FormField
              control={form.control}
              name="podcastDescription"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2.5">
                  <FormLabel className="text-16 font-bold text-white-1">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Escribe una breve descripción del podcast"
                      className="input-class focus-visible:ring-offset-orange-1"
                    />
                  </FormControl>
                  <FormMessage className="text-white" />
                </FormItem>
              )}
            />
          </div>

          <div className='flex flex-col pt-10'>
            <GeneratePodcast
              audio={audioUrl}
              voiceType={voiceType}
              setAudio={setAudioUrl}
              voicePrompt={voicePrompt}
              setVoicePrompt={setVoicePrompt}
              setAudioDuration={setAudioDuration}
              setAudioStorageId={setAudioStorageId}
            />

            <GenerateThumbnail />

            <div className='mt-10 w-full'>
              <Button
                type='submit'
                className='text-16 w-full bg-orange-1 py-4 font-semibold text-white-1 transition-all duration-500 hover:bg-black-1'
              >
                {isSubmitting
                  ? (
                    <>
                      <Loader size={20} className='animate-spin mr-2'/>
                      loading...
                    </>
                  )
                  : 'Submit & Publish Podcast'
                }
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}
