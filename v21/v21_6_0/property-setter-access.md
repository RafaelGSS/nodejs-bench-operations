## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|710,488,926|85|
|Setter|11,226,168|94|
|Method|737,175,039|95|
|DefineProperty (setter)|742,428,564|94|
|DefineProperty (setter & enumerable=false)|11,266,591|95|
|DefineProperty (setter & configurable=false)|11,064,574|97|
|DefineProperty (setter & enumerable=false & configurable=false)|11,237,183|95|
|DefineProperty (writable)|741,847,725|95|
|DefineProperty (writable & enumerable=false)|745,073,826|91|
|DefineProperty (writable & enumerable=false & configurable=false)|745,271,514|97|
|DefineProperties (setter)|743,624,497|93|
|DefineProperties (setter & enumerable=false)|11,289,678|90|
|DefineProperties (setter & enumerable=false & configurable=false)|10,884,756|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:07:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.60647964477539},"benchmarks":[{"name":"Setter (class)","opsSec":710488925.6919887,"samples":5},{"name":"Setter","opsSec":11226167.741417218,"samples":6},{"name":"Method","opsSec":737175038.7392316,"samples":6},{"name":"DefineProperty (setter)","opsSec":742428563.5011148,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11266591.173853615,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":11064573.587442318,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11237183.427304583,"samples":7},{"name":"DefineProperty (writable)","opsSec":741847724.8043569,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":745073826.3973267,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":745271514.3914068,"samples":6},{"name":"DefineProperties (setter)","opsSec":743624496.9755663,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11289678.139777916,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10884755.665486634,"samples":5}]}-->
