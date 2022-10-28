module.exports = {
    default: [`--format-options '{"snippetInterface": "synchronous"}'`,
        '--require ./build/features/step_definitions/*.js',
        '--require ./hooks/hooks.js'
    ].join(' ')
}