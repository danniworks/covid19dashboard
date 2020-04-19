module.exports = {
    apps : [
      {
        name: "webapp",
        script: "serve",
        args: "-s build",
        watch: true
      }
    ]
}