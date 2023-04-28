import clientPromise from "../lib/mongodb";
import { Grid } from "@mui/material";
import OurPhotos from "../src/components/photos/photos";

const Photos = ({ photos }: any) => {
  return (
    <Grid container spacing={2}>
      {photos.map((album: any) => {
        return (
          <Grid item key={album._id} xs={12} md={4} lg={3}>
            <OurPhotos
              name={album.name}
              gender={album.gender}
              age={album.age}
              personality={album.personality}
              image={album.Image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("firstDatabase");

    const photos = await db
      .collection("photos")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return {
      props: { photos: JSON.parse(JSON.stringify(photos)) },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { photos: [] },
    };
  }
}

export default Photos;
