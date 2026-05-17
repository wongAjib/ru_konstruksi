'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deletePortfolio(formData: FormData) {
  const id = formData.get('id') as string
  const supabase = await createClient()
  await supabase.from('portfolios').delete().eq('id', id)
  revalidatePath('/management/portfolios')
  revalidatePath('/gallery')
  revalidatePath('/')
}

export async function savePortfolio(formData: FormData) {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const category = formData.get('category') as string
  const location = formData.get('location') as string
  const client_name = formData.get('client_name') as string
  const project_date = formData.get('project_date') as string
  const description = formData.get('description') as string
  const thumbnail = formData.get('thumbnail') as string
  const is_featured = formData.get('is_featured') === 'on'

  const supabase = await createClient()

  const data = {
    title, slug, category, location, client_name,
    project_date: project_date || null,
    description, thumbnail, is_featured
  }

  if (id) {
    await supabase.from('portfolios').update(data).eq('id', id)
  } else {
    await supabase.from('portfolios').insert(data)
  }

  revalidatePath('/management/portfolios')
  revalidatePath('/gallery')
  revalidatePath('/')
  redirect('/management/portfolios')
}
