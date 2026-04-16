import { createFileRoute } from "@tanstack/react-router";
import {
  SelectDateFormat,
  SelectFontFamily,
  SelectTimeFormat,
} from "@/components/select-components";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/settings/appearance")({
  component: RouteComponent,
});

function RouteComponent() {
  const themes = [
    {
      name: "dark",
    },
    {
      name: "light",
    },
    {
      name: "system",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div>
        <h1 className="text-lg font-semibold">Theme</h1>
        <h2 className="text-muted-foreground text-sm">
          Change the appearance of Skiff.
        </h2>
        <div className="py-4 border-b">
          <ThemeToggle themes={themes} />
        </div>
      </div>
      <div className="w-full pb-4 border-b flex justify-between">
        <div>
          <h1 className="text-sm font-semibold">Time format</h1>
          <h2 className="text-muted-foreground text-sm">
            How to display time.
          </h2>
        </div>
        <SelectTimeFormat />
      </div>
      <div className="w-full pb-4 border-b flex justify-between">
        <div>
          <h1 className="text-sm font-semibold">Date format</h1>
          <h2 className="text-muted-foreground text-sm">
            How to display dates.
          </h2>
        </div>

        <SelectDateFormat />
      </div>
      <div className="w-full pb-4 border-b flex justify-between">
        <div>
          <h1 className="text-sm font-semibold">Font family</h1>
          <h2 className="text-muted-foreground text-sm">Choose your font.</h2>
        </div>

        <SelectFontFamily />
      </div>
    </div>
  );
}
