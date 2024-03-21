import { Education } from '@/services/person'

export const emptyEducation = (): Education => ({
    type: '',
    level: '',
    startDate: '',
    endDate: '',
    name: '',
    city: ''
  })