## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|150,757,002|75378532|
|Getter|51,031,156|25547883|
|Method|100,950,027|50476317|
|DefineProperty (getter)|98,949,021|49481108|
|DefineProperty (getter & enumerable=false)|50,965,215|25489088|
|DefineProperty (getter & configurable=false)|99,577,168|49788656|
|DefineProperty (getter & enumerable=false & configurable=false)|51,093,561|25546795|
|DefineProperty (writable)|98,955,738|49483970|
|DefineProperty (writable & enumerable=false)|99,520,867|49760441|
|DefineProperty (writable & enumerable=false & configurable=false)|99,349,461|49675407|
|DefineProperties (getter)|51,520,635|25760708|
|DefineProperties (getter & enumerable=false)|51,277,547|25641629|
|DefineProperties (getter & enumerable=false & configurable=false)|51,304,920|25652520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:37:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":150757002.79265687,"samples":75378532},{"name":"Getter","opsSec":51031156.06567912,"samples":25547883},{"name":"Method","opsSec":100950027.06650104,"samples":50476317},{"name":"DefineProperty (getter)","opsSec":98949021.14802991,"samples":49481108},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50965215.3418777,"samples":25489088},{"name":"DefineProperty (getter & configurable=false)","opsSec":99577168.60887721,"samples":49788656},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51093561.38760563,"samples":25546795},{"name":"DefineProperty (writable)","opsSec":98955738.16374998,"samples":49483970},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99520867.07186994,"samples":49760441},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99349461.65512794,"samples":49675407},{"name":"DefineProperties (getter)","opsSec":51520635.668452166,"samples":25760708},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51277547.62974086,"samples":25641629},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51304920.972583346,"samples":25652520}]}-->
