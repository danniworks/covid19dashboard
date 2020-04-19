module.exports = {
  apps : [
    {
      name          : 'webapp',
      script        : 'npx',
      interpreter   : 'none',
      args          : 'serve build -s',
      env_production : {
        NODE_ENV: 'production'
      }
    }
  ]
}