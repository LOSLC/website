import { Button } from "@/components/ui/button";
import { Pagination } from "@/types/post";
import { router } from "@inertiajs/react";

export default function Paginator({ pagination }: { pagination: Pagination }) {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {pagination.links.map((link, index) => (
        <Button
          key={index}
          disabled={!link.url}
          onClick={() => router.visit(link.url || "#")}
          className={`px-4 py-2 ${
            link.active
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          } ${!link.url ? "cursor-default opacity-50" : ""}`}
        >
          {link.label.replace("&laquo;", "«").replace("&raquo;", "»")}
        </Button>
      ))}
    </div>
  );
}
