import { auth, signIn } from "@/lib/auth";

export async function signInWithGitHub() {
  return await signIn("github");
}
export async function signInWithGoogle() {
  return await signIn("google");
}

export async function session() {
  let session = await auth();
  return {
    ...session,
  };
}
