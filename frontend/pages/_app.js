import "@/styles/globals.css";
import "rsuite/dist/rsuite.css";
import { useAuth } from "@/shared/hooks/authHook";
import { AuthContext } from "@/shared/context/authContext";

export default function App({ Component, pageProps }) {
  const { token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userId,
        isLoggedIn: !!token,
      }}
    >
      {" "}
      <Component {...pageProps} />{" "}
    </AuthContext.Provider>
  );
}
