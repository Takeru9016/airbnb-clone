'use client'

import { useState } from "react";

interface ClientOnlyProps {
  children: React.ReactNode;
}

export default function ClientOnly({ children }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  const checkClientRender = () => {
    setHasMounted(true);
  };

  if (typeof window === "undefined") {
    return null;
  } else if (!hasMounted) {
    checkClientRender();
    return null;
  }

  return <>{children}</>;
}
