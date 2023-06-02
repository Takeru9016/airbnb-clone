import { Container, Heading, ListingCard } from "@/components";
import { SafeListing, SafeUser } from "@/types";

interface FavoritesClientProps {
  listings: SafeListing[];
  currentUser: SafeUser | null;
}

export default function FavoritesClient({
  listings,
  currentUser,
}: FavoritesClientProps) {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you have favorited!"
      />
      <div className="mt-10 gap-8 grid grid-cols-1 sm:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
}
