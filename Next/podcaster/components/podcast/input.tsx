import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface PodcastInputProps<T extends FieldValues> {
  label: string;
  name:  Path<T>;
  control: Control<T>;
  placeholder: string;
}

export const PodcastInput = <T extends FieldValues>(props: PodcastInputProps<T>) => {
  const { control, name, label, placeholder } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col gap-2.5">
          <FormLabel className="text-16 font-bold text-white-1">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder={placeholder}
              className="input-class focus-visible:ring-offset-orange-1"
            />
          </FormControl>
          <FormMessage className="text-white" />
        </FormItem>
      )}
    />
  );
};
