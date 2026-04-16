import { DialogTitle } from "@radix-ui/react-dialog";
import { Outlet, useNavigate } from "@tanstack/react-router";
import { SettingSidebar } from "@/components/setting-sidebar";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SidebarProvider } from "@/components/ui/sidebar";
export function SettingLayout() {
  const navigate = useNavigate();
  const handleCloseDialog = (open: boolean) => {
    if (!open) {
      navigate("/mail");
    }
  };
  return (
    <Dialog defaultOpen={true} onOpenChange={handleCloseDialog}>
      <DialogTitle className="hidden">Setting dialog</DialogTitle>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[80vw] md:max-w-[90vw] lg:max-w-[1000px] max-h-[80vh] p-0 flex flex-col overflow-scroll"
      >
        <SidebarProvider>
          <SettingSidebar />
          <main className="p-6 h-full overflow-scroll w-full">
            <Outlet />
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
