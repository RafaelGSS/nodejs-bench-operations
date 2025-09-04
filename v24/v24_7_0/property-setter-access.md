## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|98,862,530|49431938|
|Setter|10,797,557|5413756|
|Method|90,780,162|45415929|
|DefineProperty (setter)|92,373,296|46186665|
|DefineProperty (setter & enumerable=false)|10,789,427|5394716|
|DefineProperty (setter & configurable=false)|10,750,877|5375439|
|DefineProperty (setter & enumerable=false & configurable=false)|10,634,668|5317335|
|DefineProperty (writable)|93,648,434|46834792|
|DefineProperty (writable & enumerable=false)|92,814,290|46407923|
|DefineProperty (writable & enumerable=false & configurable=false)|93,942,781|46983356|
|DefineProperties (setter)|95,323,663|47670365|
|DefineProperties (setter & enumerable=false)|10,898,623|5449921|
|DefineProperties (setter & enumerable=false & configurable=false)|10,724,881|5362532|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:00:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49431938,"opsSec":98862530.28323779},{"name":"Setter","samples":5413756,"opsSec":10797557.933064872},{"name":"Method","samples":45415929,"opsSec":90780162.14730327},{"name":"DefineProperty (setter)","samples":46186665,"opsSec":92373296.74561317},{"name":"DefineProperty (setter & enumerable=false)","samples":5394716,"opsSec":10789427.748965468},{"name":"DefineProperty (setter & configurable=false)","samples":5375439,"opsSec":10750877.16143158},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5317335,"opsSec":10634668.574954411},{"name":"DefineProperty (writable)","samples":46834792,"opsSec":93648434.81207578},{"name":"DefineProperty (writable & enumerable=false)","samples":46407923,"opsSec":92814290.61811782},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46983356,"opsSec":93942781.95515257},{"name":"DefineProperties (setter)","samples":47670365,"opsSec":95323663.2513315},{"name":"DefineProperties (setter & enumerable=false)","samples":5449921,"opsSec":10898623.55568372},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5362532,"opsSec":10724881.591213897}]}-->
