import { Component } from '@angular/core';

@Component({
  selector: 'BlogPostSkeleton',
  template: `
    <div class="flex items-baseline w-full space-x-2 sm:space-x-12">
      <div class="px-2 w-1/5 sm:px-4 text-zinc-400 dark:text-zinc-600">
        <div class="flex items-center">
          <div class="skeleton-pulse w-2/3 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        </div>
      </div>
      <div class="flex flex-col flex-1 py-6 px-8 space-y-4 sm:space-y-6 rounded-2xl bg-zinc-200/25 dark:bg-zinc-800/15">
        <div class="skeleton-pulse w-2/5 h-2 my-2 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        <div class="skeleton-pulse w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        <div class="skeleton-pulse w-3/4 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        <div class="skeleton-pulse w-1/6 h-1 my-2 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      </div>
    </div>
`
})
export class BlogPostSkeletonComponent {}
