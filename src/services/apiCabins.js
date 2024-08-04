import supabase from './supabase';

export async function createCabin(newCabin) {
  const { data, error } = await supabase
    .from('cabin')
    .insert([newCabin])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Could not create new cabin');
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
