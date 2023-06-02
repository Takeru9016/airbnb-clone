"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

import { Container, Heading, ListingCard } from "@/components";
import { SafeListing, SafeUser } from "@/types";

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

export default function PropertiesClient({
  listings,
  currentUser,
}: PropertiesClientProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState("");

  const onCancel = useCallback(
    (id: string) => {
      setDeletingId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listings Deleted successfully");
          router.refresh();
        })
        .catch((error) => {
          toast.error(error?.response?.data?.error);
        })
        .finally(() => {
          setDeletingId("");
        });
    },
    [router]
  );

  return (
    <Container>
      <Heading title="Properties" subtitle="Manage your properties here." />
      <div className="grid grid-cols-1 mt-10 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            actionId={listing.id}
            disabled={deletingId === listing.id}
            actionLabel="Delete your Property"
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
}
