'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function deleteTeam(formData: FormData) {
  const id = formData.get('id') as string
  const supabase = await createClient()
  await supabase.from('teams').delete().eq('id', id)
  revalidatePath('/management/teams')
  revalidatePath('/')
}

export async function saveTeam(formData: FormData) {
  const id = formData.get('id') as string
  const name = formData.get('name') as string
  const position = formData.get('position') as string
  const description = formData.get('description') as string
  const photo = formData.get('photo') as string
  const linkedin = formData.get('linkedin') as string
  const sort_order = parseInt((formData.get('sort_order') as string) || '0', 10)

  const supabase = await createClient()

  const data = {
    name, position, description, photo, linkedin, sort_order
  }

  if (id) {
    await supabase.from('teams').update(data).eq('id', id)
  } else {
    await supabase.from('teams').insert(data)
  }

  revalidatePath('/management/teams')
  revalidatePath('/')
  redirect('/management/teams')
}
