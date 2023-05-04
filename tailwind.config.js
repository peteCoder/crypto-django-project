module.exports = {
    content: [
        './templates/**/*.html',
        './templates/pages/*.html',
        './templates/components/*.html',
        './templates/auth/*.html',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
      extend: {},
    },
    plugins: [require('flowbite/plugin'),],
}