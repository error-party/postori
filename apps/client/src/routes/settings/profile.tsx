import { Avatar } from "@radix-ui/react-avatar";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";

export const Route = createFileRoute("/settings/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const colors = [
    {
      value: "#c1121f",
    },
    {
      value: "#219ebc",
    },
    {
      value: "#023047",
    },
    {
      value: "#ffb703",
    },
    {
      value: "#fb8500",
    },
  ];

  const [bannerColor, setBannerColor] = useState(colors[0].value);
  return (
    <div className="w-full h-full text-sm flex flex-col gap-4">
      <div className="flex flex-col gap-2 items-end">
        <div
          className="w-full h-26 rounded-xl relative"
          style={{ backgroundColor: bannerColor }}
        >
          <Avatar className="absolute -bottom-[40%] left-[5%] border-4 border-background w-26 h-26 rounded-xl bg-black" />
        </div>
        <RadioGroup defaultValue={colors[0].value} className="flex gap-1">
          {colors.map((color: any) => {
            const isChecked = bannerColor === color.value;
            return (
              <div
                className="cursor-pointer p-1 w-10 h-10 flex items-center justify-center rounded-full border-2 transition duration-200 bg-transparent"
                style={{
                  borderColor: isChecked ? color.value : "transparent",
                }}
              >
                <div
                  key={color.value}
                  onClick={() => setBannerColor(color.value)}
                  className="w-full h-full relative overflow-hidden rounded-full border border-transparent transition duration-200"
                  aria-checked={isChecked}
                  style={{
                    backgroundColor: color.value,
                  }}
                ></div>
              </div>
            );
          })}
        </RadioGroup>
      </div>
      <div className="mt-4 w-full pb-4 border-b flex justify-between">
        <div>
          <h1 className=" font-semibold">Display name</h1>
          <h2 className="text-muted-foreground ">
            The name other in your workspace see you as.
          </h2>
        </div>
        <Input placeholder="Display name" className="w-40" />
      </div>
      <div className="w-full pb-4 border-b flex justify-between">
        <div>
          <h1 className=" font-semibold">Recovery email</h1>
          <h2 className="text-muted-foreground ">
            This is the email used to recover your account.
          </h2>
        </div>
        <Button className="" variant={"outline"}>
          Add
        </Button>
      </div>
      <div className="w-full pb-4 flex justify-between">
        <div>
          <h1 className=" font-semibold text-destructive">Delete account</h1>
          <h2 className="text-muted-foreground ">
            Erase all your content and data.
          </h2>
        </div>
        <Button className="text-destructive" variant={"outline"}>
          Delete
        </Button>
      </div>
    </div>
  );
}
