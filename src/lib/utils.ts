import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// tailwind-merge reads custom `text-*` sizes and `text-*` colours as one group and drops the
// size, so every preset in globals.css is registered here.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'eyebrow',
            'label',
            'body',
            'lead',
            'stat',
            'title',
            'title-lg',
            'display-sm',
            'display',
            'display-xl',
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
