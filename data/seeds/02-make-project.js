const project = [
  {"project_name": "Eat more meat", "project_description": "I need to eat more meat to pack on that protein muscle!", "project_completed": false},
  {"project_name": "Pretend I'm smart", "project_description": "I'm not insufferable enough!", "project_completed": true},
  {"project_name": "Fire competent employees", "project_description": "If they are all incompetent, then I don't have to pay a dime!", "project_completed": false},
  {"project_name": "Give no descriptions to anything", "project_description": "", "project_completed": true},
  {"project_name": "Set into motion the demise of this world", "project_description": "A type C Prius cut me off on my way to Dairy Queen", "project_completed": false},
  {"project_name": "Meet more women", "project_description": "Mom's asking questions I dare not answer", "project_completed": false},
]

// const ingredient = [

// ]

// const task = [

// ]

exports.seed = async function (knex) {
  await knex("project").insert(project)
}