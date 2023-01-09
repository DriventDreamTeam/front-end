import api from './api';

export async function getDays({ token }) {
  const response = await api.get('/activities/days', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getActivitiesByDateId(token, dateId) {
  const response = await api.get(`/activities/${dateId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function postActivitySchedule({ token, selectedActivityId }) {
  let body = {};
  const response = await api.post(`/schedule/${selectedActivityId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
