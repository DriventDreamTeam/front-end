import useAsync from '../useAsync';
import useToken from '../useToken';
import * as activityApi from '../../services/activitiesApi';

export function useGetActivitiesByDateId(dateId) {
  const token = useToken();

  const {
    data: activities,
    loading: activitiesLoading,
    error: activitiesError,
    act: getActivitiesByDateId,
  } = useAsync(() => activityApi.getActivitiesByDateId(token, dateId));

  return {
    activities,
    activitiesLoading,
    activitiesError,
    getActivitiesByDateId,
  };
}
