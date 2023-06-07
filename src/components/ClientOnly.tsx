import { useState, useEffect } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

export default function ClientOnly({ children }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (typeof window === "undefined" || !hasMounted) {
    return null;
  }

  return <>{children}</>;
}
