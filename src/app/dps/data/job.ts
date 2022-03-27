import { Job } from '../models/job';
import { artist } from './artist';
import { scouter } from './scouter';
import { blade } from './blade';

export const jobList = [artist, scouter, blade];

export const jobRecord: Record<string, Job> = Object.fromEntries(
  jobList.map((job) => [job.name, job])
);
