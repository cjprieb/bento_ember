export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  server.createList('todo', 3);
  
  server.createList('recipe', 10);
  
  console.log("creating mirage lists");
}
