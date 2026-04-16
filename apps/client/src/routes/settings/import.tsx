import { createFileRoute } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/settings/import")({
  component: RouteComponent,
});

function RouteComponent() {
  const importOptions = [
    {
      name: "Gmail",
      logo: "gmail",
      description: "Import your emails and contacts from Gmail easily.",
    },
    {
      name: "Outlook",
      logo: "outlook",
      description: "Seamlessly import your emails and contacts from Outlook.",
    },
    {
      name: "Yahoo!",
      logo: "yahoo",
      description: "Quickly import your emails and contacts from Yahoo Mail.",
    },
  ];

  const tabs = [
    {
      name: "gmail",
      content: [
        "Log in to your Gmail account.",
        "Click on the gear icon in the top right corner and select 'See all settings'.",
        "Navigate to the 'Forwarding and POP/IMAP' tab.",
        "In the 'Forwarding' section, click on 'Add a forwarding address'.",
        "Enter the email address you want to forward your emails to and click 'Next'.",
        "A confirmation email will be sent to the forwarding address. Open that email and click on the confirmation link.",
        "Return to the Gmail settings and refresh the page.",
        "In the 'Forwarding' section, select 'Forward a copy of incoming mail to' and choose the forwarding address from the dropdown.",
        "Choose what you want Gmail to do with the forwarded messages (keep Gmail's copy in the inbox, archive Gmail's copy, etc.).",
        "Click 'Save Changes' at the bottom of the page.",
      ],
    },
    {
      name: "outlook",
      content: [
        "Log in to your Outlook account.",
        "Click on the gear icon in the top right corner and select 'View all Outlook settings'.",
        "Navigate to the 'Mail' section and then select 'Forwarding'.",
        "Check the box for 'Enable forwarding'.",
        "Enter the email address you want to forward your emails to.",
        "Choose whether to keep a copy of forwarded messages in your Outlook inbox.",
        "Click 'Save' to apply the changes.",
      ],
    },
  ];

  return (
    <div className="w-full h-full">
      <div>
        <h1 className="text-lg font-semibold">One time import</h1>
        <h2 className="text-muted-foreground text-sm">
          Securely import your emails from Gmail or other webmail clients.
        </h2>
        <div className="py-4 border-b flex flex-col gap-2">
          {importOptions.map((option, key) => {
            return (
              <div
                key={key}
                className="flex gap-2 justify-between items-center h-20 p-3 rounded-md text-sm"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="border rounded-lg p-2 w-10 h-auto">
                    <AvatarImage src={`/logo/${option.logo}-logo.png`} />
                    <AvatarFallback>{option.name}</AvatarFallback>
                  </Avatar>

                  <div>
                    <h1 className="font-semibold">{option.name}</h1>
                    <h2 className="text-muted-foreground text-xs">
                      {option.description}
                    </h2>
                  </div>
                </div>
                <Button variant={"outline"}>import</Button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full py-4">
        <div className="flex flex-col gap-7 relative w-full h-full">
          <div>
            <h1 className="text-base font-semibold">Auto-forwarding</h1>
            <h2 className="text-muted-foreground text-sm">
              Securely import your emails from Gmail or other webmail clients.
            </h2>
          </div>
          <Tabs defaultValue="gmail" className="">
            <TabsList className="absolute right-0 top-0">
              <TabsTrigger value="gmail">Gmail</TabsTrigger>
              <TabsTrigger value="outlook">Outlook</TabsTrigger>
              <TabsTrigger value="yahoo">Yahoo!</TabsTrigger>
            </TabsList>
            <div className="w-full text-muted-foreground text-xs">
              {tabs.map((tab) => {
                return (
                  <TabsContent className="flex flex-col gap-2" value={tab.name}>
                    {tab.content.map((steps, i) => (
                      <li className="list-none flex gap-2 items-center-safe">
                        <span className="bg-secondary h-4 w-4 flex items-center justify-center">
                          {i + 1}
                        </span>
                        {steps}
                      </li>
                    ))}
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
