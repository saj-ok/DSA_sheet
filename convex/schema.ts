import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    createdAt: v.number(),
  }).index("by_email", ["email"]),
  
  progress: defineTable({
    userId: v.id("users"),
    problemKey: v.string(), // Format: "categoryName-problemId"
    completed: v.boolean(),
    completedAt: v.optional(v.number()),
    markedForRevision: v.optional(v.boolean()),
    notes: v.optional(v.string()),
  })
    .index("by_user_and_problem", ["userId", "problemKey"])
    .index("by_user", ["userId"])
    .index("by_user_revision", ["userId", "markedForRevision"]),
});