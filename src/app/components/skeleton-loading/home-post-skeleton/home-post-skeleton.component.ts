import { Component } from '@angular/core';

@Component({
  selector: 'HomePostSkeleton',
  template: `
    <div class="flex flex-col p-4 sm:py-6 sm:px-8 space-y-4 sm:space-y-6 rounded-2xl bg-zinc-200/25 dark:bg-zinc-800/15">
      <div class="flex justify-between items-center text-zinc-400 dark:text-zinc-600 font-medium text-md">
        <div class="flex w-full space-x-4 items-center">
          <div class="w-0.5 h-5 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
          <div class="skeleton-pulse w-1/6 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
        </div>
      </div>
      <div class="skeleton-pulse w-2/5 h-2 my-2 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      <div class="skeleton-pulse w-full h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      <div class="skeleton-pulse w-3/4 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
      <div class="skeleton-pulse w-1/6 h-1 my-2 bg-zinc-300 dark:bg-zinc-700 rounded-full"></div>
    </div>
  `
})
export class HomePostSkeletonComponent {
  
}
