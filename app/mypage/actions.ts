'use server';

import { revalidatePath } from 'next/cache';

export async function revalidateLecturesPage() {
  revalidatePath('/mypage/lectures');
}

export async function revalidateReviewsPage() {
  revalidatePath('/mypage/reviews');
}

export async function revalidateMyPageData() {
  revalidatePath('/mypage/lectures');
  revalidatePath('/mypage/reviews');
}
