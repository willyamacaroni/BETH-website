import * as elements from "typed-html";
import { Review } from "../types/review"

function ReviewItem({ id, title, rating, content }: Review) {
  return (
    <li class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">
            {title}
          </p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">
            {content}
          </p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p class="text-sm leading-6 text-gray-900">
        </p>
        <p class="mt-1 text-xs leading-5 text-gray-500">
          Posted <time datetime="2023-01-23T13:23Z">3h ago</time>
        </p>
      </div>
    </li>
  );
}

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <ul role="list" class="divide-y divide-gray-100">
      {reviews.map((review) => (
        <ReviewItem {...review} />
      ))}
    </ul>
  );
}
