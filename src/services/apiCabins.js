import supabase from './supabase';

export async function getCabins() {
  let { data, error } = await supabase.from('cabin').select('*');

  if (error) {
    console.error(error);
    throw new Error('There was an error fetching cabin data');
  }

  return data;
}
