/**
 * node index.js <module> [action=all] [--help]
 */
;(function() {
    "use strict";

    // parse arguments
    var args   = process.argv.slice(2),
        module = '',
        action = '';

    args.forEach(function(value) {
        if (value == '--help')
        {
            console.log('Syntax: buildweb <module> [action=all] [--help]');
            process.exit();
        }
        else if(!module.length)
        {
            module = value;
        }
        else if(!action.length)
        {
            action = value;
        }
    });

    action = action || 'all';
    if (module.length == 0)
    {
        console.log('Missing argument: module');
        return;
    }

    // load configuration file
    var fs = require('fs');
    fs.exists('buildweb.json', function(exists) {
        if (!exists)
        {
             console.log('buildweb.json not found');
             process.exit();
        }

        fs.readFile('buildweb.json', 'utf8', function(error, contents) {
            var config = JSON.parse(contents);
            if (config[module] === undefined)
            {
                console.log('Module %s not found in config file.', module);
                process.exit();
            }

            if (action == 'all')
            {
                console.log('executing all actions for module %s', module);
            }
            else if(config[module][action] !== undefined)
            {
                console.log('executing %s.%s', module, action);
            }
            else
            {
                console.log('Action %s in module %s not found.', action, module);
                process.exit();
            }
        });
    });
})();
