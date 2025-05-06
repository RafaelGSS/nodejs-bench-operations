## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,587,886|15794018|
|Object.create({})|1,945,485|980139|
|new Function with empty prototype|108,287,205|54172734|
|Empty class|78,998,897|39608163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15794018,"opsSec":31587886.14706812},{"name":"Object.create({})","samples":980139,"opsSec":1945485.8060603775},{"name":"new Function with empty prototype","samples":54172734,"opsSec":108287205.3685979},{"name":"Empty class","samples":39608163,"opsSec":78998897.33486524}]}-->
