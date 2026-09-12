import { useLoaderData } from 'react-router'

import type { contactLoader } from '~/sections/contact/loaders/contact.loader'

export function useContactData() {
  return useLoaderData<typeof contactLoader>()
}
