import { auth } from '@/auth'

const Settings = async () => {
    const session = await auth()
  return (
    <div>protected settings page {JSON.stringify(session)}</div>
  )
}
export default Settings