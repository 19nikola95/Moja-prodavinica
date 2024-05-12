import { MainLayout } from '@/components/MainLayout/MainLayout'

export default function PublicLayout ({ children }) {
  return <MainLayout>
      {children}
  </MainLayout>
}