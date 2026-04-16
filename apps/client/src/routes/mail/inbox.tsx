import { createFileRoute } from "@tanstack/react-router";
import InboxIcon from "@/assets/icons/Inbox.icon";

export const Route = createFileRoute("/mail/inbox")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div>
        <InboxIcon className="w-60" />
        <h2 className="text-[#374151] text-2xl font-semibold w-full text-right">
          Your inbox is empty
        </h2>
      </div>
    </section>
  );
}
