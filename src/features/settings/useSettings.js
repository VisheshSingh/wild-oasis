import { useQuery } from '@tanstack/react-query';
import { getSettings } from '../../services/apiSettings';

export function useSettings() {
  const {
    isLoading,
    error,
    data: Fetching Applications Settingssettings,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
