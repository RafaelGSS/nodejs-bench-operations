## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|91,805,395|45935454|
|Setter|11,552,405|5776416|
|Method|89,449,806|44725630|
|DefineProperty (setter)|93,043,018|46521732|
|DefineProperty (setter & enumerable=false)|11,577,081|5790890|
|DefineProperty (setter & configurable=false)|11,357,232|5680139|
|DefineProperty (setter & enumerable=false & configurable=false)|11,535,536|5767771|
|DefineProperty (writable)|91,753,765|45876968|
|DefineProperty (writable & enumerable=false)|92,102,738|46051375|
|DefineProperty (writable & enumerable=false & configurable=false)|91,942,793|45971435|
|DefineProperties (setter)|83,461,443|41730846|
|DefineProperties (setter & enumerable=false)|11,692,600|5851305|
|DefineProperties (setter & enumerable=false & configurable=false)|11,660,950|5830480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:56:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":45935454,"opsSec":91805395.30269042},{"name":"Setter","samples":5776416,"opsSec":11552405.300357824},{"name":"Method","samples":44725630,"opsSec":89449806.97733545},{"name":"DefineProperty (setter)","samples":46521732,"opsSec":93043018.51002736},{"name":"DefineProperty (setter & enumerable=false)","samples":5790890,"opsSec":11577081.279483585},{"name":"DefineProperty (setter & configurable=false)","samples":5680139,"opsSec":11357232.285589045},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5767771,"opsSec":11535536.163018703},{"name":"DefineProperty (writable)","samples":45876968,"opsSec":91753765.15448928},{"name":"DefineProperty (writable & enumerable=false)","samples":46051375,"opsSec":92102738.76346587},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45971435,"opsSec":91942793.68748124},{"name":"DefineProperties (setter)","samples":41730846,"opsSec":83461443.4518214},{"name":"DefineProperties (setter & enumerable=false)","samples":5851305,"opsSec":11692600.292282585},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5830480,"opsSec":11660950.624595698}]}-->
