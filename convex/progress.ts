import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all progress records for a user
export const getProgress = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const progress = await ctx.db
      .query("progress")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
      
    const progressMap: Record<string, boolean> = {};
    const revisionMap: Record<string, boolean> = {};
    const notesMap: Record<string, string> = {};
    
    progress.forEach((record) => {
      progressMap[record.problemKey] = record.completed;
      revisionMap[record.problemKey] = record.markedForRevision || false;
      notesMap[record.problemKey] = record.notes || "";
    });
    
    return {
      progress: progressMap,
      revision: revisionMap,
      notes: notesMap,
    };
  },
});

// Update progress for a specific problem
export const updateProgress = mutation({
  args: {
    userId: v.id("users"),
    problemKey: v.string(),
    completed: v.boolean(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_and_problem", (q) => 
        q.eq("userId", args.userId).eq("problemKey", args.problemKey))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        completed: args.completed,
        completedAt: args.completed ? Date.now() : undefined,
      });
    } else {
      await ctx.db.insert("progress", {
        userId: args.userId,
        problemKey: args.problemKey,
        completed: args.completed,
        completedAt: args.completed ? Date.now() : undefined,
        markedForRevision: false,
        notes: "",
      });
    }

    return { success: true };
  },
});

// Toggle revision marking for a problem
export const toggleRevision = mutation({
  args: {
    userId: v.id("users"),
    problemKey: v.string(),
    markedForRevision: v.boolean(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_and_problem", (q) => 
        q.eq("userId", args.userId).eq("problemKey", args.problemKey))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        markedForRevision: args.markedForRevision,
      });
    } else {
      await ctx.db.insert("progress", {
        userId: args.userId,
        problemKey: args.problemKey,
        completed: false,
        markedForRevision: args.markedForRevision,
        notes: "",
      });
    }

    return { success: true };
  },
});

// Update notes for a problem
export const updateNotes = mutation({
  args: {
    userId: v.id("users"),
    problemKey: v.string(),
    notes: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_and_problem", (q) => 
        q.eq("userId", args.userId).eq("problemKey", args.problemKey))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        notes: args.notes,
      });
    } else {
      await ctx.db.insert("progress", {
        userId: args.userId,
        problemKey: args.problemKey,
        completed: false,
        markedForRevision: false,
        notes: args.notes,
      });
    }

    return { success: true };
  },
});

// Get problems marked for revision
export const getRevisionProblems = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const revisionProblems = await ctx.db
      .query("progress")
      .withIndex("by_user_revision", (q) => 
        q.eq("userId", args.userId).eq("markedForRevision", true))
      .collect();

    return revisionProblems.map(problem => ({
      problemKey: problem.problemKey,
      completed: problem.completed,
      notes: problem.notes || "",
    }));
  },
});

// Get progress for a specific problem
export const getProblemProgress = query({
  args: {
    userId: v.id("users"),
    problemKey: v.string(),
  },
  handler: async (ctx, args) => {
    const progress = await ctx.db
      .query("progress")
      .withIndex("by_user_and_problem", (q) => 
        q.eq("userId", args.userId).eq("problemKey", args.problemKey))
      .first();

    return progress?.completed || false;
  },
});

// Get completion statistics
export const getStats = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const allProgress = await ctx.db
      .query("progress")
      .withIndex("by_user", (q) => q.eq("userId", args.userId))
      .collect();
      
    const completed = allProgress.filter(p => p.completed).length;
    const revision = allProgress.filter(p => p.markedForRevision).length;
    const total = allProgress.length;
    
    return {
      completed,
      revision,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  },
});