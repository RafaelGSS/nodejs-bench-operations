## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|17,219,946|8609974|
|Setter|5,888,379|2944190|
|Method|17,743,157|8871579|
|DefineProperty (setter)|17,842,318|8921160|
|DefineProperty (setter & enumerable=false)|5,931,931|2965966|
|DefineProperty (setter & configurable=false)|6,068,852|3034427|
|DefineProperty (setter & enumerable=false & configurable=false)|5,978,497|2989249|
|DefineProperty (writable)|17,848,575|8924288|
|DefineProperty (writable & enumerable=false)|17,416,332|8708167|
|DefineProperty (writable & enumerable=false & configurable=false)|17,819,903|8909952|
|DefineProperties (setter)|17,150,840|8575423|
|DefineProperties (setter & enumerable=false)|6,030,016|3015009|
|DefineProperties (setter & enumerable=false & configurable=false)|6,002,666|3001334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:26:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":17219946.657074742,"samples":8609974},{"name":"Setter","opsSec":5888379.811498177,"samples":2944190},{"name":"Method","opsSec":17743157.92875675,"samples":8871579},{"name":"DefineProperty (setter)","opsSec":17842318.501116734,"samples":8921160},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5931931.738996555,"samples":2965966},{"name":"DefineProperty (setter & configurable=false)","opsSec":6068852.361426176,"samples":3034427},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5978497.701035603,"samples":2989249},{"name":"DefineProperty (writable)","opsSec":17848575.85725394,"samples":8924288},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17416332.85042863,"samples":8708167},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17819903.57291496,"samples":8909952},{"name":"DefineProperties (setter)","opsSec":17150840.68428357,"samples":8575423},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6030016.757933973,"samples":3015009},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6002666.499018144,"samples":3001334}]}-->
