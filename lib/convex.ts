import { ConvexHttpClient } from "convex/browser";

//create a client for server-side request

export const getConvexClient = () => {
    if(!process.env.NEXT_PUBLIC_CONVEX_URL) {
        throw new Error("Convex URL is not defined in environment variables");
    }
  return new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  
  
}

export default getConvexClient
