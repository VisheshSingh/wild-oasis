import supabase, { supabaseUrl } from './supabase';

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create cabin
  const { data, error } = await supabase
    .from('cabin')
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Could not create new cabin');
  }

  // 2. Upload image
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3. If error uploading image, then delete the cabin that got created.
  if (storageError) {
    // Handle error
    await supabase.from('cabin').delete().eq('id', data.id);
    console.error(storageError);
    throw new Error('Could not upload image therefore deleting the cabin');
  }
  return data;
}

export async function getCabins() {
  let { data, error } = await supabase.from('cabin').select('*');

  if (error) {
    console.error(error);
    throw new Error('There was an error fetching cabin data');
  }

  return data;
}

export async function deleteCabin(id) {
  const { error, data } = await supabase.from('cabin').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted!');
  }

  return data;
}
