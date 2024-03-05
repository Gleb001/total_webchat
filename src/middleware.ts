// imports ================================================== //
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// constants ================================================ //
const allowedRoutes = new Set(
    [
        "/"
    ]
);
const serviceRoutes = [
    "_next",
    "api"
];

// helpers ================================================== //
function isContinueMiddlewareChain(request: NextRequest) {

    const { pathname } = request.nextUrl;

    const isServiceRoute = (
        pathname
            .split("/")
            .some((item) => serviceRoutes.includes(item))
    );
    const isAllowedRoute = allowedRoutes.has(pathname);
    const hasToken = request.cookies.get("token")?.value;

    return (
        isServiceRoute ||
        isAllowedRoute ||
        hasToken
    );

}

// main ===================================================== //
function middleware(request: NextRequest) {

    if (isContinueMiddlewareChain(request)) {
        return NextResponse.next();
    } else {
        return NextResponse.redirect(
            new URL("/", request.url)
        );
    }

}

// exports ================================================== //
export default middleware;