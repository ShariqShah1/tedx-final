import { useContext, createContext, useState } from "react";
import { useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setCurrentUser(null);
    setIsLoading(false);
  };

  const authStateChanged = async (user) => {
    setIsLoading(true);
    if (!user) {
      clear();
      return;
    }

    const userDoc = await getDoc(doc(db, "users", user.uid));

    setCurrentUser(userDoc.data());
    setIsLoading(false);
  };

  const signOut = async () => {
    await authSignOut(auth);
    clear();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return (
    <userContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoading,
        setIsLoading,
        signOut,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
export const useAuth = () => useContext(userContext);
