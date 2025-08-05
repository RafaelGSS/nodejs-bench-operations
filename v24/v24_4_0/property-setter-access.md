## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|91,320,628|45660325|
|Setter|10,798,636|5399585|
|Method|86,327,242|43184996|
|DefineProperty (setter)|89,943,143|44982925|
|DefineProperty (setter & enumerable=false)|10,728,532|5364764|
|DefineProperty (setter & configurable=false)|10,759,853|5383006|
|DefineProperty (setter & enumerable=false & configurable=false)|10,819,581|5409794|
|DefineProperty (writable)|89,519,736|44760602|
|DefineProperty (writable & enumerable=false)|89,626,689|44813357|
|DefineProperty (writable & enumerable=false & configurable=false)|90,245,088|45128543|
|DefineProperties (setter)|91,298,244|45649148|
|DefineProperties (setter & enumerable=false)|10,583,049|5297270|
|DefineProperties (setter & enumerable=false & configurable=false)|10,463,466|5231739|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:36:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":45660325,"opsSec":91320628.26569048},{"name":"Setter","samples":5399585,"opsSec":10798636.05064184},{"name":"Method","samples":43184996,"opsSec":86327242.2316834},{"name":"DefineProperty (setter)","samples":44982925,"opsSec":89943143.49365246},{"name":"DefineProperty (setter & enumerable=false)","samples":5364764,"opsSec":10728532.799840422},{"name":"DefineProperty (setter & configurable=false)","samples":5383006,"opsSec":10759853.232167559},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5409794,"opsSec":10819581.941034114},{"name":"DefineProperty (writable)","samples":44760602,"opsSec":89519736.23440471},{"name":"DefineProperty (writable & enumerable=false)","samples":44813357,"opsSec":89626689.80079377},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45128543,"opsSec":90245088.63742636},{"name":"DefineProperties (setter)","samples":45649148,"opsSec":91298244.32519372},{"name":"DefineProperties (setter & enumerable=false)","samples":5297270,"opsSec":10583049.982633855},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5231739,"opsSec":10463466.17628322}]}-->
