import { api } from "@/convex/_generated/api"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Id } from "@/convex/_generated/dataModel"
import { useQuery } from "convex/react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useStorageUrl(storageId: Id<"_storage"> | undefined) {
return useQuery(api.storage.getUrl, storageId? { storageId}: "skip")
}
