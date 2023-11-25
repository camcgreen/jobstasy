export const formRules = {
  title: {
    required: 'You must include the job title.',
    minLength: {
      value: 4,
      message: 'The job title must be at least 4 characters long.',
    },
    maxLength: {
      value: 80,
      message: 'The job title must be no longer than 80 characters long.',
    },
  },
  location: {
    required: 'You must include the job location.',
    minLength: {
      value: 2,
      message: 'The job location must be at least 2 characters long.',
    },
    maxLength: {
      value: 80,
      message: 'The job location must be no longer than 80 characters long.',
    },
  },
  description: {
    required: 'You must enter a job description.',
  },
  level: {
    required: 'You must include the job seniority level.',
  },
  deadline: {
    required: 'You must enter a date and time for the application deadline.',
  },
}
