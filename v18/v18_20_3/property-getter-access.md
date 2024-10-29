## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|160,623,577|80395746|
|Getter|55,686,436|27843923|
|Method|105,351,142|52676079|
|DefineProperty (getter)|105,024,548|52512284|
|DefineProperty (getter & enumerable=false)|56,011,742|28008360|
|DefineProperty (getter & configurable=false)|107,080,911|53545006|
|DefineProperty (getter & enumerable=false & configurable=false)|56,391,646|28195824|
|DefineProperty (writable)|107,016,559|53508291|
|DefineProperty (writable & enumerable=false)|107,237,730|53618876|
|DefineProperty (writable & enumerable=false & configurable=false)|107,039,933|53519979|
|DefineProperties (getter)|56,781,515|28408051|
|DefineProperties (getter & enumerable=false)|56,587,781|28338822|
|DefineProperties (getter & enumerable=false & configurable=false)|52,342,804|26171409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:51:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":160623577.07626596,"samples":80395746},{"name":"Getter","opsSec":55686436.79903036,"samples":27843923},{"name":"Method","opsSec":105351142.62568736,"samples":52676079},{"name":"DefineProperty (getter)","opsSec":105024548.25538492,"samples":52512284},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56011742.796535105,"samples":28008360},{"name":"DefineProperty (getter & configurable=false)","opsSec":107080911.4075013,"samples":53545006},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56391646.87216706,"samples":28195824},{"name":"DefineProperty (writable)","opsSec":107016559.31248942,"samples":53508291},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107237730.98140472,"samples":53618876},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":107039933.1667355,"samples":53519979},{"name":"DefineProperties (getter)","opsSec":56781515.129941024,"samples":28408051},{"name":"DefineProperties (getter & enumerable=false)","opsSec":56587781.358271874,"samples":28338822},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52342804.80961319,"samples":26171409}]}-->
