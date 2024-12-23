import { supabase } from "../../supabase/index";
import { atom } from "jotai";

export const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signInWithPassword({ email, password }).then((res) => {
    if (
      res?.error &&
      res?.error.status &&
      (res?.error?.status < 200 || res?.error?.status >= 300)
    ) {
      throw new Error("Auth");
    }
    return res;
  });
};

export const logout = () => {
  return supabase.auth.signOut();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userAtom = atom<any>(null);
