// jest.config.js
export default {
  testEnvironment: "jsdom", // Simula el DOM en las pruebas de React
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Usa babel-jest para transformar TS y JSX
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Ejecuta jest.setup.js antes de las pruebas
  transformIgnorePatterns: ["/node_modules/"], // No ignores los módulos de ES6 en node_modules
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy", // Ignora los archivos CSS durante las pruebas
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"], // Tratar archivos .ts y .tsx como ESM
};
