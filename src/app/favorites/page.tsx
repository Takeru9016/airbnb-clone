import { getCurrentUser, getFavoriteListings } from "@/actions";
import { ClientOnly, EmptyState, FavoritesClient } from "@/components";

export default async function FavoritePage() {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favorites"
          subtitle="Tap the heart icon on any listing to save it here."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient currentUser={currentUser} listings={listings} />
    </ClientOnly>
  );
}
