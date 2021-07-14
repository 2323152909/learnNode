const program = require('commander')

const helpOptions = () => {
  // 增加自己的options
  program.option('-l --lhd', 'a lhd cli');
  program.option('-d --dest <dest>', 'a destination folder, 例如：-d /src/components')
  program.option('-f --framework <framework>', 'your framework')

  program.on('--help', function(){
    console.log('\n'+"Other:")
    console.log(" other options~")
  })
}

module.exports = helpOptions;