import { tool } from 'ai';
import { z } from 'zod';

export const getCrazy = tool({
  description:
    "This tool will tell the craziest thing I've ever done. Use it when the user asks something like: 'What's the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "I travelled alone without money with random truck drivers for 2 days 🚚. Yes, really! It was an adventure that taught me a lot about trusting people, adapting to situations, and surviving on pure determination (and maybe a few roadside dhabas 😅). Would I do it again? Maybe. Would I recommend it? That's... debatable. 😄";
  },
});
