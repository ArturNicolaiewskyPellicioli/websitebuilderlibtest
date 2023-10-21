module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/components/index.tsx.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/components/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "components/{{pascalCase name}}/types.ts",
        templateFile: "plop-templates/components/types.ts.hbs",
      },
    ],
  });
};
