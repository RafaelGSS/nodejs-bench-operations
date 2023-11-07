## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|846,839,366|100|
|Getter|99,388,732|96|
|Method|848,493,837|96|
|DefineProperty (getter)|848,079,757|98|
|DefineProperty (getter & enumerable=false)|99,788,143|98|
|DefineProperty (getter & configurable=false)|848,284,926|99|
|DefineProperty (getter & enumerable=false & configurable=false)|99,297,024|96|
|DefineProperty (writable)|848,008,632|94|
|DefineProperty (writable & enumerable=false)|849,269,499|97|
|DefineProperty (writable & enumerable=false & configurable=false)|822,133,673|98|
|DefineProperties (getter)|64,328,409|87|
|DefineProperties (getter & enumerable=false)|99,261,396|96|
|DefineProperties (getter & enumerable=false & configurable=false)|99,407,008|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:57:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":846839366.237708,"samples":6},{"name":"Getter","opsSec":99388731.50815906,"samples":6},{"name":"Method","opsSec":848493837.4003291,"samples":7},{"name":"DefineProperty (getter)","opsSec":848079757.4015173,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":99788142.74441493,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":848284925.5327342,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":99297023.62080581,"samples":6},{"name":"DefineProperty (writable)","opsSec":848008632.4774224,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":849269499.3158195,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":822133673.3193537,"samples":6},{"name":"DefineProperties (getter)","opsSec":64328409.04842937,"samples":7},{"name":"DefineProperties (getter & enumerable=false)","opsSec":99261395.96174552,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":99407007.9808195,"samples":6}]}-->
