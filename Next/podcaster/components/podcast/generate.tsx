import { GeneratePodcastProps } from "@/types";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

const useGeneratePodcast = (props: GeneratePodcastProps) => {



  return {
    isGenerating: false,
    handleGeneratePodcast: () => {},
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

  const {isGenerating, handleGeneratePodcast} = useGeneratePodcast(props)

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
              <Loader size={20} className="animate-spin mr-2"/>
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

