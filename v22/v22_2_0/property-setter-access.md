## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,884,566|7942284|
|Setter|6,782,555|3391278|
|Method|15,727,669|7863835|
|DefineProperty (setter)|15,737,720|7868861|
|DefineProperty (setter & enumerable=false)|6,532,090|3266046|
|DefineProperty (setter & configurable=false)|6,492,768|3246385|
|DefineProperty (setter & enumerable=false & configurable=false)|6,723,042|3361522|
|DefineProperty (writable)|15,737,516|7868759|
|DefineProperty (writable & enumerable=false)|15,729,861|7864931|
|DefineProperty (writable & enumerable=false & configurable=false)|15,660,017|7830009|
|DefineProperties (setter)|15,778,392|7889197|
|DefineProperties (setter & enumerable=false)|6,724,451|3362226|
|DefineProperties (setter & enumerable=false & configurable=false)|6,575,568|3287785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:32:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Setter (class)","opsSec":15884566.47505942,"samples":7942284},{"name":"Setter","opsSec":6782555.565907637,"samples":3391278},{"name":"Method","opsSec":15727669.244953698,"samples":7863835},{"name":"DefineProperty (setter)","opsSec":15737720.929788353,"samples":7868861},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6532090.562924999,"samples":3266046},{"name":"DefineProperty (setter & configurable=false)","opsSec":6492768.675482017,"samples":3246385},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6723042.736064358,"samples":3361522},{"name":"DefineProperty (writable)","opsSec":15737516.489261227,"samples":7868759},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15729861.622524625,"samples":7864931},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15660017.68678735,"samples":7830009},{"name":"DefineProperties (setter)","opsSec":15778392.864155775,"samples":7889197},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6724451.663716145,"samples":3362226},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6575568.711269239,"samples":3287785}]}-->
