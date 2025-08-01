import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  progress: defineTable({
    problemKey: v.string(), // Format: "categoryName-problemId"
    completed: v.boolean(),
    completedAt: v.optional(v.number()),
  }).index("by_problem_key", ["problemKey"]),
});