export interface Imeta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url?: string;
  label: string;
  active: boolean;
}

export interface IChallengeDetails {
  id: number;
  title: string;
  slug: string;
  description: string;
  review_type: string;
  media: string[];
  submission_types: string[];
  published_at: string;
  organization: Organization;
  experience_points: number;
  configuration: Configuration;
  checklists: Checklist[];
  sections: Section[];
  rubrics: Rubric[];
}

export interface Organization {
  id: number;
  name: string;
  short_description: string;
}

export interface Configuration {
  is_enable_discussion_mode: boolean;
  is_enable_anonymous_submission: boolean;
  publicly_visible_all_submissions: boolean;
  invite_reviewer_from_challenger: boolean;
}

export interface Checklist {
  type: string;
  value: string;
}

export interface Section {
  type: string;
  title: string;
  value: any;
}
export interface Rubric {
  id: number;
  title: string;
  description: string;
  weight: number;
  levels: Level[];
}

export interface Level {
  id: number;
  title: string;
  description: string;
  points: number;
  has_follow_up_question: boolean;
  follow_up_question?: string;
}

export interface Option {
  id: string;
  image: string;
  label: string;
}
