import withAuth from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/checkout",
  },
});

export const config = {
  matcher: ["/checkout/:path*"],
};
