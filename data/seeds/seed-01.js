const resources = [
  {
    resource_name: "Plywood",
    resource_description: "Prolly hammer it or smthin idk",
  },
  { resource_name: "Power tools" },
  {
    resource_name: "Cement mixer",
    resource_description: "Dont forget the cement dummy",
  },
];

const projects = [
  {
    project_name: "House on the Hill",
    project_description: "Its a damn long hike",
    project_completed: 1,
  },
  { project_name: "Bank of Redding", project_completed: 0 },
  {
    project_name: "Old Guys Garage",
    project_description: "Dude looks crotchety",
  },
];

const tasks = [
  {
    task_description: "Go to ace for extra nails",
    task_notes: "damn theyre expensive",
    task_completed: 1,
    project_id: 1,
  },

  {
    task_description: "Got to go back for paint",
    task_completed: 1,
    project_id: 1,
  },

  {
    task_description: "Time to clean up",
    task_notes: "Hate this part",
    task_completed: 0,
    project_id: 1,
  },

  {
    task_description: "Let them take the money away",
    task_notes: "They dont trust us",
    task_completed: 0,
    project_id: 2,
  },

  {
    task_description: "Remodel the safe",
    task_completed: 0,
    project_id: 2,
  },

  {
    task_description: 'Time to clean up',
    task_notes: 'Always the worst',
    task_completed: 0,
    project_id: 2
  },

  {
    task_description: 'start cleaning all of old guys garage',
    task_notes: 'Old guy is mean af',
    task_completed: 1,
    project_id: 3
  },

  {
    task_description: 'clean garage and make amends',
    task_notes: 'still hate this guy',
    task_completed: 0,
    project_id: 3
  }
];

const projectAndResources = [
    {resource_id: 1, project_id: 1},
    {resource_id: 2, project_id: 1},
    {resource_id: 2, project_id: 2},
    {resource_id: 2, project_id: 3},
    {resource_id: 3, project_id: 3},
    {resource_id: 3, project_id: 2}
]

exports.seed = async function (knex) {
    await knex('resources').insert(resources)
    await knex('projects').insert(projects)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(projectAndResources)
};
