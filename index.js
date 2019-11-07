module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["prettier"],
  globals: {
    window: true,
    navigator: true,
    document: true
  },
  rules: {
    "max-len": ["error", { code: 80, tabWidth: 2 }],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ],
    "eol-last": ["error", "always"],
    "no-invalid-this": 0,
    "react/sort-comp": [
      1,
      {
        order: ["static-methods", "lifecycle", "everything-else", "render"]
      }
    ],

    "arrow-parens": ["error", "always"],
    quotes: ["error", "double"],
    "react/button-has-type": 0,
    "react/jsx-props-no-spreading": 0,
    "react/button-has-type": 0,

    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "import/extensions": [0, { extensions: [".js", ".jsx"] }],
    "react/prop-types": [1, { ignore: ["history", "children", "navigation"] }],

    "react/jsx-curly-brace-presence": [
      "error",
      { props: "always", children: "never" }
    ],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-static-element-interactions": 0
  }
};
