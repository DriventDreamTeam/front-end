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

export async function postActivitySchedule(token, selectedActivityId) {
  const response = await api.post(`/schedule/${selectedActivityId}`, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3MzI2Nzk2Mn0.vMYiU61RtqcIxbX5P7Xu9gftUXi4AZ5SkJl9izR7wX0',
    },
  });
  return response.data;
}
