## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|773,482,124|98|
|Setter|12,619,655|97|
|Method|779,956,285|98|
|DefineProperty (setter)|754,391,130|93|
|DefineProperty (setter & enumerable=false)|12,437,901|93|
|DefineProperty (setter & configurable=false)|12,569,726|99|
|DefineProperty (setter & enumerable=false & configurable=false)|12,315,855|97|
|DefineProperty (writable)|785,587,571|97|
|DefineProperty (writable & enumerable=false)|782,902,517|98|
|DefineProperty (writable & enumerable=false & configurable=false)|784,254,432|97|
|DefineProperties (setter)|784,728,890|100|
|DefineProperties (setter & enumerable=false)|12,375,490|99|
|DefineProperties (setter & enumerable=false & configurable=false)|11,476,612|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606483459472656},"benchmarks":[{"name":"Setter (class)","opsSec":773482124.0777382,"samples":6},{"name":"Setter","opsSec":12619655.09540419,"samples":6},{"name":"Method","opsSec":779956285.1543115,"samples":6},{"name":"DefineProperty (setter)","opsSec":754391129.8472301,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12437901.088609403,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":12569725.684605356,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12315854.811847435,"samples":5},{"name":"DefineProperty (writable)","opsSec":785587571.4759763,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":782902517.1241683,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":784254432.3768657,"samples":8},{"name":"DefineProperties (setter)","opsSec":784728890.2221268,"samples":9},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12375490.422656614,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11476611.92873566,"samples":5}]}-->
