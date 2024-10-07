import ProductFilter from "@/components/shopping-view/filter";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ArrowUpDownIcon } from "lucide-react";

function ShoppingListing() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 p-4 md:p-6">
            <ProductFilter />
            <div className="bg-background w-full rounded-lg shadow-sm">
                <div className="p-4 border-b flex gap-3 items-center justify-between">
                    <h2 className="text-lg font-extrabold mr-2">All Products</h2>
                    <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">10 Products</span>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                    <ArrowUpDownIcon className="h-4 w-4" />
                                    <span>Sort by</span>
                                </Button>
                            </DropdownMenuTrigger>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ShoppingListing;