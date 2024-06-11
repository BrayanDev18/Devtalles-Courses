import { GeneratePodcastProps } from "@/types";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { useUploadFiles } from "@xixixao/uploadstuff/react";

const useGeneratePodcast = (props: GeneratePodcastProps) => {
  const {
    setAudio,
    voiceType,
    voicePrompt,
    setAudioStorageId
  } = props

  const [isGenerating, setIsGenereting] = useState(false)

  const generateUploadUrl = useMutation(api.files.generateUploadUrl)

  const { startUpload} = useUploadFiles(generateUploadUrl)

  const getPodcastAudio = useAction(api.openai.generateAudioAction)

  const getAudioUrl = useMutation(api.podcast.getUrl)

  const handleGeneratePodcast = async () => {
    setIsGenereting(true)
    setAudio('')
    
    if (!voicePrompt) return setIsGenereting(false)
    
    try {
      const response = await getPodcastAudio({
        voice: voiceType,
        input: voicePrompt
      })

      const blob = new Blob([response], { type: 'audio/mpeg' })
      const fileName = `podcast-${uuidv4()}.mp3`
      const file = new File([blob], fileName, { type: 'audio/mpeg' })
      
      const uploaded = await startUpload([file])
      const storageId = (uploaded[0].response as any).storageId

      setAudioStorageId(storageId)

      const audioUrl = await getAudioUrl({ storageId })
      setAudio(audioUrl!)
      setIsGenereting(false)
      
    } catch (error) {
      console.log('Error generating podcast', error);
      setIsGenereting(false)
    }
    
  }

  return {
    isGenerating,
    handleGeneratePodcast,
  }
}

export const GeneratePodcast = (props: GeneratePodcastProps) => {
  const {
    audio,
    voiceType,
    setAudio,
    voicePrompt,
    setVoicePrompt,
    setAudioDuration,
    setAudioStorageId
  } = props;

  const { isGenerating, handleGeneratePodcast } = useGeneratePodcast(props)

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          AI Prompt to generate Podcast
        </Label>
        <Textarea
          rows={5}
          value={voicePrompt}
          onChange={(e) => setVoicePrompt(e.target.value)}
          placeholder="Provide text to generate audio"
          className="input-class font-light focus:outline-none focus:ring-offset-orange-1"
        />
      </div>

      <div className="mt-5 w-full max-w-[200px]">
        <Button
          type="submit"
          className="text-16 bg-orange-1 py-4 font-bold text-white-1"
        >
          {isGenerating ? (
            <>
              <Loader size={20} className="animate-spin mr-2" />
              Generating...
            </>
          ) : 'Generate'}
        </Button>
      </div>

      {audio && (
        <audio
          controls
          src={audio}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) => setAudioDuration(e.currentTarget.duration)}
        />
      )}
    </div>
  );
};

