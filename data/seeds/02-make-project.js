const projects = [
  {"project_name": "Eat more meat", "project_description": "I need to eat more meat to pack on that protein muscle!", "project_completed": false},
  {"project_name": "Pretend I'm smart", "project_description": "I'm not insufferable enough!", "project_completed": true},
  {"project_name": "Fire competent employees", "project_description": "If they are all incompetent, then I don't have to pay a dime!", "project_completed": false},
  {"project_name": "Give no descriptions to anything", "project_description": "", "project_completed": true},
  {"project_name": "Set into motion the demise of this world", "project_description": "A type C Prius cut me off on my way to Dairy Queen", "project_completed": false},
  {"project_name": "Meet more women", "project_description": "Mom's asking questions I dare not answer", "project_completed": false},
]

const resources = [
  {"resource_name": "Ribeye", "resource_description": "It is both flavoursome and tender, coming from the lightly worked upper rib cage area which spans from the sixth to twelfth ribs of the cattle. Its marbling of fat makes it very good for fast and hot cooking. "},
  {"resource_name": "A pair of glasses", "resource_description": "a pair of lenses set in a frame resting on the nose and ears, used to correct or assist defective eyesight or protect the eyes."},
  {"resource_name": "Infinite Money Glitch", "resource_description": "Maybe next, we hire tax free convicts."},
  {"resource_name": "No description", "resource_description": ""},
  {"resource_name": "Tire iron", "resource_description": "Part 1 of 2 step plan"},
  {"resource_name": "Fragile Window", "resource_description": "Part 2 of 2 step plan"},
]

// const task = [

// ]

exports.seed = async function (knex) {
  await knex("projects").insert(projects)
  await knex("resources").insert(resources)
}