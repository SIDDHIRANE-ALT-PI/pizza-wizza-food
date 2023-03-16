const { assertSupportedNodeVersion } = require('../src/Engine');

module.exports = async () => {
    // @ts-ignore
    process.noDeprecation = true;

    assertSupportedNodeVersion();

    const mix = require('../src/Mix').primary;

    mix.js('resources/js/app.js', 'public/js/app.js').sass('resources/scss/app.scss','public/css/app.css')
    require(mix.paths.mix());


    require(mix.paths.mix());

    await mix.installDependencies();
    await mix.init();

    return mix.build();
};
