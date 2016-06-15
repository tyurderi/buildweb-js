### Installation
You can simply install this package using [npm](http://npmjs.com/) package manager.
```
npm install -g buildweb
```

### Use
```
$ buildweb frontend

$ buildweb frontend lessc

$ bw frontend lessc
```

##### Example Configuration
`buildweb.json`
``` json
{
  "modules": {
    "frontend": {
      "settings": {
        "base_path": "themes/frontend/default/_resources"
      },
      "actions": [
        "browserify",
        "minifyjs",
        "lessc"
      ]
    }
  },
  "actions": [
    {
      "name": "browserify",
      "file": "browserify",
      "sync": true,
      "args": [
        "{base_path}/js/all.js -o {base_path}/js/all.bundle.js"
      ]
    },
    {
      "name": "minifyjs",
      "file": "minifyjs",
      "sync": true,
      "args": [
        "-ml2i {base_path}/js/all.bundle.js -o {base_path}/js/all.min.js"
      ]
    },
    {
      "name": "lessc",
      "file": "lessc",
      "sync": true,
      "args": [
        "{base_path}/css/all.less {base_path}/css/all.css"
      ]
    }
  ]
}
```