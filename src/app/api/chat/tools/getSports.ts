
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool will show some photos of Priyansh enjoying a snooker game",
  parameters: z.object({}),
  execute: async () => {
    return "Here my some pictures of me enjoying a a snooker game.";
  },
});