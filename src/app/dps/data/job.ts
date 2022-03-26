import { Job } from '../models/job';
import { artist } from './artist';
import { scouter } from './scouter';

export const jobList = [artist, scouter];

export const jobRecord: Record<string, Job> = Object.fromEntries(
  jobList.map((job) => [job.name, job])
);
