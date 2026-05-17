'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteService(formData: FormData) {
  const id = formData.get('id') as string
  const supabase = await createClient()
  await supabase.from('services').delete().eq('id', id)
  revalidatePath('/management/services')
  revalidatePath('/')
}

export async function saveService(formData: FormData) {
  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const slug = formData.get('slug') as string
  const short_description = formData.get('short_description') as string
  const full_description = formData.get('full_description') as string
  const hero_image = formData.get('hero_image') as string

  const icon = formData.get('icon') as string

  const features = formData.get('features') ? JSON.parse(formData.get('features') as string) : null
  const workflow = formData.get('workflow') ? JSON.parse(formData.get('workflow') as string) : null
  const faqs = formData.get('faqs') ? JSON.parse(formData.get('faqs') as string) : null
  const related_projects = formData.get('related_projects') ? JSON.parse(formData.get('related_projects') as string) : null

  const supabase = await createClient()

  const data = { 
    title, slug, short_description, full_description, hero_image, icon,
    features, workflow, faqs, related_projects
  }

  if (id) {
    await supabase.from('services').update(data).eq('id', id)
  } else {
    await supabase.from('services').insert(data)
  }

  revalidatePath('/management/services')
  revalidatePath('/')
  redirect('/management/services')
}
