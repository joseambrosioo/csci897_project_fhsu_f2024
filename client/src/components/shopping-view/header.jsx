import { HousePlug, Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

function MenuItems() {
    return (
        <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
            {
                shoppingViewHeaderMenuItems.map(menuItem => (
                    <Link
                        className="text-sm font-medium"
                        key={menuItem.id}
                        to={menuItem.path}
                    >
                        {menuItem.label}
                    </Link>
                ))
            }
        </nav >
    );
}

function HeaderRightContent() {
    return <div className="flex lg:items-center lg:flex-row flex-col gap-4">
        <Button variant="outline" size="icon">
            <ShoppingCart className="w-6 h-6" />
            <span className="sr-only">User cart</span>
        </Button>
        <DropdownMenu >
            <DropdownMenuTrigger asChild>

            </DropdownMenuTrigger>
        </DropdownMenu>
    </div>
}

function ShoppingHeader() {

    const { isAuthenticated } = useSelector(state => state.auth)

    return <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="flex h-16 item-center justify-between px-4 md:px-6">
            <Link to="/shop/home" className="flex items-center gap-2">
                <HousePlug className="h-6 w-6" />
                <span>E-commerce</span>
            </Link>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle header menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-xs">
                    <MenuItems />
                </SheetContent>
            </Sheet>
            <div className="hidden lg:block">
                <MenuItems />
            </div>
            {
                isAuthenticated ? (
                    < div >
                        <HeaderRightContent />
                    </div>
                ) : null
            }
        </div>
    </header >
}

export default ShoppingHeader;