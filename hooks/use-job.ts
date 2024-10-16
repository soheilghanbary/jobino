import type { AddJobSchema, ReportSchema } from '@/schema';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetJobs = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const res = await fetch('/api/jobs');
      return res.json();
    },
  });
};

export const useGetJob = (jobId: string) => {
  return useQuery({
    queryKey: ['jobs', jobId],
    queryFn: async () => {
      const res = await fetch(`/api/jobs/${jobId}`);
      return res.json();
    },
  });
};

export const useAddJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: AddJobSchema) => {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};

export const useDeleteJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (jobId) => {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};

export const useUpdateJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ jobId, updatedJob }: any) => {
      const res = await fetch(`/api/jobs/${jobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedJob),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};

// add report job
export const useAddReport = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ReportSchema) => {
      const res = await fetch(`/api/reports/${data.jobId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] });
    },
  });
};
