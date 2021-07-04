const spawn = require('cross-spawn');
const { readdirSync, fstat, statSync } = require('fs')
const path = require('path')
const prompts = require('prompts')
const getLessons = () => {
    return readdirSync(path.resolve(__dirname)).filter(path => statSync(path).isDirectory()).filter(d => d.includes('leccion'))
}

const main = async () => {
    const lessons = getLessons()
    const response = await prompts({
        type: 'select',
        choices: lessons.map(item => ({ title: item, value: item })),
        name: 'lesson',
        message: 'What lesson you want to run?',
    })
    const { lesson } = response

    spawn.sync('npm', ['run', '--prefix', lesson, 'dev'], { stdio: 'inherit' })
}

main()
