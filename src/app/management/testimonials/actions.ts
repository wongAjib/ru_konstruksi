'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteTestimonial(formData: FormData) {
  const id = formData.get('id') as string
  const supabase = await createClient()
  await supabase.from('testimonials').delete().eq('id', id)
  revalidatePath('/management/testimonials')
  revalidatePath('/')
}

export async function saveTestimonial(formData: FormData) {
  const id = formData.get('id') as string
  const name = formData.get('name') as string
  const role = formData.get('role') as string
  const content = formData.get('content') as string
  const avatar = formData.get('avatar') as string
  const rating = parseInt((formData.get('rating') as string) || '5', 10)
  const is_featured = formData.get('is_featured') === 'on'

  const supabase = await createClient()

  const data = {
    name, role, content, avatar, rating, is_featured
  }

  if (id) {
    await supabase.from('testimonials').update(data).eq('id', id)
  } else {
    await supabase.from('testimonials').insert(data)
  }

  revalidatePath('/management/testimonials')
  revalidatePath('/')
  redirect('/management/testimonials')
}
