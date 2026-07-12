import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '98jwav2j',
    dataset: 'production',
  },
  deployment: {
    // elevent-studio.sanity.studio (the live Studio). The previous appId
    // jcrf1pupfvwvb8qf4cvuhjd7 pointed to the unused elevent-id-studio host.
    appId: 't6fmd8m24a1o4qxovxug4y6y',
  },
})
