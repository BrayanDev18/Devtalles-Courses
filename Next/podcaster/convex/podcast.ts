import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const getUrl = mutation({
  args: { storageId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
})