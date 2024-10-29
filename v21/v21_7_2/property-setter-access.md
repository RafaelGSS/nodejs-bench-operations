## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|144,646,100|72323067|
|Setter|11,514,104|5757055|
|Method|97,200,233|48613253|
|DefineProperty (setter)|97,374,524|48687273|
|DefineProperty (setter & enumerable=false)|11,485,471|5742741|
|DefineProperty (setter & configurable=false)|11,705,611|5854188|
|DefineProperty (setter & enumerable=false & configurable=false)|11,516,856|5758432|
|DefineProperty (writable)|97,585,401|48796304|
|DefineProperty (writable & enumerable=false)|99,265,760|49633569|
|DefineProperty (writable & enumerable=false & configurable=false)|100,130,307|50065156|
|DefineProperties (setter)|98,797,744|49398930|
|DefineProperties (setter & enumerable=false)|11,468,801|5734404|
|DefineProperties (setter & enumerable=false & configurable=false)|11,306,408|5653218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:00:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":144646100.73139685,"samples":72323067},{"name":"Setter","opsSec":11514104.335060665,"samples":5757055},{"name":"Method","opsSec":97200233.74882004,"samples":48613253},{"name":"DefineProperty (setter)","opsSec":97374524.77235359,"samples":48687273},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11485471.98466843,"samples":5742741},{"name":"DefineProperty (setter & configurable=false)","opsSec":11705611.392112633,"samples":5854188},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11516856.974717245,"samples":5758432},{"name":"DefineProperty (writable)","opsSec":97585401.51326905,"samples":48796304},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99265760.78683485,"samples":49633569},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100130307.59426646,"samples":50065156},{"name":"DefineProperties (setter)","opsSec":98797744.99942483,"samples":49398930},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11468801.072844151,"samples":5734404},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11306408.412363473,"samples":5653218}]}-->
