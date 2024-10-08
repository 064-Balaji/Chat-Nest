import { Theme } from "@radix-ui/themes";
import { ThemeProvider as Provider } from "next-themes";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme>
      <Provider attribute="class">{children}</Provider>
    </Theme>
  );
};

export default ThemeProvider;
