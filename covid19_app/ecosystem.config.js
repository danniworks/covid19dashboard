module.exports = {
    apps : [
      {
        name: "covid19_webapp",
        script: "npm",
        args: "run start",
        watch: true,
        env: {
          "PORT": 8080,
          "NODE_ENV": "development"
        },
        env_production: {
          "PORT": 3000,
          "NODE_ENV": "production",
        }
      }
    ]
}