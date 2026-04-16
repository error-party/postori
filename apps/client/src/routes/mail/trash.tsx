import { createFileRoute } from "@tanstack/react-router";
import TrashIcon from "@/assets/icons/Trash.icon";

export const Route = createFileRoute("/mail/trash")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div>
        <TrashIcon className="w-60" />

        <h2 className="text-[#374151] text-2xl font-semibold w-full text-center mt-4">
          Nothing in trash
        </h2>
      </div>
    </section>
  );
}
