import { auth, signOut } from "@/packages/nextauth/auth";

const Settings = async () => {
  const session = await auth();
  return (
    <div>
      <div>protected settings page {JSON.stringify(session)}</div>

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">sign out</button>
      </form>
    </div>
  );
};
export default Settings;
