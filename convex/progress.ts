import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all progress records
export const getProgress = query({
  args: {},
  handler: async (ctx) => {
    const progress = await ctx.db.query("progress").collect();
    const progressMap: Record<string, boolean> = {};
    
    progress.forEach((record) => {
      progressMap[record.problemKey] = record.completed;
    });
    
    return progressMap;
  },
});

// Update progress for a specific problem
export const updateProgress = mutation({
  args: {
    problemKey: v.string(),
    completed: v.boolean(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("progress")
      .withIndex("by_problem_key", (q) => q.eq("problemKey", args.problemKey))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        completed: args.completed,
        completedAt: args.completed ? Date.now() : undefined,
      });
    } else {
      await ctx.db.insert("progress", {
        problemKey: args.problemKey,
        completed: args.completed,
        completedAt: args.completed ? Date.now() : undefined,
      });
    }

    return { success: true };
  },
});

// Get progress for a specific problem
export const getProblemProgress = query({
  args: {
    problemKey: v.string(),
  },
  handler: async (ctx, args) => {
    const progress = await ctx.db
      .query("progress")
      .withIndex("by_problem_key", (q) => q.eq("problemKey", args.problemKey))
      .first();

    return progress?.completed || false;
  },
});

// Get completion statistics
export const getStats = query({
  args: {},
  handler: async (ctx) => {
    const allProgress = await ctx.db.query("progress").collect();
    const completed = allProgress.filter(p => p.completed).length;
    const total = allProgress.length;
    
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  },
});