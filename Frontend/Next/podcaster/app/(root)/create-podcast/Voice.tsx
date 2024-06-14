import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface VoiceProps {
  voiceType: string;
  setVoiceType: Dispatch<SetStateAction<string>>;
}

export const CreatePodcastVoice = ({ voiceType, setVoiceType}: VoiceProps) => {
  const voiceOptions = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx']

  return (
    <div className="flex flex-col gap-2.5">
      <Label className="text-16 font-semibold text-white-1">
        Select AI Voice
      </Label>
      <Select onValueChange={setVoiceType}>
        <SelectTrigger className={cn('text-16 border-none bg-black-1 text-gray-1 focus-visible:ring-offset-orange-1')}>
          <SelectValue
            placeholder="Select AI Voice"
            className="placeholder:text-gray-1"
          />
        </SelectTrigger>
        <SelectContent className='text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-orange-1'>
          {voiceOptions.map((voice) => (
            <SelectItem
              key={voice}
              value={voice}
              className='capitalize focus:bg-orange-1'
            >
              {voice}
            </SelectItem>
          ))}
        </SelectContent>
        {voiceType && (
          <audio
            src={`/${voiceType}.mp3`}
            autoPlay
            className="hidden"
          />
        )}
      </Select>
    </div>
  )
};

